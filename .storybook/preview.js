import { configure, addParameters, setCustomElements } from '@storybook/web-components';
import customElements from '../custom-elements.json';

setCustomElements(customElements);

addParameters({
  docs: {
    iframeHeight: '200px',
  }
});

// force full reload to not reregister web components
const req = require.context('../src/components', true, /\.stories\.(js|mdx)$/);
configure(req, module);
