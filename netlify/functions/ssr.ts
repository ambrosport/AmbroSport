import { render } from '../../src/entry-server.tsx';

export async function handler(event: any) {
  const url = event.path;
  const { html } = render(url);

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html',
    },
    body: `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Ambro Sport</title>
  </head>
  <body>
    <div id="root">${html}</div>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.14.1/dist/gsap.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.14.1/dist/ScrollTrigger.min.js"></script>
    <script type="module" src="/src/entry-client.tsx"></script>
  </body>
</html>
    `,
  };
}