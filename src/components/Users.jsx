import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Users = () => {
    const users = useLoaderData();
    // console.log(users);
    const handleDelete = (id) => {
        fetch(`http://localhost:5000/users/${id}`, {
            method : "DELETE"

        })
        .then(res => res.json())
        .then(data => console.log(data))
    }
    return (
        <div>
           {
            users.map(user => <p key={user._id} >name: {user.name}, email:{user.email} <button onClick={() => handleDelete(user._id)}>X</button></p>)
           }
        </div>
    );
};

export default Users;