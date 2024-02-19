

function setValueToTotalSection(buttonIDs) {
    const maxSelections = 4;
    let selectedButtons = [];

    buttonIDs.forEach(buttonID => {
        const button = document.getElementById(buttonID);
        button.addEventListener('click', () => {
            if (!selectedButtons.includes(button)) {
                if (selectedButtons.length < maxSelections) {
                    selectedButtons.push(button);
                    button.classList.add('bg-ticket-primary');

                    const tailwindClass = 'flex flex-row justify-between'
                    const paragraphClass = 'text-ticket-heading-color font-semibold text-opacity-60'
                    const seatID = button.innerText;
                    const ticketPrice = 550
                    const div = document.createElement('div');
                    div.innerHTML = `
                    <div class="${tailwindClass}">
                    <p class="${paragraphClass}">${seatID}</p>
                    <p class="${paragraphClass}">Economy</p>
                    <p class="${paragraphClass}">${ticketPrice}</p>
                </div>
                    `;
                    const seatDetailsContainer = document.getElementById('ticket-details-container');
                    seatDetailsContainer.appendChild(div);

                    let ticketRemainder = document.getElementById('ticket-remaining')
                    const remainingTicketCount = parseInt(ticketRemainder.innerText - 1)
                    ticketRemainder.innerText = remainingTicketCount

                    let ticketCount = document.getElementById('ticket-count')
                    const updateTicketCount = parseInt(ticketCount.innerText) + 1
                    ticketCount.innerText = updateTicketCount

                    let totalPrice = document.getElementById('total-price');
                    let grandTotal = document.getElementById('grand-total');

                    if (updateTicketCount >= 1 && updateTicketCount <= 4) {
                        const tprice = updateTicketCount * 550;
                        totalPrice.innerText = tprice.toString();
                        grandTotal.innerText = tprice.toString();
                    } else {
                        totalPrice.innerText = '0';
                        grandTotal.innerText = '0';
                    }



                }
                if (selectedButtons.length === maxSelections) {
                    disableRemainingButtons();
                }
            }
        });
    });

    function disableRemainingButtons() {
        buttonIDs.forEach(buttonID => {
            const button = document.getElementById(buttonID);
            if (!selectedButtons.includes(button)) {
                button.disabled = true;
            }
        });
    }
}

const allSeats = ['a1', 'a2', 'a3', 'a4', 'b1', 'b2', 'b3', 'b4', 'c1', 'c2', 'c3', 'c4', 'd1', 'd2', 'd3', 'd4', 'e1', 'e2', 'e3', 'e4', 'f1', 'f2', 'f3', 'f4', 'g1', 'g2', 'g3', 'g4', 'h1', 'h2', 'h3', 'h4', 'i1', 'i2', 'i3', 'i4', 'j1', 'j2', 'j3', 'j4'];

setValueToTotalSection(allSeats);



document.getElementById('coupon-container').addEventListener('keyup', function(event){
    const text = event.target.value.toLowerCase();

    if (text === 'new15' || text === 'couple 20' ){
        document.getElementById('coupon-apply-button').removeAttribute('disabled')
    }
    
    else {
        document.getElementById('coupon-apply-button').setAttribute('disabled', true)
    }
})






document.getElementById('coupon-apply-button').addEventListener('click', function() {
    const couponCode = document.getElementById('coupon-container').value;
    couponApply(couponCode);
});

function couponApply(text) {
    let gtotal = document.getElementById('grand-total');
    let totalPrice = parseInt(gtotal.innerText);
    
    let grandTotal; 
    
    text = text.toLowerCase(); 
    
    if (text === "new15") { 
        grandTotal = totalPrice - (totalPrice * 0.15); 
    } else if (text === "couple 20") { 
        grandTotal = totalPrice - (totalPrice * 0.20); 
    } else {
        
        return; 
    }

    console.log("Grand Total after discount:", grandTotal); // Debugging output

    gtotal.innerText = grandTotal.toFixed(2); // Update the grand total with two decimal places
}







