let typed = new Typed('#title', {
    strings: ['^500 Tudo sobre quem é Gabriel Aroucas'],
    typeSpeed: 50,
});


let openCloseProjects = 0;
let content = document.querySelector(".content");
const projects = document.querySelector(".projects");


projects.addEventListener('click', () => {
    if(openCloseProjects == 0){
      content.style.display = 'block';
      openCloseProjects++;
    }else if(openCloseProjects == 1){
      content.style.display = 'none';
      openCloseProjects--;
    }
  })


  const data = new Date();
  const atualYear = data.getFullYear()
  const year = 1996;
  const yearStartedTheStudy = 2021;
  const calcAtualYear = atualYear - year
  const calcYearOfStudy = atualYear - yearStartedTheStudy

  let yearOld = document.querySelector("#yearOld");
  let yearOld2 = document.querySelector("#yearOld2");
  let yearOfStudy = document.querySelector("#yearOfStudy");

  yearOfStudy.innerHTML = calcYearOfStudy
  yearOld.innerHTML=calcAtualYear

