import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'stencil-storybook-starter',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'docs-vscode',
      file: 'custom-elements.json'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ]
};
