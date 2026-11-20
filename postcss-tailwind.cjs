// Load Tailwind's ESM entry point on Node 20.15, where require(esm) is unavailable.
module.exports = function tailwindPostcss(options) {
    return {
      postcssPlugin: 'luma-tailwind-esm',
      async Once(root, helpers) {
        const { default: tailwind } = await import('@tailwindcss/postcss');
        const { default: postcss } = await import('postcss');
        const result = await postcss([tailwind(options)]).process(
          root,
          helpers.result.opts,
        );
  
        helpers.result.messages.push(...result.messages);
      },
    };
  };
  
  module.exports.postcss = true;