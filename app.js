document.addEventListener("DOMContentLoaded", preLoader)

function preLoader(){

    const $ = {
        screen: document.getElementById("screen"),
        buttons: document.getElementsByTagName("span")
    }

    Array.from($.buttons).forEach((button) => {
        button.addEventListener("click", buttonWhisperer(button.textContent));
    })
    
    function buttonWhisperer(buttonText){
        const calculator = {
            "+"(){ $.screen.textContent += "+" },
            "-"(){ $.screen.textContent += "-" },
            "x"(){ $.screen.textContent += "*" },
            "÷"(){ $.screen.textContent += "/" },
            "C"(){ $.screen.textContent = "" },
            "="(){ $.screen.textContent = eval($.screen.textContent) },
            number(buttonText){ return () => { $.screen.textContent += buttonText } }
        }
        return calculator[buttonText] || calculator.number(buttonText)
    }
    
}