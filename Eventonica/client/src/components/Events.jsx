import { useState, useReducer } from "react";

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

      

      const initialState = {
        id: '',
        name: '',
        date: '',
        description: '',
        category: ''
      };

      const [state, dispatch] = useReducer(reducer, initialState);

      function reducer(state, action) {
          console.log(state, action);
          switch(action.type) {
              case "editId":
                return { ...state, id: action.payload };
              case "editName":
                return { ...state, name: action.payload };
              case "editDate":
                return { ...state, date: action.payload }; 
              case "editDescription":
                return { ...state, description: action.payload };
              case "editCategory":
                return { ...state, category: action.payload };

          }
      };

      const handleEventSubmit = (e) => {
          e.preventDefault();
          setEvents([...events, state]);
      }

      
        

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
              <form id="add-event" action="#" onSubmit={handleEventSubmit}>
                <fieldset>
                <label>Id</label>
                  <input
                    type="text"
                    placeholder="Choose an ID" value={state.id}
                    onChange={(e) =>
                      dispatch({
                        type: 'editId',
                        payload: e.target.value
                      })
                    }
                  />
                  <br/> <br/>
                  
                <label>Name</label>
                  <input
                    type="text"
                    //id="add-event-name"
                    placeholder="Virtual corgi meetup" value={state.name}
                    onChange={(e) =>
                      dispatch({
                        type: 'editName',
                        payload: e.target.value
                      })
                    }
                  />
                  <br/> <br/>
                <label>Date</label>
                  <input
                    type="date"
                    //id="add-event-name"
                    placeholder="Virtual corgi meetup" value={state.date}
                    onChange={(e) =>
                      dispatch({
                        type: 'editDate',
                        payload: e.target.value
                      })
                    }
                  />
                    <br/> <br/> 
                <label>Description</label>
                  <input
                    type="text"
                    id="add-event-name"
                    placeholder="Virtual corgi meetup" value={state.description}
                    onChange={(e) =>
                      dispatch({
                        type: 'editDescription',
                        payload: e.target.value
                      })
                    }
                  />
                  <br/> <br/>
                <label>Category</label>
                  <input
                    type="text"
                    //id="add-event-category"
                    placeholder="Virtual corgi meetup" value={state.category}
                    onChange={(e) =>
                      dispatch({
                        type: 'editCategory',
                        payload: e.target.value
                      })
                    }
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