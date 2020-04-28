const path = require('path');
const util = require('util');
const webpack = require('webpack');
const packageJson = require('./package.json');

const isString = x => typeof x === 'string' || util.types.isStringObject(x);

const licenses = [];
for (const dep in packageJson.dependencies) {
  const pkg = require(`./node_modules/${dep}/package.json`);
  let entry = `${pkg.name} v${pkg.version}`;
  if (pkg.author) {
    entry += ', (c) ';
    if (isString(pkg.author)) {
      entry += pkg.author;
    } else {
      entry += pkg.author.name;
      if (pkg.author.email) {
        entry += `<${pkg.author.email}>`;
      }
      if (pkg.author.url) {
        entry += ` (${pkg.author.url})`;
      }
    }
  }
  if (pkg.license) {
    entry += ', licence: ';
    if (isString(pkg.license)) {
      entry += pkg.license;
    } else if (Array.isArray(pkg.license)) {
      entry += pkg.license.map(i => i.type).join(', ');
    } else {
      entry += pkg.license.type;
    }
  }
  licenses.push(entry);
}

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'js'),
    filename: 'index.js'
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: licenses.join('\n')
    })
  ]
};
