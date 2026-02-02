import { render } from '../../src/entry-server.tsx';
import fs from 'fs';
import path from 'path';

let cssFile = '';
let jsFile = '';

// Find the actual CSS and JS files from the build directory
try {
  const assetsDir = path.join(__dirname, '../../build/assets');
  const files = fs.readdirSync(assetsDir);
  cssFile = files.find(f => f.startsWith('index-') && f.endsWith('.css')) || 'index.css';
  jsFile = files.find(f => f.startsWith('index-') && f.endsWith('.js')) || 'index.js';
} catch (e) {
  // Fallback if files can't be read
  cssFile = 'index.css';
  jsFile = 'index.js';
}

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
    <link rel="stylesheet" href="/assets/${cssFile}" />
  </head>
  <body>
    <div id="root">${html}</div>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.14.1/dist/gsap.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.14.1/dist/ScrollTrigger.min.js"></script>
    <script type="module" src="/assets/${jsFile}"></script>
  </body>
</html>
    `,
  };
}