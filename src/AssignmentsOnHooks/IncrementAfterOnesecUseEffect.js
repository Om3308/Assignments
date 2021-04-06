import React, { useEffect, useState } from "react";

function IncrementAfterOnesecUseEffect(props) {
  const [count, setcount] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setcount((count) => count + 1);
    }, 1000);
    return () => clearInterval(count);
  });

  return (
    <div>
      <header className="App-header">{count}</header>
    </div>
  );
}

export default IncrementAfterOnesecUseEffect;
