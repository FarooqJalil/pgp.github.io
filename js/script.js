
/*  TOGGLE FUNCTION FOR MENU START*/
function toggle(){

    let x=document.getElementById('lower');
   
    if(x.style.height=='1px'){
     document.getElementById('lower').style.height = '300px';
    }
     
   else {
     document.getElementById('lower').style.height = '1px';
   }
   
   }
   /*  TOGGLE FUNCTION FOR MENU END */


   /*  SLIDESHOW START*/
var slideindex,slides,dots,captiontext;
function initgallary(){
slideindex=0;
slides=document.getElementsByClassName("image-holder");
slides[slideindex].style.opacity=1;

captiontext=document.querySelector(".caption-holder .caption-text");
captiontext.innerText=slides[slideindex].querySelector(".imagecaption").innerText;

dots=[];
var dotscontainer=document.getElementById("dotscontainer");
for(var i = 0;i<slides.length;i++){
    var dot=document.createElement("span");
    dot.classList.add("dots");
    dot.setAttribute("onclick","moveslide("+i+")");
    dotscontainer.append(dot);
    dots.push(dot);  
}
dots[slideindex] .classList.add("active");

}


function moveslide(n){ 
    var i, current,next;
    var moveslideanimclass={
        forcurrent:"",
        fornext:"",
    }
    if(n>slideindex){
        if(n>=slides.length){n=0;}

        moveslideanimclass.forcurrent="moveleftcurrentslide";
        moveslideanimclass.fornext="moveleftnextslide";
    }
    else if(n<slideindex){
        if(n<0){n=(slides.length)-1;}
        moveslideanimclass.forcurrent="moverightcurrentslide";
        moveslideanimclass.fornext="moverightprevslide";
    }
    if(n!=slideindex){
        next=slides[n];
        current=slides[slideindex];
        for(i=0;i<slides.length;i++){
            slides[i].className="image-holder";
            slides[i].style.opacity=0;
            dots[i].classList.remove("active");
        }
        current.classList.add(moveslideanimclass.forcurrent);
        next.classList.add(moveslideanimclass.fornext);
        dots[n].classList.add("active");
        slideindex=n;
    }

}
var timer=null;
function plusslides(n){
    moveslide(slideindex+n);
}
function settimer(){
    timer=setInterval(function (){plusslides(1);},3000);
}
initgallary();
settimer();
 /*  SLIDESHOW END*/