/**
 * To enable Node.js integration in this file, open up `main.ts` and enable the `nodeIntegration` flag:
 * ```
 *   mainWindow = new BrowserWindow({webPreferences: {nodeIntegration: true}});
 * ```
 */

import {createRoot} from 'react-dom/client';

import {App} from '@root/App';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(<App />);
