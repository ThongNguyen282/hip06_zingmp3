export const getArrSlider = (start, end, number) => {
    const limit = start > end ? number : end;
    let output = [];
    for (let i = start; i <= limit; i++) {
        output.push(i);
    }
    if (start > end) {
        for (let i = 0; i <= end; i++) {
            output.push(i);
        }
    }

    return output;
}

// 012
// 123
// 230
// 301
// 012

// console.log(getArrSlider(1, 3, 4))