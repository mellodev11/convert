//Cotação de moedas do dia.
// const USD = 4.87
// const EUR = 5.32
// const GBP = 6.08
// const BTC = 1000.00


const frm = document.querySelector('form')
const amount = document.getElementById('amount')
const currency = document.getElementById('currency')
const footer = document.querySelector('main footer')
const description = document.getElementById('description')
const result = document.getElementById('result')
const dateTime = document.getElementById('dateTime')





//MANIPULANDO O INPUT AMOUNT PARA RECEBER SOMENTE NUMEROS
amount.addEventListener('input', () => {
    const hasCharacteresRegex = /\D+/g

    amount.value = amount.value.replace(hasCharacteresRegex, "")

})

//PEGANDO EVENT SUBMIT (ENVIAR) DO FORM
frm.onsubmit = (e) => {
    e.preventDefault()

    switch (currency.value) {
        case "USD":
            convertCurrency(amount.value, USD, "US$")
            break
        case "EUR":
            convertCurrency(amount.value, EUR, "€")
            break
        case "GBP":
            convertCurrency(amount.value, GBP, "£")
            break
        case "BTC":
            convertCurrency(amount.value, BTC, "₿")
            break
    }
}
//função converter a moeda
function convertCurrency(amount, price, symbol) {
    try {
        description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

        let total = (amount * price).toFixed(2)

        if (isNaN(total)) {
            return alert("Digite o valor corretamente")
        }
        
        result.textContent = `${total} R$`
        total = formatCurrencyBRL(total).replace("R$", "")

        footer.classList.add("show-result")
        updateDateTime()
    } catch (error) {
        footer.classList.remove("show-result")
        alert("não foi possivel converter")
    }
}
function formatCurrencyBRL(value) {
    return Number(value).toLocaleString('pt-BR', {
        style: "currency",
        currency: "BRL"
    })
}
function getDateTime() {
    const now = new Date();
    const options = {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
        hour: '2-digit', minute: '2-digit', second: '2-digit'
    };
return now.toLocaleDateString('pt-br', options)
}
function updateDateTime(){
    const dateTimeString = getDateTime();
    dateTime.textContent = `Atualizado em: ${dateTimeString}`
}



const url = 'https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,GBP-BRL,'
const coins = 'USD-BRL,EUR-BRL,BTC-BRL,GBP-BRL'
fetch(url + coins)
    .then(response => response.json())
    .then(data => {

        USD = parseFloat(data.USDBRL.bid).toFixed(2)
        EUR = parseFloat(data.EURBRL.bid).toFixed(2)
        GBP = parseFloat(data.GBPBRL.bid).toFixed(2)
        BTC = parseFloat(data.BTCBRL.bid).toFixed(2)

    })
    .catch(error => {
        alert("Não encontrei atualizações", error)
    })