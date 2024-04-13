import { create } from 'zustand';

interface ExampleModel {
    data: number;
    getData: () => number;
    setData: (value: number) => void;
}

export const exampleModel = create<ExampleModel>((set, get) => ({
    data: 0,
    getData() {
        return get().data;
    },
    setData(value) {
        set({
            data: value,
        });
    },
}));
