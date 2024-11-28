/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly NODE_ENV?: 'development' | 'production';

    readonly VITE_REACT_STRICT_MODE?: 'true' | 'false';
}

interface ImportMeta {
    readonly dirname: string;
    readonly env: ImportMetaEnv;
    readonly filename: string;
}
