let menu=document.getElementById('menu');
menu.addEventListener('click',displaymenu);
let menuitems=document.getElementById('menuitems');
menuitems.style.maxHeight="0px";
function displaymenu(){
    if(menuitems.style.maxHeight=="0px"){
        menuitems.style.maxHeight="200px";
    }
    else{
        menuitems.style.maxHeight="0px";
    }
}


// for product imgs replacement of images

// let productimg=document.getElementById('product-img');

// let smallimgs=document.getElementById('small-img');
// smallimgs.addEventListener('click',(e)=>{
//     e.preventDefault();
//     productimg.src=smallimgs[0].src;
// })

let productimg=document.getElementById('product-img');
let smallimg=document.getElementsByClassName('small-img');

smallimg[0].onclick=function(){
    productimg.src=smallimg[0].src;
}
smallimg[1].onclick=function(){
    productimg.src=smallimg[1].src;
}
smallimg[2].onclick=function(){
    productimg.src=smallimg[2].src;
}
smallimg[3].onclick=function(){
    productimg.src=smallimg[3].src;
}

// let regform=document.getElementById('regform');
// let loginform=document.getElementById('loginform');
// let indicator=document.getElementById('indicator');


// function register(){
//     regform.style.transform='translateX(0px)';
//     loginform.style.transform='translateX(0px)';
// }

// function login(){
//     regform.style.transform='translateX(300px)';
//     loginform.style.transform='translateX(300px)';
// }