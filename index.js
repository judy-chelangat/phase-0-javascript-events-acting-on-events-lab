// Your code here
// function  moveDodgerLeft()
// {
//     const dodger =document.getElementById("dodger")
//     dodger.style.backgroundColor = "#FF69B4";
//     dodger.style.bottom="0px"
//     dodger.style.left = "0px";
// }
// moveDodgerLeft()
// function  moveDodgerRight()
// {
//     const dodger2 =document.getElementById("dodger")
//     dodger2.style.backgroundColor = "#FF69B4";
//     dodger2.style.bottom="0px"
//     dodger2.style.right = "0px";
// }
// moveDodgerRight()
// document.addEventListener("keydown", function (event) {
//     console.log(event);
//   });

const dodger=document.getElementById("dodger");

function moveDodgerLeft(){
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
      }
    } 

    document.addEventListener("keydown", function(e) {
        if (e.key === "ArrowLeft") {
          moveDodgerLeft();
        }
      }); 

      
      function moveDodgerRight(){
        const leftNumbers = dodger.style.left.replace("px", "");
        const left = parseInt(leftNumbers, 10);
    
        if (left < 360){
            dodger.style.left = `${left + 1}px`;
    
        }
    
      }
      document.addEventListener("keydown", function(e){

        if (e.key === "ArrowRight"){
            moveDodgerRight();
        }
      });