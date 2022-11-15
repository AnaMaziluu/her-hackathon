import React from 'react';

const SearchBox = () => {
    return (
        <div className='pa1 mr2 dib'>
            <input 
                className='pa3 float-right ba b--light-purple br-pill fr'
                type='search' 
                placeholder='Search...' 
            />
        </div>
    );

}

export default SearchBox;