//Cotação de moedas do dia.
const USD = 4.87
const EUR = 5.32
const GBP = 6.08


const frm = document.querySelector('form')
const amount = document.getElementById('amount')
const currency = document.getElementById('currency')
const footer = document.querySelector('main footer')
const description = document.getElementById('description')
const result = document.getElementById('result')




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
          description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`
          
          let total = (amount*price).toFixed(2)

            if(isNaN(total)){
                return alert("Digite o valor corretamente")
            }

          result.textContent = `${total} Reais`
          total = formatCurrencyBRL(total).replace("R$", "")
          
          footer.classList.add("show-result")
        } catch (error) {
            footer.classList.remove("show-result")
            alert("não foi possivel converter")
        }
    }
    function formatCurrencyBRL(value){
        return Number(value).toLocaleString('pt-BR', {
            style: "currency",
            currency: "BRL"
        })
    }



    