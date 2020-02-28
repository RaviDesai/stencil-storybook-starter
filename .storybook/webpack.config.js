const fs = require('fs');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');

module.exports = async ({ config }) => {
  // config.entry.push(path.join(__dirname, '../dist/stencil-storybook-starter.js'))

  fs.readdirSync(path.join(__dirname, '../dist/collection/components')).map(file => {
    try {
      const jsFilePath = path.join(__dirname, `../dist/collection/components/${file}/${file}.js`);
      if (fs.existsSync(jsFilePath)) {
        config.entry.push(jsFilePath);
      }
    } catch (err) {
      console.error(err);
    }

    try {
      const cssFilePath = path.join(__dirname, `../dist/collection/components/${file}/${file}.css`);
      if (fs.existsSync(cssFilePath)) {
        config.entry.push(cssFilePath);
      }
    } catch (err) {
      console.error(err)
    }
  });

  config.plugins.push(
    new CopyPlugin([
      {
        from: '**/*',
        to: './',
        context: 'dist',
      }
    ])
  );

  config.plugins.push(new WriteFilePlugin());

  return config;
}
