//For capture button text from user------------------------
let textBox = document.getElementById('textBox');
buttons = document.querySelectorAll('button');
for(item of buttons) {
    item.addEventListener('click',(e)=>{
        buttonText = e.target.innerText;
        console.log(buttonText);
        let screnValue = '';
/* READ: screnValue: is a variable to know userenter which current button.
         textBox.value: showing the current value after computing.
         

*/

        //Logic...................
        if(buttonText == 'X'){
            buttonText = '*';
            screnValue += buttonText;
            textBox.value += screnValue;
        }
        else if(buttonText == 'AC'){
            screnValue = '';
            textBox.value = screnValue;
        }
        else if(buttonText == '='){
            screnValue=eval(textBox.value);
            textBox.value = screnValue;
        }
        else if(buttonText == 'DEL'){
            textBox.value = textBox.value.substring(0, textBox.value.length-1);
        }
        else{
            screnValue +=buttonText;
            textBox.value += screnValue;
        }
    })
}