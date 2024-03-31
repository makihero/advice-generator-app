let dice = document.getElementById("dice");
let advice = document.getElementById("advice");
let adviceText = document.getElementById("advice-text");


getAdvice()
dice.addEventListener("click", () => {
    getAdvice()
})

function getAdvice() {
        //generar un numero aleatorio
        let id = Math.floor(Math.random() * 200) + 1;

        //llamar a la api con fetch
        fetch(`	https://api.adviceslip.com/advice/${id}`)
        .then(response => response.json())
        .then(data => {
            const message = data.slip.advice; 
            adviceText.innerHTML = message;
            advice.innerHTML = data.slip.id
        })
}