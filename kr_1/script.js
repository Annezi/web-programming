document.getElementById("firstForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Предотвращает отправку формы

    let inputName = document.getElementById("name").value;
    let inputEmail = document.getElementById("email").value;
    let inputAge = document.getElementById("age").value;
    window.location.href = "#name= " + encodeURIComponent(inputName) + "#email= " + encodeURIComponent(inputEmail) + "#age= " + encodeURIComponent(inputAge);
});

document.getElementById("secondForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Предотвращает отправку формы

    let inputOffer = document.getElementById("offer").value;
    let inputIngridients = document.getElementById("ingridients").value;
    let inputSteps = document.getElementById("steps").value;
    window.location.href = "#offer= " + encodeURIComponent(inputOffer) + "#ingridients= " + encodeURIComponent(inputIngridients) + "#steps= " + encodeURIComponent(inputSteps);
});