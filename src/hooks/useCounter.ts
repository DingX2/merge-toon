/**
 * 숫자를 계산해주는 훅
 * @param {number} value
 * @returns {number} 계산된 값
 * @example
 * const { increase, decrease } = useCounter(10);
 */
export const useCounter = (value: number) => {
    return { increase: value + 1, decrease: value - 1 };
};
