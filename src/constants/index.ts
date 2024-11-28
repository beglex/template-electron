enum ApiAction {
    PING = 'api:ping',
    SHOW_NOTIFICATION = 'api:show-notification',
    EXIT = 'api:exit',
};

enum ThemeAction {
    TOGGLE = 'theme:toggle',
}

export const ACTIONS = {
    API: ApiAction,
    THEME: ThemeAction,
} as const;

export const SHORTCUTS = {
    SHOW_ABOUT: {mac: 'Alt+Cmd+A', win: 'Alt+Shift+A'},
    SHOW_NOTIFICATION: {mac: 'Alt+Cmd+I', win: 'Alt+Shift+I'},
} as const;
