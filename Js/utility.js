function setValueToTotalSection(buttonID) {

    document.getElementById(buttonID).addEventListener('click', function () {
        document.getElementById(buttonID).classList.add('bg-ticket-primary')

        const seatID = document.getElementById(buttonID).innerText
        const div = document.createElement('div')
        const tailwindClass = 'flex flex-row justify-between'
        const paragraphClass = 'text-ticket-heading-color font-semibold text-opacity-60'
        div.innerHTML = `
                <div class="${tailwindClass}">
                    <p class="${paragraphClass}">${seatID}</p>
                    <p class="${paragraphClass}">Economy</p>
                    <p class="${paragraphClass}">550</p>
                </div>
        `
        const seatDetailsContainer = document.getElementById('ticket-details-container')
        seatDetailsContainer.append(div)

        let ticketRemainder = document.getElementById('ticket-remaining')
        const remainingTicketCount = parseInt(ticketRemainder.innerText - 1)
        ticketRemainder.innerText = remainingTicketCount

    })
}

setValueToTotalSection('a1')