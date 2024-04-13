export const useCounter = (value: number) => {
    return { increase: value + 1, decrease: value - 1 };
};
