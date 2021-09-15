let input = document.getElementById('skaicius');

function calculate() {
    document.getElementById('kvadratu').innerHTML = kvadratu(input.value);
    document.getElementById('kubu').innerHTML = kubu(input.value);
}

function kvadratu(skaicius) {
    return skaicius * skaicius;
}

function kubu(skaicius) {
    return skaicius * skaicius * skaicius;
}