import React from 'react';
import RetoCDescription from "./RetoCDescription"

const RetoCharacter = ({character}) => (

    <div className="Character">
        <img src={`../img/${character}.jpg`} />
        <h2>{character}</h2>
        <span></span>
    </div>

);

export default RetoCharacter;