let hexarr = "0123456789ABCDEF";
let code1="#D4238B";
let code2="#16A0E6";
let text= document.querySelector('.colorcode');
const changecode1 = ()=>{
    code1="#";
    for(let i=0;i<6;i++) code1+= hexarr[Math.floor(16*Math.random())];
};
const changecode2 = ()=>{
    code2="#";
    for(let i=0;i<6;i++) code2+= hexarr[Math.floor(16*Math.random())];
    console.log(code2);
};
const applyGradient = ()=>{
    document.body.style.backgroundImage=`linear-gradient(to right, ${code1}, ${code2})`;
    text.textContent = `background-image: linear-gradient(to right, ${code1}, ${code2});`;
    document.getElementById('btn1').textContent= code1;
    document.getElementById('btn2').textContent= code2;
}
document.getElementById('btn1').addEventListener("click",()=>{
    changecode1();
    applyGradient();
});
document.getElementById('btn2').addEventListener("click",()=>{
    changecode2();
    applyGradient();

});
