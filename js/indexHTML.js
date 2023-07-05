
let typed = new Typed('#title', {
    strings: ['^500 Bem vindo ao meu portifólio'],
    typeSpeed: 50,
});

let visitorname = document.querySelector('#name');
let visitorConfirm = document.querySelector('#visitorConfirm');

visitorConfirm.addEventListener("click", () => {
    sessionStorage.setItem("nome", visitorname.value);
    sessionStorage.setItem("lastLetter", visitorname.value.slice(-1));
    
    let getLastLetter = sessionStorage.getItem("lastLetter");
     if(getLastLetter == 'a' || getLastLetter == 'y' ){
        sessionStorage.setItem('gender','F');
    }else{
        sessionStorage.setItem('gender','M');
    }


    let size = sessionStorage.getItem('nome').length
    console.log(size)
    if (size < 3) {
        alert('Digite seu nome ou apelido !')
    } else {
        setTimeout(() => {
            window.location.href = "Pages/mainPage/mainPage.html"
        }, 1000)
    }

})




