var x = window.matchMedia("(max-width: 500px)")
var y = window.matchMedia("(min-width: 0px)")

let slideIndex = 0;


function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slide1");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3500); // Change image every 2 seconds
}

function Open(){

    if(x.matches &&  y.matches)
    {
   
      document.getElementById("cutmenu").style.display="none";
      document.getElementById("cutmenu3").style.display="none";
      document.getElementById("cut1").style.display="block";
    
      document.getElementById("main1").style.display="none";  
      document.getElementById("bodyi").style.backgroundColor="rgb(71, 216, 241)";
    // document.getElementById("main1").style.position="fixed"; 
    // document.getElementById("main1").style.overflow="hidden";
    // document.getElementById("main1").style.paddingTop="0%";   
      document.getElementById("bt").style.padding="100px 34px 0px 540px";    
      document.getElementById("cut").style.width="0px";  
      document.getElementById("cut").style.fontSize=0; 
      document.getElementById("Sidebar").style.transion="0.4s"; 
      document.getElementById("Sidebar").style.width="300px";
    
      document.getElementById("pr1").style.width="0px";
      document.getElementById("pr1").style.height="0px";
      document.getElementById("name1").style.padding="5% 10px 10% 20% ";
    }
    else{
    
    document.getElementById("cutmenu").style.display="none";
    document.getElementById("cutmenu3").style.display="none";
    document.getElementById("cut1").style.display="block";
    
    document.getElementById("main1").style.float="right";  
    document.getElementById("main1").style.position="fixed"; 
    document.getElementById("main1").style.overflow="hidden";
    document.getElementById("main1").style.paddingTop="0%";   
    document.getElementById("bt").style.padding="100px 34px 0px 540px";    
    document.getElementById("cut").style.width="0px";  
    document.getElementById("cut").style.fontSize=0; 
    document.getElementById("Sidebar").style.transion="0.4s"; 
    document.getElementById("Sidebar").style.width="300px";
    
    document.getElementById("pr1").style.width="0px";
    document.getElementById("pr1").style.height="0px";
    document.getElementById("name1").style.padding="5% 10px 10% 20% ";
    }
    
    
    

}


function Close(){
    if(x.matches &&  y.matches)
    {
        document.getElementById("Sidebar").style.width="0px";
       
        document.getElementById("pr1").style.width="32%";
        document.getElementById("pr1").style.height="32%";
        document.getElementById("pr1").style.margin="32% 36% 0% 30%";
        document.getElementById("pr1").style.padding="9px 9px 9px 9px";
        document.getElementById("bt").style.padding="0px 0px 0px 40%"; 
        document.getElementById("name1").style.padding="2.3% 0px 0px 3px ";
        document.getElementById("cut").style.fontSize="24px";
        document.getElementById("Menuresume").style.display="none";
        document.getElementById("main1").style.display="block";
        document.getElementById("cut").style.display="block";
        document.getElementById("name1").style.padding="2.3% 0px 0px 3px ";
        document.getElementById("cut").style.fontSize="24px";
        document.getElementById("R1").style.opacity="1";
    }
    else{
    document.getElementById("Sidebar").style.width="0px";
    document.getElementById("main1").style.overflow="visible";
  
  
    document.getElementById("pr1").style.width="10%";
    document.getElementById("pr1").style.height="10%";
    document.getElementById("pr1").style.margin="2px 0px 0px 40px";
    document.getElementById("bt").style.padding="0px 0px 0px 48%"; 
    document.getElementById("name1").style.padding="2.3% 0px 0px 3px ";
    document.getElementById("main1").style.overflow="scroll";
    document.getElementById("main1").style.overflowX="hidden";
    document.getElementById("cut").style.fontSize="24px";
    }
    

}
function home(){

    if(x.matches &&  y.matches)
    {
    document.getElementById("Sidebar").style.width="0px";
  
    document.getElementById("pr1").style.width="32%";
    document.getElementById("pr1").style.height="32%";
    document.getElementById("pr1").style.margin="32% 36% 0% 30%";
    document.getElementById("pr1").style.padding="9px 9px 9px 9px";
    document.getElementById("bt").style.padding="0px 0px 0px 40%"; 
    document.getElementById("name1").style.padding="2.3% 0px 0px 3px ";
    document.getElementById("cut").style.fontSize="24px";
    document.getElementById("Menuresume").style.display="none";
    document.getElementById("main1").style.display="block";
    document.getElementById("cut").style.display="block";
    document.getElementById("name1").style.padding="2.3% 0px 0px 3px ";
    document.getElementById("cut").style.fontSize="24px";
    document.getElementById("R1").style.opacity="1";
    document.getElementById("bodyi").style.position="fixed";
    
    }
    else{

    document.getElementById("Sidebar").style.width="0px";
    document.getElementById("Menuresume").style.display="none";
    document.getElementById("main1").style.display="block";
    document.getElementById("cut").style.display="block";
    document.getElementById("pr1").style.width="10%";
    document.getElementById("pr1").style.height="10%";
    document.getElementById("pr1").style.margin="2px 0px 0px 40px";
    document.getElementById("bt").style.padding="0px 0px 0px 48%"; 
    document.getElementById("name1").style.padding="2.3% 0px 0px 3px ";
    document.getElementById("cut").style.fontSize="24px";
    document.getElementById("R1").style.opacity="1";
    document.getElementById("main1").style.overflow="scroll";
    document.getElementById("main1").style.overflowX="hidden";
    // document.getElementById("Sidebar").style.transition="0.4s";
  
    // document.getElementById("main1").style.display="block";
    }
    

}
let p1="Hello There!!!  Thanks for visiting my Profile ,I am a Software Engineer  working in this Industry from 1 year ,I am Passionate about coding and i love learning new technologies  ";

let speed=50;
let i=0;
function writer(){
if(i<p1.length)
{
    document.getElementById("demo").innerHTML += p1.charAt(i);
    document.getElementById("demo1").innerHTML += p1.charAt(i);
    document.getElementById("demo2").innerHTML += p1.charAt(i);
    i++;
 setTimeout(writer,speed);
   
}
}
function Aboutfn(){
    document.getElementById("Sidebar").style.display="none";
    document.getElementById("main1").style.display="none";
    document.getElementById("About1").style.width="1280px";
    document.getElementById("Aboutid").style.backgroundColor="bule";


   
    
}

function  Resumefn(){

    if(x.matches && y.matches){

        
        document.getElementById("Menuresume").style.display="none";
        document.getElementById("R1").style.display="none";
        document.getElementById("main1").style.display="none";
       
        document.getElementById("bodyi").style.position="fixed";
        document.getElementById("bodyi").style.overflowX="hidden";
         document.getElementById("bodyi").style.backgroundColor="rgb(137, 201, 201)";
        document.getElementById("cutitr").style.display="block"; 
        // document.getElementById("bodyi").style.overflowX="hidden";
        // document.getElementById("bodyi").style.backgroundColor="green";
        // document.getElementById("bodyi").style.backgroundSize="cover";
        document.getElementById("test").style.display="block";
       document.getElementById("test").style.position="fixed";
        document.getElementById("test").style.overflowX="hidden";
        document.getElementById("test").style.backgroundColor="rgb(137, 201, 201)";
        document.getElementById("Sidebar").style.transition="0.4s";
        document.getElementById("Sidebar").style.width="0px";
      
   
   
    }  
   
    else{
  
    document.getElementById("R1").style.transition="0.4s";
    document.getElementById("R1").style.opacity="1";
    document.getElementById("R1").style.width="100%";
    document.getElementById("R1").style.height="100%";
    document.getElementById("R1").style.display="flex";
    document.getElementById("Sidebar").style.transition="0.4s";
    document.getElementById("Sidebar").style.width="0px";
    document.getElementById("cutr").style.display="block";  
   // document.getElementById("Openmenu").style.display="block";;
    document.getElementById("Menuresume").style.display="none";
    document.getElementById("main1").style.display="none";
    showSlides();

    if(document.getElementById("R1").style.opacity=="1")
    {
        writer();
    }
    document.getElementById("line_2").style.width="2px";
    document.getElementById("line_2").style.height="200px";
    document.getElementById("sk1").style.height="200px";
    document.getElementById("id1").style.width="270px";

    }


}

function Open2(){
    // document.getElementById("cutr").style.width="10px";  
    // document.getElementById("cutr").style.fontSize="22px";  

    // document.getElementById("pr1").style.width="0px";
    // document.getElementById("pr1").style.height="0px";
    
    
    document.getElementById("Sidebar").style.width="22%";  
    document.getElementById("R1").style.display="none";
    document.getElementById("Sidebar").style.transition="0.4s";  
    document.getElementById("cut1").style.display="none"; 
    document.getElementById("cutr").style.display="none";  
    document.getElementById("cutmenu").style.display="block";
    // document.getElementById("name1").style.padding="17% 10px 10% 20% ";
    
    // document.getElementById("Sidebar").style.width="300px";
    document.getElementById("Sidebar").style.position="fixed";
    document.getElementById("Sidebar").style.transition="0.4s";
    
    // document.getElementById("Openmenu").style.display="none";
    document.getElementById("Menuresume").style.display="flex";
    document.getElementById("Menuresume").style.overflowX="hidden";
    document.getElementById("demo").style.paddingBottom="12px";
    document.getElementById("block3").style.display="block";
    document.getElementById("block3").style.padding="6% 0px 0px 0px ";

    //document.getElementById("closer").style.display="block";
    
  





}

function Open3(){
  
    

   document.getElementById("Sidebar").style.width="300px";
   document.getElementById("Sidebar").style.transition="0.4s"; 
   document.getElementById("cutitr").style.display="none"; 
   document.getElementById("test").style.display="none";  
   document.getElementById("cutmenu3").style.display="block";
   document.getElementById("cutr").style.display="none";
   document.getElementById("cut1").style.display="none";
   document.getElementById("Menuresume").style.display="none";
   document.getElementById("R1").style.display="none";
   document.getElementById("main1").style.display="none";
  
   
   
}

function closerm(){
    document.getElementById("Menuresume").style.display="none";
    document.getElementById("cutr").style.display="block";
    document.getElementById("cutmenu").style.display="none"; 
    document.getElementById("cutmenu3").style.display="none"; 
    document.getElementById("R1").style.display="flex";   
    document.getElementById("Sidebar").style.width="0px";
   
    document.getElementById("main1").style.display="none";
    if(document.getElementById("R1").style.display=="flex")
    {
        writer();
    }
    document.getElementById("line_2").style.width="2px";
    document.getElementById("line_2").style.height="200px";
    document.getElementById("sk1").style.width="2px";
    document.getElementById("sk1").style.height="200px";
    document.getElementById("id1").style.width="270px";
   
   




}
