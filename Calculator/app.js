const input_box=document.querySelector("#inputBox");
const buttons=document.querySelectorAll(".button");

let string="";
Array.from(buttons).forEach((button)=>{
  button.addEventListener("click",(e)=>{
       if(e.target.innerHTML=="="){
            string=eval(string);
            input_box.value=string;
       }
       else if(e.target.innerHTML=="AC")
       {
           string="";
           input_box.value="0";
       }
       else if(e.target.innerHTML=="DEL")
       {
           string=string.substring(0,string.length-1);
           input_box.value=string;
       }
       else{
        string=string+e.target.innerHTML;
        input_box.value=string;
       }
       console.log(e.target.innerHTML);
  })
})