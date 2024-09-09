//-------------------- SEARCH BUTTON START --------------------
let searchBtn = document.querySelector(".search_btn");
let searchInput = document.querySelector(".serach_input");
let closeIcon = document.querySelector(".close_icon");

searchBtn.addEventListener('click',function(){
    searchInput.classList.add('show');
    searchBtn.classList.add('hide')
})
closeIcon.addEventListener('click',function(){
    searchInput.classList.remove('show');
    searchBtn.classList.remove('hide')
})
//-------------------- SEARCH BUTTON END --------------------
