import React from 'react';
import User from '../../src/component/user/User';

const Users = ({users}) => {
    return (
        <div>
            {
                users.map((user) => {
                    return(
                        <div key={user.id}>
                            <User user={user} />
                        </div>
                )
                })
            }
        </div>
    );
};

export default Users;

export const getStaticProps = async() =>{
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json()
    return{
        props : {
            users: data
        }
    }
}