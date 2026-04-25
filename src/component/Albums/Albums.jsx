import React, { use } from 'react';

const Albums = ({albumsPromis}) => {
    const albums = use(albumsPromis);

    console.log(albums)
    
    return (
    
        <div>
            <h1>Albums:{albums.length}  </h1>
        </div>
    );
};

export default Albums;