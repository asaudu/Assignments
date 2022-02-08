class Event {
    constructor(name, description) {
        this.name = name;
        this.description = description;
        this.availableTickets = [];
        this.addAvailableTickets = function(ticketName, price) {
            this.ticketName = ticketName;
            this.price = price;
            this.availableTickets.push(ticketName, price);
        }
        allTickets() {
            let allTicketsSummary = "All tickets: ";
            for (let i = 0; i < this.availableTickets.length; i++) {
              allTicketsSummary += `${i+1}. ${this.availableTickets[i][0]} ${this.availableTickets[i][1]} `
              // console.log(allTicketsSummary);
              // all tickets: 1. human 299 2. vampire 99
            }
            return allTicketsSummary;
          }
      }
}


let eventObj1 = new Event(
    'KLOS Golden Gala',
    'An evening with hollywood vampires'
  );

let eventObj2 = new Event(
    'Skillet & Sevendust',
    'Victorious war tour'
  );

let eventObj3 = new Event(
    'Jenny Lewis',
    'On the line tour 2019'
);


eventArray.push(eventObj1, eventObj2, eventObj3);
console.log(eventArray);

document.addEventListener('DOMContentLoaded', () => {
    let html = '';
    eventArray.forEach((item) => {
      html += `<li>${item.name} - ${item.description}`;
    });
    document.querySelector('#event').innerHTML = html;
  });


  class TicketType {
    constructor(name, price) {
        this.name = name;
        this.price = price;
      }
}
let eventArray = new Array();

let newTicket = new TicketType ("Zenon", "75");
  
eventObj2.addAvailableTickets("General Admission", 25)
eventObj2.addAvailableTickets("Floor Seating", 80)

eventObj3.addAvailableTickets("Orchestra", 300)
eventObj3.addAvailableTickets("Mezzanine", 200)
eventObj3.addAvailableTickets("Balcony", 100)