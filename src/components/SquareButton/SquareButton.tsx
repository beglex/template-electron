import type {PropsWithChildren} from 'react';

import './SquareButton.css';

interface Props extends PropsWithChildren {
    style?: 'classic' | 'warning' | 'success';
    onClick: () => void;
}

export const SquareButton = ({children, onClick, style}: Props) => (
    <button className={`square-button ${style}`} type="button" onClick={onClick}>{children}</button>
);
