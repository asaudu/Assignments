import {useState} from 'react';

const Users = () => {

    const marlin = { name: 'Marlin', email: 'marlin@gmail.com', id: '1' };
    const nemo = { name: 'Nemo', email: 'nemo@gmail.com', id: '2' };
    const dory = { name: 'Dory', email: 'dory@gmail.com', id: '3' };

    const [users, setUsers] = useState([marlin, nemo, dory]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState();
    const [id, setId] = useState();

    const handleUserSubmit = (e) => {
        e.preventDefault();
        const newUser = {id, name, email};
        setUsers([...users, newUser]);
    };

    // console.log(name)
    // console.log(email)
    // console.log(id)

    return(
        <section className="user-management">
            <h2>User Management</h2>

            <ul id="users-list">
              {/* display all existing Users here */}
              {users.map((users) => (
              <li>{users.name}: {users.email}</li>
              ))}           
            </ul>

            <div>
              <h3>Add User</h3>
              <form id="add-user" action="#">
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
                {/* Add more form fields here */}
                <input type="submit" value="Add" onSubmit={handleUserSubmit}/>
              </form>
            </div>

            <div>
              <h3>Delete User</h3>
              <form id="delete-user" action="#">
                <fieldset>
                  <label>User ID</label>
                  <input type="text" id="delete-user-id" />
                </fieldset>
                <input type="submit" />
              </form>
            </div>
        </section>
    )
};

export default Users;

