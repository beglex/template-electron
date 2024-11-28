import {ipcRenderer} from 'electron';

import {ACTIONS} from '@root/constants';

export const theme = {
    toggle: () => ipcRenderer.invoke(ACTIONS.THEME.TOGGLE),
};
