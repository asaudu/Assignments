import calendar from "./calendar.png";
import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Users from "./components/Users";
import Events from "./components/Events";

function App() {
//the below was an attempt to get the new user to be added to the list, failed  
const [submitted, setSubmitted] = useState(false);

const onSubmit = () => {
  setSubmitted(true);
  console.log("User Successfully Added!");
};

  return (
    <div className="App">
      <header>
        <img src={calendar} alt="Calendar Star Logo" />
        <h1>Eventonica</h1>
      </header>

      <main>
        <div className="user-and-events">
          <Users onSubmit={onSubmit}/>

          <Events />
        </div>

        <div>
          <h3>Delete Event</h3>
          <form id="delete-event" action="#">
            <fieldset>
              <label>Event ID</label>
              <input type="number" min="1" id="delete-event-id" />
            </fieldset>
            <input type="submit" />
          </form>
        </div>

        <aside className="search-toolbar">
          <div>
            <h3>Find Events</h3>
            <form id="search" action="#">
              <fieldset>
                <label htmlFor="date-search">Date</label>
                <input type="text" id="date-search" placeholder="YYYY-MM-DD" />
              </fieldset>
              <fieldset>
                <label htmlFor="category-search">Category</label>
                <input type="text" id="category-search" />
              </fieldset>

              <input type="submit" value="Search" />
            </form>
          </div>
        </aside>
      </main>

      <Footer />
    </div>
  );
}

export default App;