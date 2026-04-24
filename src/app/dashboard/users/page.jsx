import Link from 'next/link';
import React from 'react';

const onlinDataFetchin = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json()

    console.log(users)
    return (
      <div>
        {
            users && <div className='grid grid-cols-2 md:grid-cols-3 gap-6 p-8'>
            {
                users.map(user => 
                    <Link href={`/dashboard/users/${user.id}`} key={user.id}>
                    <div className='card bg-base-100 p-8 space-y-6 shadow-sm' >

                            <h1>{user.id}</h1>
                            <h1>{user.name}</h1>
                            <h1>{user.email}</h1>

                    </div>
                    </Link>
                )
            }
        </div>
        }
      </div>
    );
};

export default onlinDataFetchin;