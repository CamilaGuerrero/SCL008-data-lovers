window.onload = () => {
  document.getElementById("page1").style.display="block";
  document.getElementById("page2").style.display ="none";
  document.getElementById("page3").style.display="none";
  document.getElementById("page4").style.display="none";
}
document.getElementById("pagina2").addEventListener("click",() => {
  document.getElementById("page1").style.display="none";
  document.getElementById("page2").style.display ="block";
  document.getElementById("page3").style.display="none";
  document.getElementById("page4").style.display="none";
});
document.getElementById("pagina3").addEventListener("click",() => {
  document.getElementById("page1").style.display="none";
  document.getElementById("page2").style.display ="none";
  document.getElementById("page3").style.display="block";
  document.getElementById("page4").style.display="none";
});
document.getElementById("init").addEventListener("click",() => {
  document.getElementById("page1").style.display="block";
  document.getElementById("page2").style.display ="none";
  document.getElementById("page3").style.display="none";
  document.getElementById("page4").style.display="none";
});
document.getElementById("about").addEventListener("click",() => {
  document.getElementById("page1").style.display="none";
  document.getElementById("page2").style.display ="block";
  document.getElementById("page3").style.display="none";
  document.getElementById("page4").style.display="none";
});
document.getElementById("datos").addEventListener("click",() => {
  document.getElementById("page1").style.display="none";
  document.getElementById("page2").style.display ="none";
  document.getElementById("page3").style.display="block";
  document.getElementById("page4").style.display="none";
});

const dataBank = window.WORLDBANK.PER['indicators'];
let indicatorName= []
for(let i=0; i<dataBank.length; i++){
   indicatorName.push({
     data: dataBank[i].data,
     indicator :  dataBank[i].indicatorName,
   });
   document.getElementById('insert').innerHTML +=`<ul><li>
   <a href="#" class="link" id="${dataBank[i].indicatorName}">${dataBank[i].indicatorName}</a>
   </li></ul>`;
   
   document.getElementById(dataBank[i].indicatorName).addEventListener('click', () => {
    // if(){
    //document.getElementById('newinsert').innerHTML += `<ul><li><p>${indicatorName}</p></li></ul>`
     //}
   })
  };

//console.log(indicatorName)
/*
let link = ""
for(let i =0; i<data.length;i++){
link = (document.getElementById('insert').innerHTML += `<ul><li><a id="${[i]}" class="link" href="#" value="${data[i].indicatorName}">${data[i].indicatorName}</a></li></ul>`) ; 
};
const showData = [];
for(let i=0; i <data.length; i++){
  showData.push(Object.entries(data[i].data))
 // console.log(data[i].data)
}

let trying=""
let holi=""
for(let i=0;i<showData.length;i++){
//console.log(showData[i])
trying = document.getElementById([i])
document.getElementById([i]).addEventListener('click', () => {
  holi = trying.getAttribute('value');
  let chao= showData[i]
  console.log(chao)
  console.log(holi)
 if(holi === chao){
  
 //document.getElementById('newinsert').innerHTML=`<ul><li><p>${showData[i]}</p></li></ul>`
//console.log(showData[i])

//
}
})
}
*/
