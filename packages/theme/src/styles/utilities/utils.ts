import { CSSObject, Theme } from "@/@types";
import { RuleRegistry } from "@/runtime/Scanner";
import { UtilityContext } from "./types";

function stripPrefix(cls: string, prefix: string) {
  return prefix && cls.startsWith(prefix) ? cls.slice(prefix.length) : cls;
}

function withKey(cls: string, prefix: string, scale?: Record<string, any>) {
  if (!cls.startsWith(prefix)) return false;
  const key = cls.slice(prefix.length);
  if (key in (scale ?? {})) return { key, body: key, raw: cls };
  return false;
}

function withColorKey(
  cls: string,
  prefix: string,
  scale: Record<string, string>,
) {
  if (!cls.startsWith(prefix)) return false;
  const key = cls.slice(prefix.length); // may include "/80" etc.
  return { key, raw: cls };
}

function style(
  prop: string | string[],
  value: string,
  ctx: UtilityContext,
  meta: any,
): CSSObject {
  const decls = Array.isArray(prop)
    ? Object.fromEntries(prop.map((p) => [p, value]))
    : { [prop]: value };
  return finalize(decls, ctx, meta);
}

function styleMany(
  obj: Record<string, string>,
  ctx: UtilityContext,
  meta: any,
): CSSObject {
  return finalize(obj, ctx, meta);
}

function finalize(
  decls: Record<string, string>,
  ctx: UtilityContext,
  meta: any,
): CSSObject {
  const negative = meta.negative;
  const important = meta.important || ctx.important === true;
  const importantSuffix = important ? " !important" : "";

  const out: Record<string, string> = {};
  for (const [k, v] of Object.entries(decls)) {
    let val = v;
    if (negative && /^-?\d/.test(val)) {
      val = val.startsWith("-") ? val.slice(1) : `-${val}`;
    }
    out[k] = `${val}${importantSuffix}`;
  }

  let selector = `.${escapeClass(meta.raw ?? "")}`;
  if (typeof ctx.important === "string")
    selector = `${ctx.important} ${selector}`;
  return { selector, decls: out };
}

function escapeClass(cls: string) {
  return cls.replace(/([^a-zA-Z0-9_-])/g, "\\$1");
}

// helpers
export function util(reg: RuleRegistry, theme: Theme) {
  const S = theme.spacing;
  const propScale = (prefix: string, prop: string | string[]) =>
    reg.addPrefix(prefix, {
      match: (cls) => withKey(cls, prefix, S),
      apply: (m, meta, ctx) => styleFromScale(m, prop, S, ctx, meta),
    });

  function addScale(
    reg: RuleRegistry,
    prefix: string,
    prop: string | string[],
    scale: Record<string, string> = {},
  ) {
    reg.addPrefix(prefix, {
      match: (cls) => withKey(cls, prefix, scale),
      apply: (m, meta, ctx) => styleFromScale(m, prop, scale, ctx, meta),
    });
  }
  function addExactDecl(
    reg: RuleRegistry,
    name: string,
    prop: string,
    value: string,
  ) {
    reg.addExact(name, {
      match: (cls) => (cls === name ? { raw: cls } : false),
      apply: (m, meta, ctx) => style(prop, value, ctx, meta),
    });
  }

  function styleFromScale(
    m: any,
    prop: string | string[],
    scale: Record<string, string>,
    ctx: UtilityContext,
    meta: any,
  ): CSSObject {
    let val = scale[m.key];
    if (meta.negative && typeof val === "string" && /^-?\d/.test(val)) {
      val = val.startsWith("-") ? val.slice(1) : `-${val}`;
    }
    if (val === undefined && m.key) val = m.key;
    return finalize(
      Array.isArray(prop)
        ? Object.fromEntries((prop as string[]).map((p) => [p, val]))
        : { [prop as string]: val },
      ctx,
      meta,
    );
  }

  return {
    propScale,
  };
}
