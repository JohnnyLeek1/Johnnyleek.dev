import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

const renderUsingRouter = (browser, { route = '/' } = {}) => {
  window.history.pushState({}, 'React Test Page', route);

  return render(browser, { wrapper: BrowserRouter });
};

export { renderUsingRouter };
