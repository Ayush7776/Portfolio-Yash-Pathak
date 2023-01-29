burger=document.querySelector('.burger');
nclick=document.querySelector('.nclick');
hello=document.querySelector('.hello');
changeio=document.querySelector('.material-symbols-outlined');

burger.addEventListener("click", myFunction);
function myFunction(){
    nclick.classList.toggle('nclick');

    if(changeio.innerHTML !='close'){
        changeio.innerHTML='close';
        hello.style.display='none';
    }
    else{
        changeio.innerHTML='menu';
        hello.style.display='block';
    }
    
};
function submitmsg(){
    alert('Thank You For Submitting Your Responce');
}