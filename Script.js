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

function validtion(){
    // Name Validtion
    var f=document.getElementById("fname").value;
    var reg= /^[A-Za-z ]+$/;
    if(f.trim()==""){
        document.getElementById("error").innerHTML="Please Insert A Name";
    }
    else if(!reg.test(f)){
        document.getElementById("error").innerHTML="Please Enter Valid Name";
    }
    else {
        document.getElementById("error").innerHTML="";
    }
}


// function submitmsg(){
//     alert('Thank You For Submitting Your Responce');
// }
