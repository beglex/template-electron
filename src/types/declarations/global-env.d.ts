import type {outside} from '@root/preload';
import type {api, theme} from '@root/services';

declare global {
    const MAIN_WINDOW_VITE_DEV_SERVER_URL: string | undefined;
    const MAIN_WINDOW_VITE_NAME: string | undefined;

    interface Window {
        api: typeof api;
        outside: typeof outside;
        theme: typeof theme;
    }
}
