import React from 'react';

const Card = ({ name, email, id }) => {
  const URL = 'https://robohash.org/';
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc">
      <img alt='' src={`${URL}${id}?200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;
