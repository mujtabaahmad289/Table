let x =0 
let newone=document.getElementById("new")
let table=  document.getElementById("Table")

// let zakat = 0


function new1() {
    x += 1 ;
   newone.innerText=x

}

function reset() {
    x = 0;
    newone.innerText=x
    table.innerHTML='';

}
function subtract() {
    x-=1
    newone.innerText=x
}

function Tableone() {
    table.innerHTML='';

    for (let y=0 ; y<10 ; y++){
    table.innerHTML   +=  "2 " + " * " + y +" = " + y*2 +"<br>";
    }
}

function Tablethree(){
    table.innerHTML='';

    for (let y=0 ; y<10 ; y++){
    table.innerHTML   +=  "3 " + " * " + y +" = " + y*3 +"<br>";
    }    
}

function Tablefour(){

    table.innerHTML='';

    for (let y=0 ; y<10 ; y++){
    table.innerHTML   +=  "4 " + " * " + y +" = " + y*4 +"<br>";
    }    
}













// function one() {
// zakat =+`1`
// document.getElementById("cal").innerText=zakat
// }

// function two() {
//     zakat =+`2`
//     document.getElementById("cal").innerText=zakat
//     }
//     function three() {
//         zakat =+`3`
//         document.getElementById("cal").innerText=zakat
//         }

//         function four() {
//             zakat =+`4`
//             document.getElementById("cal").innerText=zakat
//             }
//              function five() {
//                 zakat =+`5`
//                 document.getElementById("cal").innerText=zakat
//                 }
//                 function six() {
//                     zakat =+`6`
//                     document.getElementById("cal").innerText=zakat
//                     }
//                     function seven() {
//                         zakat =+`7`
//                         document.getElementById("cal").innerText=zakat
//                         }
//                         function eight() {
//                             zakat =+`8`
//                             document.getElementById("cal").innerText=zakat
//                             }
//                             function nine() {
//                                 zakat =+`9`
//                                 document.getElementById("cal").innerText=zakat
//                                 }

