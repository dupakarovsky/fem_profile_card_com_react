// const OpenProps = require("open-props");
// const postcssJitProps = require("postcss-jit-props");
// const cssnano = require("cssnano");
const autoprefixer = require("autoprefixer");
const postcssPresetEnv = require("postcss-preset-env");
const postcssImport = require("postcss-import");

module.exports = {
    plugins: [
        postcssImport,
        autoprefixer,
        postcssPresetEnv({
            stage: 0,
        }),
        //   postcssJitProps(OpenProps),
        // cssnano,
    ],
};
