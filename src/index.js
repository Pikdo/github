console.log("Hola mundo");

(()=>{
    fetch("comandos.txt")
    .then(response => response.text())
    .then(data => {
        let main = document.getElementById('notas');
        main.innerText = data;
    });
})();