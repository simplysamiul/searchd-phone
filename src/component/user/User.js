import React from 'react';

const User = ({user}) => {
    return (
        <div>
            <h1>user Name |: {user.name}</h1>
            <h1>user Email |: {user.email}</h1>
        </div>
    );
};

export default User;