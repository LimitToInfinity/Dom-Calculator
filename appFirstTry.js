document.addEventListener("DOMContentLoaded", postLoad)

function postLoad(){
    // Array.from(document.querySelectorAll('span'))
    //     .filter(span => span.className === "")
    //     .map(span => span.className = "number")

    // const numbers = document.getElementsByClassName("number")
    // const zero = document.getElementById("zero")
    // const operators = document.getElementsByClassName("operator")
    // const clear = document.getElementById("clear")
    // const equals = document.getElementById("equals")
    // const buttonsContainer = document.getElementById("buttons-container")
    
    const $ = {
        screen: document.getElementById("screen"),
        keys: document.getElementsByTagName("span"),
        buttonsDiv: document.querySelector(".buttons")
    }

    const $$ = {
        firstCalc: "",
        operator: "",
        secondCalc: "",
        evaluation: ""
    }

    $.screen.innerText = "0"
    
    // Array.from($.keys)
    //     .map(key =>
    //     key.addEventListener("click", display)
    //     )

    $.buttonsDiv.addEventListener("click", display)

    function display(){

        if (event.target.matches("#clear")){
        $.screen.innerText = "0"
        }
        else if (event.target.matches("#equals")){
            $$.secondCalc = parseFloat($.screen.innerText.slice(1))
            if ($$.operator === "+"){
                $$.evaluation = parseFloat($$.firstCalc) + parseFloat($$.secondCalc)
                $.screen.innerText = $$.evaluation
            }
            else if ($$.operator === "-"){
                $$.evaluation = parseFloat($$.firstCalc) - parseFloat($$.secondCalc)
                $.screen.innerText = $$.evaluation
            }
            else if ($$.operator === "x"){
                $$.evaluation = parseFloat($$.firstCalc) * parseFloat($$.secondCalc)
                $.screen.innerText = $$.evaluation
            }
            else if ($$.operator === "÷"){
            $$.evaluation = parseFloat($$.firstCalc) / parseFloat($$.secondCalc)
                $.screen.innerText = $$.evaluation
            }
        }
        else if (event.target.matches(".operator")){
            $$.firstCalc = parseFloat($.screen.innerText)
            $$.operator = event.target.innerText
            $.screen.innerText = $$.operator
        }
        else if ($.screen.innerText !== "0" && $.screen.innerText !== "Infinity" && $.screen.innerText !== "NaN"){
            $.screen.innerText = $.screen.innerText.concat(event.target.innerText)
        }
        else{
            $.screen.innerText = event.target.innerText
        }
    }

    // Array.from(document.getElementsByClassName("operator"))
    //     .filter(operator => operator.id === "")
    //     .map(operator => document.createElement("span"))
    //     .map(operator => $.screen.appendChild(operator))
}