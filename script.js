
setInterval(function update(){
    var settime=document.getElementById("settime");
    var setdate=document.getElementById("setdate");
    var date=new Date();
    settime.innerHTML=date.getHours()+ ":" +date.getMinutes()+ ":" +date.getSeconds();
    setdate.innerHTML=date.getDate()+"-"+parseInt(date.getMonth())+"-"+date.getFullYear();
},100)
function getcolor(){
var setcolor=document.getElementById("setcolor").value;
localStorage.setItem("COLOR",setcolor);
document.getElementById("body").style.backgroundColor=localStorage.getItem("COLOR");
document.getElementById("time").style.backgroundColor=localStorage.getItem("COLOR");

}
function fouzia(){
    document.getElementById("setcolor").value=localStorage.getItem("COLOR");
    document.getElementById("body").style.backgroundColor=localStorage.getItem("COLOR");
     document.getElementById("time").style.backgroundColor=localStorage.getItem("COLOR");
}
onload=fouzia();
