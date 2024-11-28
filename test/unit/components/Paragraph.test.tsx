// src/components/__tests__/Paragraph.test.tsx
import {render, screen} from '@testing-library/react';

import {Paragraph} from '@root/components';

describe(`<${Paragraph.name} />`, () => {
    it('Renders label text correctly', () => {
        render(<Paragraph label="This is a paragraph" />);

        const paragraph = screen.getByText('This is a paragraph');

        expect(paragraph).toBeInTheDocument();
    });

    it('Applies the "classic" style by default', () => {
        render(<Paragraph label="Classic style paragraph" />);

        const paragraph = screen.getByText('Classic style paragraph');

        expect(paragraph).toHaveClass('paragraph classic');
    });

    it('Applies the "warning" style', () => {
        render(<Paragraph label="Warning style paragraph" style="warning" />);

        const paragraph = screen.getByText('Warning style paragraph');

        expect(paragraph).toHaveClass('paragraph warning');
    });

    it('Applies the "success" style', () => {
        render(<Paragraph label="Success style paragraph" style="success" />);

        const paragraph = screen.getByText('Success style paragraph');

        expect(paragraph).toHaveClass('paragraph success');
    });
});
