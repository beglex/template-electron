import './OutputContainer.css';

import {useEffect, useReducer} from 'react';

import {Paragraph} from '@root/components';
import {SHORTCUTS} from '@root/constants';
import {reducer} from '@root/reducers';
import {formatDate} from '@root/utils';

export const OutputContainer = () => {
    const [results, dispatch] = useReducer(reducer, [
        {ts: Date.now(), label: `Press ${SHORTCUTS.SHOW_ABOUT[window.outside?.platform]} to show about`},
        {ts: Date.now(), label: `Press ${SHORTCUTS.SHOW_NOTIFICATION[window.outside?.platform]} to show notification`},
    ]);

    useEffect(() => {
        window.outside?.engines?.forEach(({name, version}) =>
            dispatch({type: 'changed', data: {ts: Date.now(), label: `${name}: ${version}`}}));
    }, []);

    useEffect(() => {
        window.api?.ping()
            .then(result => dispatch(
                {type: 'changed', data: {ts: Date.now(), label: `IPC Response: ${result}`, isImportant: true}}));
    }, []);

    useEffect(() => {
        window.api?.onOpenNotification(() =>
            new window.Notification('Template Notification', {body: 'Click to log.'})
                .onclick = () => dispatch({type: 'changed', data: {ts: Date.now(), label: 'Notification clicked!'}}));
    }, []);

    return (
        <>
            {results.map(({ts: timestamp, label, isImportant}) => (
                <Paragraph
                    key={label}
                    label={`[${formatDate(timestamp)}] ${label}`}
                    style={isImportant ? 'success' : 'classic'}
                />
            ))}
        </>
    );
};
