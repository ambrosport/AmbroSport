import { render } from '../../src/entry-server.tsx';
import fs from 'fs';
import path from 'path';

function getCSSFile() {
  try {
    const assetsDir = path.join(__dirname, '../../build/assets');
    if (fs.existsSync(assetsDir)) {
      const files = fs.readdirSync(assetsDir);
      const cssFile = files.find(f => f.endsWith('.css'));
      return cssFile || '';
    }
  } catch (e) {
    console.error('Error reading CSS:', e);
  }
  return '';
}

function getJSFile() {
  try {
    const assetsDir = path.join(__dirname, '../../build/assets');
    if (fs.existsSync(assetsDir)) {
      const files = fs.readdirSync(assetsDir);
      const jsFile = files.find(f => f.endsWith('.js') && !f.includes('server'));
      return jsFile || '';
    }
  } catch (e) {
    console.error('Error reading JS:', e);
  }
  return '';
}

export async function handler(event: any) {
  const url = event.path;
  const { html } = render(url);
  const cssFile = getCSSFile();
  const jsFile = getJSFile();

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
    ${cssFile ? `<link rel="stylesheet" crossorigin href="/assets/${cssFile}">` : ''}
    ${jsFile ? `<script type="module" crossorigin src="/assets/${jsFile}"></script>` : ''}
  </head>
  <body>
    <div id="root">${html}</div>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.14.1/dist/gsap.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.14.1/dist/ScrollTrigger.min.js"></script>
  </body>
</html>
    `,
  };
}