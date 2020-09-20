// const mainBtn = document.getElementsByClassName('btn');
// console.log("mainBtn button po klasie", mainBtn)
// const input = document.getElementsByClassName('margin-bottom');
// console.log("input po klasie", input)
const idBtn = document.getElementById('id-btn');
console.log("button po id", idBtn)



idBtn.addEventListener("click", takeOrder)

function takeOrder() {
    const pomidorowy = document.getElementById('pomidorowy')
    console.log(pomidorowy.checked)
}

// function dodawanie(a, b) {
//     let wynik = a + b
//     console.log(wynik)
// }
// dodawanie(5, 15)
// dodawanie(5, 198)
// dodawanie(5, 88)
// dodawanie(5, 15)