import {contextBridge} from 'electron';

import {api, theme} from '@root/services';

export const outside = {
    engines: [
        {name: 'Electron', version: process.versions.electron},
        {name: 'Node.js', version: process.versions.node},
        {name: 'Chrome', version: process.versions.chrome},
        {name: 'V8', version: process.versions.v8},
    ] as {name: string; version: typeof process.versions[string]}[],
    platform: process.platform === 'darwin' ? 'mac' : 'win',
} as const;

contextBridge.exposeInMainWorld('api', api);
contextBridge.exposeInMainWorld('outside', outside);
contextBridge.exposeInMainWorld('theme', theme);
