// Use this array for solution
let array = [3, 5, -7, 7, 5, -9, -4]

let arr = [];

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    let varmi = false
    for (let j = i + 1; j < array.length; j++) {
        const element2 = array[j];
        if (element == element2) {
            varmi = true
            break
        }

    } if (varmi === false) {
        arr.push(array[i])
    }
} console.log(arr.length); 
