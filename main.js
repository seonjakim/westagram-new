const defButton = document.querySelector('#buttonCall');

var seperation = function() {
    let createP = document.createElement("p");
    let actualComment = document.querySelector('#commentJs').value;
    createP.innerHTML = "NowIKnow " + actualComment;
    document.querySelector('.generatedComment').appendChild(createP); 
    document.querySelector('#commentJs').value = '';
}

defButton.addEventListener('click', seperation, false);
document.querySelector('#commentJs').addEventListener('keydown', function(e){
    if(e.keyCode===13){
        seperation()
    }
})


// defButton.addEventListener("click", function() {
//     let createP = document.createElement("p");
//     let actualComment = document.querySelector('#commentJs').value;
//     createP.innerHTML = "NowIKnow " + actualComment;
//     document.querySelector('.generatedComment').appendChild(createP);
// })
// const theTextArea = document.querySelector('#commentJs');
// theTextArea.addEventListener('keydown', function(){
//     if(KeyboardEvent.keyCode===13){
//         seperation();
//         return false;
//     }
// })



//document.body.onload = addElement;

// const thisIsButton = document.getElementsByClassName('inputText');

// thisIsButton.addEventListener('click', addElement());

// function addElement () {
//     var textArea = document.getElementsByClassName('goForItJS').value;
//     var newDiv = document.createElement("div");
//     var newContent = document.createTextNode(textArea);
//     console.log($(textArea));
//     newDiv.appendChild(newContent);

//     var currentDiv = document.getElementById("div1");
//     document.body.insertBefore(newDiv, currentDiv);
// }



// function getwords() {
//     let text = document.getElementsByClassName("commentJS").value;
//     document.getElementByClassName("actualComments").innerHTML += '<p>'+text;
//   //  document.getElementById("commentJS").value;
//  }
// textarea에서 input받아서
//button 클릭, 엔터 이벤트를 이용
//그 text를 actualComments라는 div 안에 넣어줘야 한다.

// const thisIsButton = document.getElementsByClassName('buttonCall')[0];
// console.log(thisIsButton)

// thisIsButton.addEventListener('click', function() {
//     let commentValue = document.getElementById('commentJs').value;
//     console.log("commentValue : ", commentValue);
//     let para = document.createElement("p");
//     para.innerHTML = commentValue;
// })




// const thisIsPtag = document.querySelector(".actualComments");
// const callTheComment = document.getElementById('commentJs');

// callTheComment.addEventListener('keydown', function(event) {
//     var defComment = callTheComment.Value;
//    // thisIsPtag.innerHTML = 
// })


// function printComment() {
//     var para = document.createElement("p");
//     para.innerHTML = "put another function here";
//     document.getElementByClassName("actualComments").appendChild(para);
// }