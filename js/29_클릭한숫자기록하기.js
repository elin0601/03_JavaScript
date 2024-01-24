const resetBtn = document.querySelector("#resetBtn");
const numbers = document.querySelectorAll(".number");
const clickNumber = document.querySelector("#clickNumber");

/* function click(number) {
    const curr = number.textContent;

    
    if (clickNumber.textConten.length >= 10) return;
    clickNumber.textContent += curr;
    

}



numbers.forEach((number) => {
    number.addEventListener("click", e => {
        click(e.target);
    });
});


resetBtn.addEventListener("click", () => {
    clickNumber.textContent = "";
    const clickNumber = clickNumber.querySelector(".number");
    
});
 */

for(let item of numbers){
    item.addEventListener("click", e => {
  
      if(clickNumber.textContent.length == 10){
        alert("10글자 까지만 입력 가능")
        return;
      } 

      clickNumber.textContent += e.target.textContent;
  
    }); 
  }
  

  resetBtn.addEventListener("click", ()=>{
    clickNumber.textContent="";
  });