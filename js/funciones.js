(()=>{

    fetch("comandos.txt")
    .then(response => response.text())
    .then(data => {
        let main = document.getElementById('main');
        main.innerText = data;
    });
   
    

})();