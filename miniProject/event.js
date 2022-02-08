class Event {
    constructor(name, description) {
      this.name = name;
      this.description = description;
      this.availableTickets = [];
    }
    addAvailableTickets(ticketName, price) {
      this.ticketName = ticketName;
      this.price = price;
      this.availableTickets.push(ticketName, price);
      //console.log(this.availableTickets);
    }
    allTickets(){
  let ticketSummary = "All tickets";
  for(let i = 0; i < this.availableTickets.length; i++) {
    ticketSummary += `${i+1} ${this.availableTickets[i][0]} ($${this.availableTickets[i][1]})`;
  }
  return ticketSummary;
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

let eventArray = new Array();
// how to push mutliple elements at once
eventArray.push(eventObj1, eventObj2, eventObj3);
// checking for pushed elements
console.log(eventArray);

eventObj1.addAvailableTickets("General Admission", 25);
eventObj1.addAvailableTickets("V.I.P", 35);

console.log(eventObj1.availableTickets);

document.addEventListener('DOMContentLoaded', () => {
    let html = '';
    eventArray.forEach((item) => {
      html += `<li>${item.name} - ${item.description}`;
    });
    document.querySelector('#event').innerHTML = html;
  });

  class TicketType {
    constructor(name, description) {
      this.name = name;
      this.price = price;
    }
  }



//let newTicket = new TicketType ("Zenon", "75")eventObj1.addAvailableTickets("human", 299);
eventObj1.addAvailableTickets("vampire", 99);
//console.log(eventObj1);
  
eventObj2.addAvailableTickets("General Admission", 25);
eventObj2.addAvailableTickets("Floor Seating", 80)
console.log(eventObj2.availableTickets);

eventObj3.addAvailableTickets("Orchestra", 300)
eventObj3.addAvailableTickets("Mezzanine", 200)
eventObj3.addAvailableTickets("Balcony", 100)
console.log(eventObj3.availableTickets);