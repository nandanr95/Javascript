//Use of Map and Filter Methods

//Converting CGPA into Percentage

const student = [
    { sname: 'Suresh', gpaOrPerc: 9.25 },
    { sname: 'Mahesh', gpaOrPerc: 9.61 },
    { sname: 'Sushma', gpaOrPerc: 8.75 },
    { sname: 'Prakash', gpaOrPerc: 9.12 }
];

const percent = student.map(v => (v.gpaOrPerc - 0.75) * 10);

console.log(percent);


//filtering out distinction candidates - students with gpa 9 and above

const dist = student.filter(v => v.gpaOrPerc >= 9);
console.log(dist);