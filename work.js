let screen= document.getElementById('screen');
let buttons= document.querySelectorAll('button');
let screenValue ='';
for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText=e.target.innerText;
        console.log('Button test is ',buttonText);
        
        if(buttonText =='c'){
           screenValue= "";
           screen.value = screenValue;
        }
        else if (buttonText =='='){
           screen.value = eval(screenValue);
           screenValue= "";
        }
        else{

           screenValue += buttonText;
           screen.value = screenValue;
      }
    })   
}