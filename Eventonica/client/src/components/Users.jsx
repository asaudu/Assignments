import { useState, useEffect } from 'react';
//import { router } from '../../../server/app';
import DeleteUser from './DeleteUser';

const Users = () => {

    // const marlin = { name: 'Marlin', email: 'marlin@gmail.com', id: '1' };
    // const nemo = { name: 'Nemo', email: 'nemo@gmail.com', id: '2' };
    // const dory = { name: 'Dory', email: 'dory@gmail.com', id: '3' };

    //const [users, setUsers] = useState([marlin, nemo, dory]);
    const [users, setUsers] = useState([]);
    console.log('users', users);

    //this function is getting the api and linking it to this react component
    const getUsers = () => {
    fetch('http://localhost:4000/users')
        .then((res) => res.json())
        .then((res) => setUsers(res.users));
    };


    useEffect(() => {
    // useEffect will run getUsers() every time this component loads, as opposed to just the first time it is rendered.
    getUsers();
    }, []);

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

    const deleteUser = (deleteId) => {
        //e.preventDefault();
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
            <DeleteUser deleteUser={deleteUser}/> 
        </section>
    )
};

export default Users;

