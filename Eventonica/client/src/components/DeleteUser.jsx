import {useState} from 'react';

const DeleteUser = ({deleteUser}) => {
//haven't checked to see if this works yet
const [deleteId, setDeleteId] = useState('');

    
    return(
        <div>
              <h3>Delete User</h3>
              <form id="delete-user" action="#" onSubmit={(e) => {
                  e.preventDefault();
                  deleteUser(deleteId);
                  setDeleteId('')
              }}>
                <fieldset>
                  <label>User ID</label>
                  <input type="text" id="delete-user-id" onChange={(e) => {
                    setDeleteId(e.target.value)
                }}/>
                </fieldset>
                <input type="submit"/>
              </form>
        </div>
    )
};

export default DeleteUser;