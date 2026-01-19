let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');
let backButton = document.getElementById('back');
let seeMoreButton = document.querySelectorAll('.btn');
let slider = document.querySelector(".slider");
let list = document.querySelector(".slider .list");

nextButton.onclick = function(){
    showSlider('next');
}
prevButton.onclick = function(){
    showSlider('prev');
}
const showSlider= (type) =>{
    slider.classList.remove('prev','next');
  let items = document.querySelectorAll(".slider .list .item");
  if(type == 'next'){
    list.appendChild(items[0]);
    slider.classList.add('next');
  }
  else{
    let PostionLast = items.length - 1;
    list.prepend(items[PostionLast]);
    slider.classList.add('prev');
  }
}

seeMoreButton.forEach(btn =>{
  btn.onclick = function(){
    slider.classList.add('detail');
  }
});
backButton.onclick=function(){
  slider.classList.remove('detail');
}
