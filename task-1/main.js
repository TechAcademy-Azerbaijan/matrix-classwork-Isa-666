// Use this arrays for solution
let array_1 = [3, 1, 3, 4, 2, 4, 12]
let array_2 = [4, 15, 43, 1, 15, 1]
let array_3 = [];
for (let i = 0; i < array_1.length; i++) {
    const element1 = array_1[i];
    let exist = false;

    for (let j = 0; j < array_2.length; j++) {
        const element2 = array_2[j];

        if (element1 == element2) {
            exist = true
            break;
        }
 
        }
        if (exist === false) {
            array_3.push(element1)


    }



}
console.log(array_3.join(' '));
