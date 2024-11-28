import {app, BrowserWindow, dialog, ipcMain, Menu, nativeTheme} from 'electron';
import {join} from 'node:path';
// @ts-expect-error -> In vite there are no types for the following line. Electron forge error
import started from 'electron-squirrel-startup';

import {ACTIONS, SHORTCUTS} from '@root/constants';
import {progress} from '@root/utils';

if (started) {
    app.quit();
}

let mainWindow: BrowserWindow;

const createWindow = () => {
    mainWindow = new BrowserWindow({
        backgroundColor: nativeTheme.shouldUseDarkColors ? '#202020' : '#ffffff',
        height: 600,
        minHeight: 500,
        minWidth: 550,
        frame: false,
        width: 800,
        webPreferences: {
            preload: join(__dirname, 'preload.js'),
            spellcheck: true,
        },
    });

    if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
        mainWindow.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL);
    } else {
        mainWindow.loadFile(join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`));
    }
};

const createMenu = () => {
    Menu.setApplicationMenu(Menu.buildFromTemplate([{
        label: 'Actions',
        submenu: [
            {
                label: 'Show Notification',
                accelerator: SHORTCUTS.SHOW_NOTIFICATION[process.platform === 'darwin' ? 'mac' : 'win'],
                click: () => mainWindow.webContents.send(ACTIONS.API.SHOW_NOTIFICATION),
            }, {
                label: 'Show About',
                accelerator: SHORTCUTS.SHOW_ABOUT[process.platform === 'darwin' ? 'mac' : 'win'],
                click: () => dialog.showMessageBox({title: app.name, message: `Version: ${app.getVersion()}`}),
            },
        ],
    }]));
};

app.on('activate', () => {
    if (!BrowserWindow.getAllWindows().length) {
        createWindow();
    }
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.whenReady()
    .then(() => {
        createWindow();
        createMenu();

        ipcMain.handle(ACTIONS.API.PING, async () => {
            const delay = Math.round(Math.random() * 5000 + 1000);

            for await (const count of progress({end: delay})) {
                mainWindow.setProgressBar(count);
            }

            return 'pong';
        });

        ipcMain.handle(ACTIONS.API.EXIT, () => {
            app.quit();
        });

        ipcMain.handle(ACTIONS.THEME.TOGGLE, () => {
            nativeTheme.themeSource = nativeTheme.shouldUseDarkColors ? 'light' : 'dark';

            return nativeTheme.shouldUseDarkColors;
        });
    });
