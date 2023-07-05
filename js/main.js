let projects = document.querySelector(".projects");
let content = document.querySelector(".content");
let header = document.querySelector("header");
let htmlGender = document.querySelector("#gender");
let getUserGender = sessionStorage.getItem('gender')
let openCloseProjects = 0;

if(getUserGender == 'M'){
  htmlGender.innerHTML='o';
}else{
  htmlGender.innerHTML='a';
}


projects.addEventListener('click', () => {
  if(openCloseProjects == 0){
    content.style.display = 'block';
    openCloseProjects++;
  }else if(openCloseProjects ==1){
    content.style.display = 'none';
    openCloseProjects--;
  }
})



setInterval(() => {
  $("#visitorName").text(sessionStorage.getItem('nome'))
  if (sessionStorage.getItem('nome') == null) {
    $("#visitorName").text('visitante')
  }
}, 100);



$("#bars").on({
  click: () => {
    document.querySelector('header').style.display = 'block'

  }
})
$("#close").on({
  click: () => {
    document.querySelector('header').style.display = 'none'
  }
})

