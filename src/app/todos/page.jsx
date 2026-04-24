import React from 'react';

const todos = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todos = await res.json();
    console.log(todos)
    return (
        <div className='grid grid-cols-2 md:grid-cols-3 gap-8 p-12'>
            
            {
                todos.map(todo => 
                    <div key={todo.id} className='card bg-base-100  shadow-sm p-12 ' >

                        <h1 className='text-2xl font-bold'>Title: {todo.title}</h1>
                        
                         </div>
                )
            }
        </div>
    );
};

export default todos;