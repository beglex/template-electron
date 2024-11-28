// src/components/__tests__/Header.test.tsx
import {render, screen} from '@testing-library/react';

import {Header} from '@root/components';

describe(`<${Header.name}>`, () => {
    for (const level of [1, 2, 3, 4, 5, 6] as const) {
        it(`Renders an <h${level}> when level is ${level}`, () => {
            render(<Header level={level}>Heading {level}</Header>);

            const heading = screen.getByRole('heading', {level});

            expect(heading).toHaveTextContent(`Heading ${level}`);
        });
    }
});
