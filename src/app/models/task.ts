export class Task {
    id: string;
    title: string;
    description: string;
    done: boolean;
    checked: boolean;

    constructor (values: Object = {}) {
        Object.assign(this, values);
    }
};
