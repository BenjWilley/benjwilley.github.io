import React, { useState } from 'react';

function SimpleButton() {

  const [count, setCount] = useState(0);

  const handleClick = () => {

    setCount(count + 1);
  }

  return (
    <div>
        

      <button onClick={handleClick}>click the button</button>

      <p>clicked {count} times.</p>
    </div>
  );

}

export default SimpleButton;