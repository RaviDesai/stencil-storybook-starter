module.exports = {
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-knobs/register'
  ],
  stories: ['../src/components/**/*.stories.(mdx|js)']
};
