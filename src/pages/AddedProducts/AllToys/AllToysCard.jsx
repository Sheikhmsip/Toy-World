import React from 'react';

const AllToysCard = ({toy}) => {
    const {seller, title, photo, } = toy
    return (
        <div>
            
            <p>{title}</p>

        </div>
    );
};

export default AllToysCard;