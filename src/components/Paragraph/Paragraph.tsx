import './Paragraph.css';

interface Props {
    label: string;
    style?: 'classic' | 'warning' | 'success';
}

export const Paragraph = ({label, style = 'classic'}: Props) => (
    <p className={`paragraph ${style}`}>{label}</p>
);
