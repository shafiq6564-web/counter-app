const show = document.getElementById("count");
const addBtn = document.getElementById("increment");
const decBtn = document.getElementById("decrement");
const res = document.getElementById("reset");
// ab mene dom sey html elememnt sleect ke liye hain ab hum gunction banaye gaye 
let val = 0;
function render(){
    show.textContent=val;
};
// ab inc btn per work

addBtn.addEventListener( 'click' , function (){
    val++;
    render();
});
decBtn.addEventListener( 'click' , function (){
    val--;
    render();
})
res.addEventListener( 'click' , function (){
    val =  0;
    render();
})
render();