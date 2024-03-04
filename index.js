document.getElementById('myForm').addEventListener("submit", (e) => {
    e.preventDefault();
    const id = e.target.id.value;
    const date = e.target.date.value;
    const clientName = e.target.clientName.value;
    const totalAmount = e.target.totalAmount.value;
    const recieveAmount = e.target.recieveAmount.value;

    document.getElementById('closeBtn').click()
     document.getElementById('totalAmount').innerHTML = totalAmount
     document.getElementById('totalAmountClient').innerHTML = totalAmount
     document.getElementById('recieveAmount').innerHTML = recieveAmount
     document.getElementById('recieveAmountClient').innerHTML = recieveAmount
     document.getElementById('recieveAmount2').innerHTML = recieveAmount
     document.getElementById('recieveAmountClient2').innerHTML = recieveAmount
     document.getElementById('BalanceDue').innerHTML = totalAmount - recieveAmount
     document.getElementById('BalanceDueClient').innerHTML = totalAmount - recieveAmount
     document.getElementById('name').innerHTML = clientName
     document.getElementById('nameClient').innerHTML = clientName
     document.getElementById('date').innerHTML = date
     document.getElementById('dateClient').innerHTML = date
     document.getElementById('recieptID').innerHTML = id
     document.getElementById('recieptIDClient').innerHTML = id
 
     
})

const paySystem = document.getElementById("paySystem").addEventListener("change", (e) => {
    const payName = e.target.value;
    document.getElementById("paySystemField").innerHTML = payName
    document.getElementById("paySystemFieldClient").innerHTML = payName
})

document.getElementById("modal").addEventListener("click", () => {
    document.getElementById("my_modal_1").classList.add("modalStyle")
})
