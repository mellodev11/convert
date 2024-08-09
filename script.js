const frm = document.querySelector('form')
const amount = document.getElementById('amount')
const currency = document.getElementById('currency')

//MANIPULANDO O INPUT AMOUNT PARA RECEBER SOMENTE NUMEROS
amount.addEventListener('input', () =>{
    const hasCharacteresRegex = /\D+/g
    
    amount.value = amount.value.replace(hasCharacteresRegex, "")

    })

    //PEGANDO EVENT SUBMIT (ENVIAR) DO FORM
    frm.onsubmit = (e) =>{
        e.preventDefault()

        console.log(currency.value)
    }

    