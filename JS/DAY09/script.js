const printMessage=(msg)=>{
    console.log(msg);
}

const wait =(msg,sec)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            printMessage(msg);
            resolve();
        },sec)
    })
}
const bookTic = async()=>{
    printMessage("Welcome!");
    await wait("Login successfully",3000)
    await wait("seat has been selected successfully",2000);
    await wait("your seat has been confirmed. proceed for payment",3000);
    await wait("Payment has been done",4000);
    await wait("Ticket has been issued",3000);
    printMessage("Thankyou for visiting our site");
}