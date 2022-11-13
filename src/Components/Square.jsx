import React from 'react'

const square = ({ onClick, value }) =>  {

    return (
      <button
        className="square" 
        onClick ={() => onClick()}
        >
        {value}
      </button>
    );

  }

  export default Square