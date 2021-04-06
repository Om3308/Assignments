
import React, { useState } from "react";
function HookDemo() {
  const [items, setItems] = useState([]);
  const additem = event => {


    setItems([
      ...items,
      {
        id: items.length,
        value: [event.target.value],
      },
    ]);
  };
  return (
    <div>
         <input type="text" id="name" value={items.name} placeholder="item name" />
      <button onClick={e=>additem()}>Add a item</button>
      <ol >
        {items.map((i) => (
          <li key={i.id}>{i.value}</li>
        ))}
      </ol>
    </div>
  );
}
export default HookDemo;

