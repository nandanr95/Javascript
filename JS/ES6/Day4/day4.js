// Application of reduce() method

// Remove duplicates in the array

const a = [10, 20, 40, 20, 30, 40, 50, 20, 60, 20];

const unique_array = a.reduce((acc, v) => {
    if (acc.indexOf(v) == -1) {
        acc.push(v);
    }
    return acc;
}, []);

console.log(unique_array);

//shopping cart

const cart = [
    { pname: 'shoes', pqty: 1, pprice: 4500 },
    { pname: 'Tshirt', pqty: 4, pprice: 800 },
    { pname: 'trousers', pqty: 2, pprice: 1600 },
    { pname: 'casuals', pqty: 3, pprice: 1000 },

];

let total = cart.reduce((acc, v) => {
    return acc + v.pqty * v.pprice;
}, 0);

console.log(`Your cart price is ${total}`);