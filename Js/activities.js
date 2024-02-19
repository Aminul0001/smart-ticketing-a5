

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

                    if (updateTicketCount >= 1 && updateTicketCount <= 4) {
                        const tprice = updateTicketCount * 550;
                        totalPrice.innerText = tprice.toString();
                    } else {
                        totalPrice.innerText = '0';
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


const couponNew = "new15";
const couponCouple = "couple 20";

function couponApply() {
    const totalPriceElement = document.getElementById('total-price');
    const totalPrice = parseInt(totalPriceElement.innerText);

    const code = document.getElementById('coupon-code').value.toLowerCase();
    let discount = 0;

    if (code === couponNew) {
        discount = (totalPrice * 15) / 100;
    } else if (code === couponCouple) {
        discount = (totalPrice * 20) / 100;
    }

    const grandTotal = totalPrice - discount;

    if (grandTotal < 0) {
        totalPriceElement.innerText = '0';
    } else {
        totalPriceElement.innerText = grandTotal.toString();
    }

    document.getElementById('coupon-apply').removeAttribute('disabled',false);
}

