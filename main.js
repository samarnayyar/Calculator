const display = document.getElementById("display");
const buttons = document.querySelectorAll(".button");

buttons.forEach(function(button){
    button.addEventListener('click',function(){
        const dv = button.getAttribute('data-value')
        const operators = ['+', '-', '*', '/', '%', '.'];
        const lastCharacter = display.value.slice(-1);
        
        if (dv === "="){
            try{
                display.value = eval(display.value);
            } catch(error){
                display.value="Error!";
                setTimeout(() => display.value='',1000);
            }
        } else if (dv === "del"){
            display.value = display.value.slice(0, -1);
        } else if (dv === "c"){
            display.value = "";
        } else {
            
            if (display.value === "" && operators.includes(dv)) {
                return;
            }
            if (operators.includes(dv) && operators.includes(lastCharacter)){
                return;
            }

            display.value += dv;
        }
    });
});
