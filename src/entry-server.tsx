import { renderToString } from "react-dom/server";
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';
import App from "./App.tsx";

export function render(url: string) {
  const history = createMemoryHistory({
    initialEntries: [url],
  });
  const html = renderToString(
    <Router history={history}>
      <App />
    </Router>
  );
  return { html };
}