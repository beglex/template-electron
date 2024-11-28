import {render, screen, waitFor} from '@testing-library/react';

import {OutputContainer} from '@root/containers';

globalThis.window = Object.create(window);

window.outside = {
    engines: [
        {name: 'Electron', version: process.versions.electron},
        {name: 'Node.js', version: process.versions.node},
        {name: 'Chrome', version: process.versions.chrome},
        {name: 'V8', version: process.versions.v8},
    ],
    platform: process.platform === 'darwin' ? 'mac' : 'win',
};

window.api = {
    exit: jest.fn(),
    onOpenNotification: jest.fn(),
    ping: jest.fn().mockResolvedValue('pong'),
};

globalThis.Notification = jest.fn() as any;

describe(`<${OutputContainer.name}>`, () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('Renders initial messages correctly', () => {
        render(<OutputContainer />);

        expect(screen.getByText(/to show about$/)).toBeInTheDocument();
        expect(screen.getByText(/to show notification$/)).toBeInTheDocument();
    });

    it('Displays engine information when engines are available', async () => {
        render(<OutputContainer />);

        await waitFor(() => {
            for (const engine of window.outside.engines) {
                expect(screen.getByText(new RegExp(`${engine.name}`))).toBeInTheDocument();
            }
        });
    });

    it('Displays IPC response message after ping resolves', async () => {
        render(<OutputContainer />);

        await waitFor(() => {
            expect(screen.getByText(/IPC Response: pong/)).toBeInTheDocument();
        });
    });
});
