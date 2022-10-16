const btn = document.querySelector('.btn')

btn.addEventListener('click', calc)

function calc() {
    n1 = Number(in1.value)
    n2 = Number(in2.value)

    if (act.value == '+') {
        res = n1 + n2
    }
    if (act.value == '-') {
        res = n1 - n2
    }
    if (act.value == '*') {
        res = n1 * n2
    }
    if (act.value == '/') {
        res = n1 / n2
    }

    result.innerHTML = res
}
