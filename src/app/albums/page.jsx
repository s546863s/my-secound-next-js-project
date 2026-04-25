import Albums from '@/component/Albums/Albums';
import React, { Suspense } from 'react';

const albumsPage = async () => {
    const albumsPromis = fetch("https://jsonplaceholder.typicode.com/albums").then(res => res.json());

//    console.log(albumsPromis)


    return (
        <div>
            <Suspense>
                <Albums albumsPromis={albumsPromis}></Albums>
            </Suspense>
        </div>
    );
};

export default albumsPage;