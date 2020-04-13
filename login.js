const callTheButton = document.querySelector('#pressThis');
const theFinalTryId = document.querySelector('#weId');
const theFinalTryPw = document.querySelector('#wePw');

(theFinalTryId,theFinalTryPw).addEventListener("keydown",function(){
        callTheButton.style.backgroundColor="blue";
    })

    
// theFinalTryId.addEventListener("keydown", function(){
//     let Id = document.querySelector('#weId').value;
//     let Pw = document.querySelector('#wePw').value;
//     if(Id.length>=1 && Pw.length>=1) {
//         callTheButton.addEventListener("change",function(){
//             callTheButton.style.backgroundColor="blue";
//         })
//     }
// })
// if(theFinalTryId.length>=1 && theFinalTryPw.length>=1){
//     callTheButton.addEventListener("keydown", function() {
//         callTheButton.style.backgroundColor="blue";
//     })
// }

// theFinalTryId.addEventListener("keydown",function(){
//     theFinalTryPw.addEventListener("keydown", function(){
//         callTheButton.style.backgroundColor="blue";
//     })
// })

