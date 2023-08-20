function avg() {

    let f = Number(document.getElementById('f').value);
    let s = Number(document.getElementById('s').value);
    let t = Number(document.getElementById('t').value);

    document.getElementById('avg').innerHTML = (f + s + t) / 3;

}

function sum() {

    let f = Number(document.getElementById('f').value);
    let s = Number(document.getElementById('s').value);
    let t = Number(document.getElementById('t').value);

    document.getElementById('sum').innerHTML = (f + s + t);
}

function max() {

    let f = Number(document.getElementById('f').value);
    let s = Number(document.getElementById('s').value);
    let t = Number(document.getElementById('t').value);

    //Use of Math function
    document.getElementById('max').innerHTML = Math.max(f, s, t);
}