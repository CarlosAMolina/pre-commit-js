function sum_1(number) {
    return number + 1
}

export function sum_2(number) {
    return number + 2
}

function sum_numbers(number1, number2) {
    return number1 + number2
}

export const exportedForTesting = {
    sum_1,
    sum_numbers
}
