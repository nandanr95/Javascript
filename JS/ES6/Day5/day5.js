//Application of Rest argument and Rest Parameter
//to find the average of the given numbers

function findavg(...n) {
    let sum = n.reduce((acc, v) => {
        return acc + v;
    }, 0);
    return sum / n.length;
}

console.log(findavg(1, 2, 3, 4));
console.log(findavg(11, 21, 31, 41, 51, 61));

//if a function accepts the rest operator as parameter, then it's called rest operator

//Spread Operator

let studentDetails1 = {
    sName: 'Prashant',
    dob: '5/08/2000',
    address: 'Bengaluru'
};
let marks = {
    physics: 92,
    Mathematics: 89,
    Chemistry: 94
};

let overallDetails = {
    sId: '4NI45',
    ...studentDetails1,
    state: 'Karnataka',
    ...marks
}

console.log(overallDetails);
