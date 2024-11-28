import type {PropsWithChildren} from 'react';

import './Header.css';

interface Props extends PropsWithChildren {
    level?: 1 | 2 | 3 | 4 | 5 | 6;
}

export const Header = ({level = 6, children}: Props) => {
    switch (level) {
        case 1:
            return <h1 className="header">{children}</h1>;
        case 2:
            return <h2 className="header">{children}</h2>;
        case 3:
            return <h3 className="header">{children}</h3>;
        case 4:
            return <h4 className="header">{children}</h4>;
        case 5:
            return <h5 className="header">{children}</h5>;
        case 6:
            return <h6 className="header">{children}</h6>;
    }
};
