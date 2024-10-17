// get the button element
const cButton=document.getElementById('colorButton');
const afterMessage=document.getElementById('after');
// add the event listener for the button
cButton.addEventListener('click',()=>{
    // cButton.style.backgroundColor=cButton.style.backgroundColor==='yellow' ? 'blue':'yellow';
    cButton.style.backgroundColor=cButton.style.backgroundColor==='brown' ? 'blue':'brown';
    cButton.style.color=cButton.style.color==='red'?'black' : 'red';
    afterMessage.style.display='block';
})
