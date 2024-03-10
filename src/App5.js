import React from "react";

export default function App5() {
  let products = [
    { id: 1, name: "Product 1", price: 440, image: "/lyrosreact/images/1.PNG" },
    { id: 2, name: "Product 2", price: 560, image: "/lyrosreact/images/2.PNG" },
    { id: 3, name: "Product 3", price: 500, image: "/lyrosreact/images/3.PNG" },
    { id: 4, name: "Product 4", price: 100, image: "/lyrosreact/images/4.PNG" },
    { id: 5, name: "Product 5", price: 900, image: "/lyrosreact/images/5.PNG" },
    { id: 6, name: "Product 6", price: 900, image: "/lyrosreact/images/6.PNG" },
  ];
  return (
    <div>
      {products.map((e) => (
        <div key={e.id}>
          <div>
            <img src={e.image} alt={e.name} />
          </div>
          <div>{e.name}</div>
          <div>{e.price}</div>
        </div>
      ))}
    </div>
  );
}
