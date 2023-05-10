import React from 'react';

const Home = () => {
    const handleUser = (e) =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;

        const user = {name,email};

        console.log(user);
        fetch('http://localhost:5000/users', {
            method : "POST",
            headers : {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                alert('User Added')
                form.reset();
            }
        })

        
    }
    return (
        <form onSubmit={handleUser}>
            <input type="text" name="name" placeholder='name' id="" />
            <br />
            <input type="email" name="email" placeholder='email' id="" />
            <br />
            <input type="submit" value="Submit" />
        </form>
    );
};

export default Home;