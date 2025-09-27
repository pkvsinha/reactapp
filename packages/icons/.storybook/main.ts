import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-docs"
  ],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {}
  },
  // This is where you configure Vite
  async viteFinal(config) {
    // Add external dependencies here
    // For example, if you want to exclude 'react' and 'react-dom' from Storybook's bundle
    // if (config.build) {
    //   config.build.rollupOptions = config.build.rollupOptions || {};
    //   config.build.rollupOptions.external = [
    //     ...(Array.isArray(config.build.rollupOptions.external) ? config.build.rollupOptions.external : []),
    //     'react',
    //     'react-dom',
    //     // Add other modules you want to externalize
    //   ];
    // }
    const newConfig = {
      ...config,
      build: {
        ...config.build,
        rollupOptions: {
          ...config.build?.rollupOptions,
          external: ['react', 'react-dom'],
        },
      },
    };

    console.log('Vite configuration for Storybook:', newConfig);

    // You can also adjust other Vite options here, like optimizeDeps
    // config.optimizeDeps.exclude = ['your-library-to-exclude'];

    return newConfig;
  },
};
export default config;