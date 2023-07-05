let typed = new Typed('#title', {
    strings: ['^500 Jogos desenvolvidos por mim'],
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

