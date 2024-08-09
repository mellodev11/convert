//Cotação de moedas do dia.
const USD = 4.87
const EUR = 5.32
const GBP = 6.08


const frm = document.querySelector('form')
const amount = document.getElementById('amount')
const currency = document.getElementById('currency')
const footer = document.querySelector('main footer')
const description = document.getElementById('description')



//MANIPULANDO O INPUT AMOUNT PARA RECEBER SOMENTE NUMEROS
amount.addEventListener('input', () =>{
    const hasCharacteresRegex = /\D+/g
    
    amount.value = amount.value.replace(hasCharacteresRegex, "")

    })

    //PEGANDO EVENT SUBMIT (ENVIAR) DO FORM
    frm.onsubmit = (e) =>{
        e.preventDefault()

        switch(currency.value){
            case "USD":
                convertCurrency(amount.value, USD, "US$")
                break
                case "EUR":
                    convertCurrency(amount.value, EUR, "€")
                    break
                    case "GBP": 
                    convertCurrency(amount.value, GBP, "£")
                    break
        }
    }
    //função converter a moeda
    function convertCurrency(amount, price, symbol){
        try {
          description.textContent = `${symbol} 1 = ${price}`
            footer.classList.add("show-result")
        } catch (error) {
            footer.classList.remove("show-result")
            alert("não foi possivel converter")
        }
    }



    