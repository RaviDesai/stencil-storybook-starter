# Stencil + Storybook Starter

## Installation

Clone the repo into a new folder:

```sh
git clone https://github.com/claviska/stencil-storybook-starter your-lib-name
cd your-lib-name
git remote rm origin
```

Then swap out `stencil-storybook-starter` with `your-lib-name` in the following files:

- `stencil.config.ts`
- `.storybook/preview-head.html`
- `.storybook/webpack.config.js`

To start developing, use:

```sh
npm run start
```

To build your Stencil components:

```sh
npm run build
```

To build Storybook:

```sh
npm run build-storybook
```
