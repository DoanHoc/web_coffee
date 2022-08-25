let btn1 = document.querySelector('#btn1');
let img1 = document.querySelector('#open');
let btn2 = document.querySelector('#btn2');
// functions nut bam
// const database=firebase.database();
// const deviceRef=database.ref('quan1');

btn1.addEventListener('click', ()=>{
    img1.src = 'PNG/open.png'; 
    firebase.database().ref("dongmotiem").set(1)
})
btn2.addEventListener('click', ()=>{
    img1.src = 'PNG/close.png';
    firebase.database().ref("dongmotiem").set(0)
})

database.ref("dongmotiem").on("value", function (snapshot) {
    if (snapshot.val() == 1)
      document.getElementById("open").src="PNG/open.png";
    else
      document.getElementById("close").src="PNG/close.png";
  });







