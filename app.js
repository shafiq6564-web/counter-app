const incBtn = document.getElementById("increment");
const decBtn = document.getElementById("decrement");
const resBtn = document.getElementById("reset");
const numdis = document.getElementById("count");

let count = 0;
function render(){
    numdis.textContent=count;  //iska matlab ha mene numdis me jo bhi html element hoga usko count wali vale dy do
}

// increse btn per work
incBtn.addEventListener( 'mousemove', function (){
    count++;
    numdis.style.backgroundColor = "green";
    render();
});

//decbtn

decBtn.addEventListener('mousemove', function (){
    count--;
    numdis.style.backgroundColor = "red";
    render();
});
// reset btn
resBtn.addEventListener('mouseover', function (){
    count = 0;
    render();
    numdis.style.backgroundColor = "yellow";
});
render();