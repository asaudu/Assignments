import {useState} from 'react';

const DeleteEvent = ({deleteEventId}) => {
//haven't checked to see if this works yet
const [deleteId, setDeleteId] = useState('');

    
    return(
        <div>
              <h3>Delete Event</h3>
              <form id="delete-event" action="#" onSubmit={(e) => {
                  e.preventDefault();
                  deleteEventId(deleteId);
                  setDeleteId('')
              }}>
                <fieldset>
                  <label>User ID</label>
                  <input type="text" id="delete-event-id" onChange={(e) => {
                    setDeleteId(e.target.value)
                }}/>
                </fieldset>
                <input type="submit"/>
              </form>
        </div>
    )
};

export default DeleteEvent;