import {useState} from 'react';
import DeleteUser from './DeleteUser';

const Users = (props) => {

    const marlin = { name: 'Marlin', email: 'marlin@gmail.com', id: '1' };
    const nemo = { name: 'Nemo', email: 'nemo@gmail.com', id: '2' };
    const dory = { name: 'Dory', email: 'dory@gmail.com', id: '3' };

    const [users, setUsers] = useState([marlin, nemo, dory]);

    const [name, setName] = useState('');
    const [email, setEmail] = useState();
    const [id, setId] = useState();

    console.log(name, email, id);
    console.log(users);



    const handleUserSubmit = (e) => {
        e.preventDefault();
        const newUser = {id, name, email};
        setUsers([...users, newUser]);
    };

    const deleteUser = (e, deleteId) => {
        e.preventDefault();
        const newUsers = users.filter((i) => i.id !== deleteId);
        setUsers(newUsers);
      };

    // console.log(name);
    // console.log(email);
    // console.log(id);
    //console.log(Users);

    return(
        <section className="user-management">
            <h2>User Management</h2>

            <ul id="users-list">
              {/* display all existing Users here */}
              {users.map((user, index) =>
              <li key={index}> {user.name}: {user.email}</li>
              )}           
            </ul>

            <div>
              <h3>Add User</h3>
              <form id="add-user" action="#" onSubmit={handleUserSubmit}>
                <fieldset>
                  <label>Name</label>
                  <input type="text" id="add-user-name" value={name} onChange={(e) => setName(e.target.value)}/>
                  <br/> <br/>
                  <label>Email</label>
                  <input type="text" id="add-email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                  <br/> <br/>
                  <label>ID</label>
                  <input type="text" id="add-id" value={id} onChange={(e) => setId(e.target.value)}/>
                </fieldset>
                {/* The onSubmit handler isn't submitting/adding to the list */}
                <input type="submit" value="Add" />
              </form>
            </div>  
            <DeleteUser onSubmit={deleteUser}/> 
        </section>
    )
};

export default Users;

