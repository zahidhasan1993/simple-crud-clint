import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Users = () => {
    const loadedUsers = useLoaderData();
    const [users,setUsers] = useState(loadedUsers)
    // console.log(users);
    const handleDelete = (id) => {
        fetch(`http://localhost:5000/users/${id}`, {
            method : "DELETE"

        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.deletedCount > 0){
                alert('user deleted')
                const remaining = users.filter(user => user._id !== id)
                setUsers(remaining)
            }
        })
    }
    return (
        <div>
           {
            users.map(user => <p key={user._id} >name: {user.name}, email:{user.email} <Link to={`/users/${user._id}`}><button>Update</button></Link> <button onClick={() => handleDelete(user._id)}>X</button></p>)
           }
        </div>
    );
};

export default Users;