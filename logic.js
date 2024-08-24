function openManu(){
   let open_manu = document.getElementById("submanu");
   
   if(open_manu.className=='hidden'){
       open_manu.classList.remove("hidden");
       open_manu.classList.add("block");
   }
   else{
    open_manu.classList.remove("block");
    open_manu.classList.add("hidden");
   }
}