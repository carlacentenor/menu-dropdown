var item = document.getElementsByClassName('submenu');

for(i=0;i<item.length;i++){
  item[i].addEventListener('click',showMenu);
}

function showMenu(event){
var listMenu=this.getElementsByClassName('subitem')[0];
if(listMenu.classList.contains("ocult")){
  listMenu.classList.remove("ocult");
  listMenu.classList.add("show");
}
else {
  listMenu.classList.remove("show");
  listMenu.classList.add("ocult");
}
}
