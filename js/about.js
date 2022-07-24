
// // ----------------------- Start Portfolio Date
// function clock(){
//     var datePort = new Date();
//     var ho = datePort.getHours();
//     var mi = datePort.getMinutes();
//     var se = datePort.getSeconds();

//     var now = (ho + " : " + mi + " : " + se);
//     document.querySelector(".portfolio-date").innerHTML = now;
//     setTimeout("clock", 1000);
// }
// onload = clock;





// // ---------------------- Start Active PortFolio List
// let portfolioListMedea = document.querySelector(".portfolio-list-medea");
// let portfolioList = document.querySelector(".portfolio-list");
// portfolioListMedea.onclick = () => {
//     portfolioList.classList.toggle("active");
// }

// // ---------------------------- Start Message Active
// var chatsText = document.getElementsByClassName("chats-text");
// let message = document.querySelector(".box-right");
// let back = document.querySelector(".back");
// console.log(chatsText);
// for(let i=0; i<chatsText.length; i++){
//     chatsText[i].onclick = () => {
//         message.classList.add("active");
//     }
// }
// back.onclick = () => {
//     message.classList.remove("active");
// }





// // Start Slider In Bottom List
// let towItem = document.querySelectorAll(".item")
// let index = 0;
// function next (){
//     towItem[index].classList.remove("active");
//     index = (index + 1) % towItem.length;
//     towItem[index].classList.add("active")
// }
// function prev(){
//     towItem[index].classList.remove("active");
//     index = (index - 1 + towItem.length) % towItem.length;
//     towItem[index].classList.add("active")
// }


// // Start LIst Portfolio
// var portfolioBtn = document.querySelectorAll(".btn_portfolio");
// var portfolioBox = document.querySelectorAll(".bottom-box");
// portfolioBtn.forEach(btn => {
//     btn.onclick = () => {
//         portfolioBtn.forEach(remove => {
//             remove.classList.remove("active");
//             portfolioBtnData = btn.getAttribute("data-portfolioBtn");

//             portfolioBox.forEach(box => {
//                 var portfolioBoxData = box.getAttribute("data-portfolioBox");

//                 if(portfolioBtnData == portfolioBoxData){
//                     box.classList.add("active");
//                 }else{
//                     box.classList.remove("active");
//                 }
//             })
//         });
//         btn.classList.add("active");
//     }
// })