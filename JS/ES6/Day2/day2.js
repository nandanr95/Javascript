//Function to verify the passing marks
function verify() {

    document.getElementById('cal').style.display = 'none';


    let m1 = Number(document.getElementById('s1').value);
    let m2 = Number(document.getElementById('s2').value);
    let m3 = Number(document.getElementById('s3').value);
    let m4 = Number(document.getElementById('s4').value);
    let m5 = Number(document.getElementById('s5').value);
    let m6 = Number(document.getElementById('s6').value);

    //Adding the marks to an array
    const marks = new Array(m1, m2, m3, m4, m5, m6);

    //some method to check if any one of the marks is below 35
    if (marks.some(v => v < 35)) {
        document.getElementById('spancal').style.display = 'none';
        document.getElementById("spanver").innerHTML =
            "Sorry you're failed in the exam.";
        document.getElementById('cal').style.display = 'none';

    }

    else {
        document.getElementById("spanver").innerHTML =
            "Congrats you've passed the exam. Please click on 'View Percentage' to see your percentage";
        document.getElementById('cal').style.display = 'block';
        //View Percentage button will only be available only if none of the marks is within 35
    }

}

//Function to calculate the percentage only if all subject marks are above 35
function cal() {
    let m1 = Number(document.getElementById('s1').value);
    let m2 = Number(document.getElementById('s2').value);
    let m3 = Number(document.getElementById('s3').value);
    let m4 = Number(document.getElementById('s4').value);
    let m5 = Number(document.getElementById('s5').value);
    let m6 = Number(document.getElementById('s6').value);

    const marks = new Array(m1, m2, m3, m4, m5, m6);
    document.getElementById('spancal').style.display = 'block';

    document.getElementById('spancal').innerHTML = `Your percentage is ${(m1 + m2 + m3 + m4 + m5 + m6) * 100 / 600}.`;

}




