interface Data {
    label: string;
    ts: number;
    isImportant?: boolean;
}

interface Action {
    type: 'changed';
    data: Data;
};

export function reducer(state: Data[], action: Action) {
    switch (action.type) {
        case 'changed':
            return [...state.filter(v => !v.label.includes(action.data.label.slice(0, 5))), action.data];
        default:
            throw new Error('Unknown action');
    }
}
