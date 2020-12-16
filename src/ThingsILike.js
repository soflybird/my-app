import React from 'react';

const ThingsILike = () => {

    const thingsILike = ['crystals','chihuahuas', 'rainbows'];

    const listItems = thingsILike.map(thing =>
    <li>{thing}</li>
    );

  return (
        <ul>
            {listItems}
        </ul>
    )
}

export default ThingsILike;