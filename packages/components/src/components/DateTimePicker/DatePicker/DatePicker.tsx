import React, { useState } from "react";
import "./DatePicker.css";

export type DatePickerProps = {
  variant?: "docked" | "modal" | "modal-input";
  initialDate?: Date;
  onChange?: (date: Date | { start: Date; end: Date }) => void;
  mode?: "single" | "range";
};

export const DatePicker: React.FC<DatePickerProps> = ({
  variant = "docked",
  initialDate = new Date(),
  mode,
  onChange,
}) => {
  const [currentDate, setCurrentDate] = useState(initialDate);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [tempDate, setTempDate] = useState<Date | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [viewMode, setViewMode] = useState<"day" | "month" | "year">("day");
  // For range
  const [rangeStart, setRangeStart] = useState<Date | null>(null);
  const [rangeEnd, setRangeEnd] = useState<Date | null>(null);

  const weekdays = ["S", "M", "T", "W", "T", "F", "S"];

  function handleRangeSelect(day: Date) {
    if (!rangeStart || (rangeStart && rangeEnd)) {
      // Start new range
      setRangeStart(day);
      setRangeEnd(null);
    } else if (rangeStart && !rangeEnd) {
      if (day >= rangeStart) {
        setRangeEnd(day);
      } else {
        setRangeEnd(rangeStart);
        setRangeStart(day);
      }
    }
  }

  function isInRange(day: Date) {
    return rangeStart && rangeEnd && day >= rangeStart && day <= rangeEnd;
  }

  // ---- Calendar Renderer ----
  const renderCalendar = (
    dateValue: Date | null,
    setValue: (d: Date) => void,
    rangeMode = false
  ) => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    const daysInMonth = lastDay.getDate();
    const startDay = firstDay.getDay();
    const totalCells = Math.ceil((startDay + daysInMonth) / 7) * 7;

    const cells: React.ReactNode[] = [];

    weekdays.forEach((w, i) => {
      cells.push(
        <div key={`weekday-${i}`} className="dp-weekday">
          {w}
        </div>
      );
    });

    for (let i = 0; i < totalCells; i++) {
      const dayNum = i - startDay + 1;
      if (i < startDay || dayNum > daysInMonth) {
        cells.push(<div key={`blank-${i}`} className="dp-cell empty" />);
      } else {
        const date = new Date(year, month, dayNum);

        const isToday = date.toDateString() === new Date().toDateString();
        const isSelected =
          !rangeMode && dateValue?.toDateString() === date.toDateString();

        const isStart =
          rangeMode && date.toDateString() === rangeStart?.toDateString();
        const isEnd =
          rangeMode && date.toDateString() === rangeEnd?.toDateString();
        const inRange = rangeMode && isInRange(date);

        cells.push(
          <button
            key={i}
            className={`dp-cell
              ${isSelected ? "selected" : ""} 
              ${isStart ? "selected start" : ""} 
              ${isEnd ? "selected end" : ""} 
              ${inRange ? "in-range" : ""}`}
            onClick={() => {
              if (rangeMode) {
                handleRangeSelect(date);
              } else {
                setValue(date);
              }
            }}
          >
            {dayNum}
          </button>
        );
      }
    }

    return <div className="dp-grid">{cells}</div>;
  };

  // ---- Modal Header (only for modal variant) ----
  const ModalHeader = () => (
    <>
      <div className="dp-dialog-header">
        {/* Top subtitle */}
        <p className="dp-dialog-subtitle">Select date</p>

        {/* Date row (date + edit button in same row) */}
        <div className="dp-dialog-date-row">
          <h2 className="dp-dialog-date">
            {tempDate
              ? tempDate.toLocaleDateString("en-US", {
                  weekday: "short",
                  month: "short",
                  day: "numeric",
                })
              : selectedDate
              ? selectedDate.toLocaleDateString("en-US", {
                  weekday: "short",
                  month: "short",
                  day: "numeric",
                })
              : currentDate.toLocaleDateString("en-US", {
                  weekday: "short",
                  month: "short",
                  day: "numeric",
                })}
          </h2>
          <button className="dp-edit-btn">✎</button>
        </div>
      </div>

      <hr className="dp-divider" />
    </>
  );

  // ---- Month Selector (common in all) ----
  const MonthSelector = () => (
    <div className="dp-month-row">
      <select
        className="dp-month-select"
        value={`${currentDate.getFullYear()}-${currentDate.getMonth()}`}
        onChange={(e) => {
          const [year, month] = e.target.value.split("-").map(Number);
          setCurrentDate(new Date(year, month, 1));
        }}
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <option key={i} value={`${currentDate.getFullYear()}-${i}`}>
            {new Date(currentDate.getFullYear(), i, 1).toLocaleString("en-US", {
              month: "long",
            })}{" "}
            {currentDate.getFullYear()}
          </option>
        ))}
      </select>

      <div className="dp-month-controls">
        <button
          onClick={() =>
            setCurrentDate(
              new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
            )
          }
        >
          ◀
        </button>
        <button
          onClick={() =>
            setCurrentDate(
              new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
            )
          }
        >
          ▶
        </button>
      </div>
    </div>
  );

  // ----------------- DOCKED -----------------
  if (variant === "docked") {
    return (
      <div className="dp-field">
        <label className="dp-label">Date</label>

        {/* Overlay input (MM/DD/YYYY clickable) */}
        <div className="dp-input-overlay">
          <span onClick={() => setViewMode("month")}>
            {selectedDate
              ? selectedDate.toLocaleDateString("en-US", { month: "2-digit" })
              : "MM"}
          </span>
          /
          <span onClick={() => setViewMode("day")}>
            {selectedDate
              ? selectedDate.toLocaleDateString("en-US", { day: "2-digit" })
              : "DD"}
          </span>
          /
          <span onClick={() => setViewMode("year")}>
            {selectedDate ? selectedDate.getFullYear() : "YYYY"}
          </span>
        </div>

        <div className="dp-dialog docked-variant">
          {viewMode === "day" && (
            <>
              <MonthSelector />
              {renderCalendar(selectedDate, setSelectedDate)}
            </>
          )}

          {viewMode === "month" && (
            <div className="month-list">
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={i}
                  className="dp-option"
                  onClick={() => {
                    const newDate = new Date(selectedDate || currentDate);
                    newDate.setMonth(i);
                    setSelectedDate(newDate);
                    setCurrentDate(newDate);
                    setViewMode("day");
                  }}
                >
                  {new Date(0, i).toLocaleString("en-US", { month: "long" })}
                </div>
              ))}
            </div>
          )}

          {viewMode === "year" && (
            <div className="year-list">
              {Array.from({ length: 12 }).map((_, i) => {
                const year = currentDate.getFullYear() - 6 + i;
                return (
                  <div
                    key={year}
                    className="dp-option"
                    onClick={() => {
                      const newDate = new Date(selectedDate || currentDate);
                      newDate.setFullYear(year);
                      setSelectedDate(newDate);
                      setCurrentDate(newDate);
                      setViewMode("day");
                    }}
                  >
                    {year}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    );
  }

  // ----------------- MODAL -----------------
  if (variant === "modal") {
    return (
      <div className="dp-overlay">
        <div className="dp-dialog modal-variant">
          {/* ---- Header ---- */}
          {mode === "range" ? (
            <div className="dp-dialog-header">
              <p className="dp-dialog-subtitle">Select date range</p>
              <div className="dp-dialog-date-row">
                <h2 className="dp-dialog-date">
                  {rangeStart && rangeEnd
                    ? `${rangeStart.toLocaleDateString()} – ${rangeEnd.toLocaleDateString()}`
                    : rangeStart
                    ? rangeStart.toLocaleDateString()
                    : "Select dates"}
                </h2>
              </div>
            </div>
          ) : (
            <ModalHeader /> // your single date header component
          )}

          {/* ---- Month Selector ---- */}
          <MonthSelector />

          {/* ---- Calendar ---- */}
          {mode === "range"
            ? renderCalendar(null, () => {}, true) // range selection enabled
            : renderCalendar(tempDate, setTempDate)}

          {/* ---- Actions ---- */}
          <div className="dp-actions">
            <button
              className="dp-action"
              onClick={() => {
                if (mode === "range") {
                  setRangeStart(null);
                  setRangeEnd(null);
                } else {
                  setTempDate(null);
                }
              }}
            >
              Cancel
            </button>

            <button
              className="dp-action primary"
              onClick={() => {
                if (mode === "range") {
                  if (rangeStart && rangeEnd) {
                    onChange?.({ start: rangeStart, end: rangeEnd });
                  }
                } else {
                  if (tempDate) {
                    setSelectedDate(tempDate);
                    onChange?.(tempDate);
                  }
                }
              }}
            >
              OK
            </button>
          </div>
        </div>
      </div>
    );
  }
  // ----------------- MODAL-INPUT -----------------
  if (variant === "modal-input") {
    return (
      <>
        <div className="dp-field" onClick={() => setShowModal(true)}>
          <label className="dp-label">
            {mode === "range" ? "Dates" : "Date"}
          </label>
          <input
            className="dp-input"
            type="text"
            readOnly
            value={
              mode === "range"
                ? rangeStart && rangeEnd
                  ? `${rangeStart.toLocaleDateString()} - ${rangeEnd.toLocaleDateString()}`
                  : ""
                : selectedDate
                ? selectedDate.toLocaleDateString()
                : ""
            }
            placeholder={
              mode === "range" ? "MM/DD/YYYY - MM/DD/YYYY" : "MM/DD/YYYY"
            }
          />
        </div>

        {showModal && (
          <div
            className="dp-overlay"
            onClick={(e) => e.target === e.currentTarget && setShowModal(false)}
          >
            <div className="dp-dialog modal-variant">
              <h3 className="dp-title">
                {mode === "range" ? "Enter dates" : "Enter date"}
              </h3>

              <MonthSelector />
              {renderCalendar(tempDate, setTempDate, mode === "range")}

              <div className="dp-actions">
                <button
                  className="dp-action"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button
                  className="dp-action primary"
                  onClick={() => {
                    if (mode === "range" && rangeStart && rangeEnd) {
                      onChange?.({ start: rangeStart, end: rangeEnd });
                    } else if (tempDate) {
                      setSelectedDate(tempDate);
                      onChange?.(tempDate);
                    }
                    setShowModal(false);
                  }}
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }

  return null;
};
