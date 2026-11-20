import { fileURLToPath } from 'node:url';

const config = {
  plugins: {
    [fileURLToPath(new URL('./postcss-tailwind.cjs', import.meta.url))]: {},
  },
};

export default config;