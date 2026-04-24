import Link from 'next/link';
import React from 'react';

const userDetails = async ({params}) => {
 
    const {userId} = await params;
    console.log(userId);

    const data = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const user = await data.json();

    console.log(user)


    return (
        <div>
            <h1>This is user details</h1>
            <h1>This is user details</h1>
            <button className='btn btn-disabled '>{user.id}</button>
            <h2>Name: {user.name}</h2>
            <h2>Email: {user.email}</h2>
            <Link href={'/dashboard/users'}>
            <button className='btn btn-primary'>Go Back</button>
            </Link>
        </div>
    );
};

export default userDetails;