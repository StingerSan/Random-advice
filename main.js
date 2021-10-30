const table = ["Walcz", "Przemyśl to jeszcze raz"];

const btnAdd = document.querySelector('.add');
const input = document.querySelector('input');
const btnReset = document.querySelector('.clean');
const btnAdvice = document.querySelector('.showAdvice');
const adviceText = document.querySelector('h1');
const btnOptions = document.querySelector('.showOptions');


const addToTable = (e) => {
    e.preventDefault();
    const name = input.value;
    if (input.value !== 0) {
        table.push(name);
        alert(`Właśnie dodałeś, ${name}`);
        input.value = "";
    }
}

btnAdd.addEventListener("click", addToTable);

btnReset.addEventListener("click", (e) => {
    e.preventDefault();
    table.splice(2, table.length);
})

const showAdvice = () => {
    const index = Math.floor(Math.random() * table.length);
    adviceText.textContent = table[index];

}

btnAdvice.addEventListener("click", showAdvice);

btnOptions.addEventListener("click", () => {
    alert(table)

})