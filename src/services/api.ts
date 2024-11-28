import {ipcRenderer} from 'electron';

import {ACTIONS} from '@root/constants';

export const api = {
    ping: () => ipcRenderer.invoke(ACTIONS.API.PING),
    onOpenNotification: (callback: (value: any) => void) =>
        ipcRenderer.on(ACTIONS.API.SHOW_NOTIFICATION, (_, value) => callback(value)),
    exit: () => ipcRenderer.invoke(ACTIONS.API.EXIT),
};
