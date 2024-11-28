const dateFields: Array<keyof Intl.DateTimeFormatOptions> = ['hour', 'minute', 'second'];
const {format} = new Intl.DateTimeFormat('ru', Object.fromEntries(dateFields.map(f => [f, 'numeric'])));

export const formatDate = format;

export const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function *progress({start = 0, end = 10000, step = 1000} = {}) {
    while (start < end) {
        start += step;
        yield start / end > 1.0 ? 1.0 : start / end;
        await sleep(step);
    }
}
