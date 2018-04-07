
// var submitBtn = document.querySelector('#submit');
// var Inp=document.querySelector('#Inp');

// submitBtn.addEventListener("Click",addNumber);

// function addNumber(){
//     var number =parseFloat(Inp.value);

//     if(number){
//         var li =document.createElement("li");
//         li.innerText=number;
//         li.classList.add("")
//     }
// }

document.addEventListener("click",function(e){
    console.log(e.pageX+" "+ e.pageY);
    var icon=document.createElement("i");
    icon.className="test1";
    icon.style.position= "absolute";
    icon.style.left= e.pageX+"px";  
    icon.style.top= e.pageY+"px";
    document.body.appendChild(icon)
})