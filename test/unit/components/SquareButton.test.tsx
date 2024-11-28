// src/components/__tests__/SquareButton.test.tsx
import {fireEvent, render, screen} from '@testing-library/react';

import {SquareButton} from '@root/components';

describe('SquareButton', () => {
    it('Renders button with correct text', () => {
        render(<SquareButton onClick={() => {}}>Click Me</SquareButton>);

        const button = screen.getByRole('button');

        expect(button).toHaveTextContent('Click Me');
    });

    it('Applies the "classic" style by default', () => {
        render(<SquareButton onClick={() => {}}>Classic Button</SquareButton>);

        const button = screen.getByRole('button');

        expect(button).toHaveClass('square-button');
        expect(button).not.toHaveClass('warning');
        expect(button).not.toHaveClass('success');
    });

    it('Applies the "warning" style', () => {
        render(<SquareButton onClick={() => {}} style="warning">Warning Button</SquareButton>);

        const button = screen.getByRole('button');

        expect(button).toHaveClass('square-button warning');
    });

    it('Applies the "success" style', () => {
        render(<SquareButton onClick={() => {}} style="success">Success Button</SquareButton>);

        const button = screen.getByRole('button');

        expect(button).toHaveClass('square-button success');
    });

    it('Calls onClick when clicked', () => {
        const onClickMock = jest.fn();
        render(<SquareButton onClick={onClickMock}>Click Me</SquareButton>);

        const button = screen.getByRole('button');

        fireEvent.click(button);

        expect(onClickMock).toHaveBeenCalledTimes(1);
    });
});
