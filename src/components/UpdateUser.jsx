import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateUser = () => {
    const loadedUser = useLoaderData();
    // console.log(user);

    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const name = form.name.value;
        const user = {name,email};

        fetch(`http://localhost:5000/users/${loadedUser._id}`,{
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }
    return (
        <div>
            <h1>update user {loadedUser.name}</h1>
            <form onSubmit={handleUpdate}>
                <input type="text" name="name"  defaultValue={loadedUser.name}/>
                <br />
                <input type="email" name="email" defaultValue={loadedUser.email} />
                <br />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default UpdateUser;