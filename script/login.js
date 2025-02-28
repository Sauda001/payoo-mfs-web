// alert()

// step 1 atching id using getElementById 
document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault();
    const acountNumber = document.getElementById('acount-num').value;
    // console.log(acountNumber);
    const pin = document.getElementById('pin').value;
    // console.log(acountNumber, pin);
    if (acountNumber.length===11) {
        // console.log('yesss');
        const convertedPin = parseInt(pin);
        if (convertedPin===1234) {
            // console.log("pin is okay");
            window.location.href = './main.html';
        } else {
            alert('pin is not okay');
        }
    } else {
        alert('need valid acount number');
    }
    
})