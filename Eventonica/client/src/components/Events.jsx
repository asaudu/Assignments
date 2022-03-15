import { useState } from "react";

const Events = () => {
    const aBirthday = {
        id: "1",
        name: "Birthday",
        date: "2021-01-11",
        description: "A birthday party for a bestie",
        category: "Celebration",
      };
      
      const graduation = {
        id: "2",
        name: "Graduation",
        date: "2022-03-05",
        description: "The class of 2021 graduates from University of Liverpool",
        category: "Education",
      };
      
      const worldDom = {
        id: "3",
        name: "Plotting World Domination",
        date: "2022-10-31",
        description: "A chance to plot how to take over the world",
        category: "Education",
      };

      const [events, setEvents] = useState([aBirthday, graduation,worldDom]);

    return(
        <section className="event-management">
            <h2>Event Management</h2>
            <div>
              <h3>All Events</h3>
              <ul id="events-list">
                {/* Display all Events here */}
                {events.map((event, index) => 
                    <li key={index}>({event.date}) {event.name}: {event.description}</li>
                )}
                
              </ul>

              <h3>Add Event</h3>
              <form id="add-event" action="#">
                <fieldset>
                  <label>Name</label>
                  <input
                    type="text"
                    id="add-event-name"
                    placeholder="Virtual corgi meetup"
                  />
                </fieldset>
                {/* Add more form fields here */}
                <input type="submit" />
              </form>
            </div>
          </section>
    )
}

export default Events;