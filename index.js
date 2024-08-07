let value = 0

const Value = document.getElementById('val');
const firstBtn = document.getElementById('minus');
const secondBtn = document.getElementById('reset');
const thirdBtn = document.getElementById('plus');

function Minusvalue() {
    value--
    Value.innerHTML = value
    if (value>0) {
        Value.style.color = "green"
    }
    else if (value< 0) {
        Value.style.color = "red"
    }
    else {
        Value.style.color = "Black"
    }
}

function Resetvalue() {
    value = 0
    Value.innerHTML = value
    Value.style.color = "Black"
}

function Plusvalue() {
    value++
    Value.innerHTML = value
    if (value>0) {
        Value.style.color = "green"
    }
    else if (value< 0) {
        Value.style.color = "red"
    }
    else {
        Value.style.color = "Black"
    }
}
