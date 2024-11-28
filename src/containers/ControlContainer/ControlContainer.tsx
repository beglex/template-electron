import type {NativeTheme} from 'electron';

import {useState} from 'react';

import {Header, SquareButton} from '@root/components';

import './ControlContainer.css';

export const ControlContainer = () => {
    const [theme, setTheme] = useState<NativeTheme['themeSource']>('system');

    const handleToggleTheme = async () => {
        const isDarkMode = await window.theme.toggle();
        setTheme(isDarkMode ? 'dark' : 'light');
    };

    return (
        <div className="control">
            <Header level={1}>Electron Template 💖</Header>
            <div>
                <SquareButton onClick={handleToggleTheme}>{theme === 'light' ? '☽' : '☼'}</SquareButton>
                <SquareButton style="warning" onClick={() => window.api.exit()}>✖</SquareButton>
            </div>
        </div>
    );
};
