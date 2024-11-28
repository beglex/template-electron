import {fireEvent, render, screen, waitFor} from '@testing-library/react';

import {ControlContainer} from '@root/containers';

globalThis.window = Object.create(window);

window.theme = {
    toggle: jest.fn(),
};

window.api = {
    exit: jest.fn(),
    onOpenNotification: jest.fn(),
    ping: jest.fn().mockResolvedValue('pong'),
};

describe(`<${ControlContainer.name}>`, () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('Renders the Header and buttons correctly', () => {
        render(<ControlContainer />);

        expect(screen.getByText('Electron Template 💖')).toBeInTheDocument();
        expect(screen.getByText('☼')).toBeInTheDocument();
        expect(screen.getByText('✖')).toBeInTheDocument();
    });

    it('Toggles the theme when the theme button is clicked', async () => {
        jest.spyOn(window.theme, 'toggle').mockResolvedValue(false);

        render(<ControlContainer />);

        const button = await screen.findByText('☼');

        expect(window.theme.toggle).toHaveBeenCalledTimes(0);
        expect(button).toBeInTheDocument();
        fireEvent.click(button);

        await waitFor(async () => {
            expect(window.theme.toggle).toHaveBeenCalledTimes(1);
            const button = await screen.findByText('☽', {}, {timeout: 5000});

            expect(button).toBeInTheDocument();
        });
    });

    it('Closes the app when the exit button is clicked', () => {
        render(<ControlContainer />);

        fireEvent.click(screen.getByText('✖'));

        expect(window.api.exit).toHaveBeenCalledTimes(1);
    });
});
