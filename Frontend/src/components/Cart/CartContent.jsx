import React from "react";

const CartContent = () => {
  const cartProducts = [
    {
      productId: 1,
      name: "T-shirt",
      size: "M",
      color: "Red",
      quantity: 1,
      price: 15,
      image: "https://picsum.photos/200?random=1",
    },
    {
      productId: 2,
      name: "Jeans",
      size: "L",
      color: "Black",
      quantity: 1,
      price: 225,
      image: "https://picsum.photos/200?random=2",
    },
    {
      productId: 3,
      name: "Shirt",
      size: "M",
      color: "Green",
      quantity: 1,
      price: 151,
      image: "https://picsum.photos/200?random=3",
    },
  ];
  return (
    <div>
      CartContent
      {cartProducts.map((product, index) => (
        <div
          key={index}
          className="flex items-start justify-between py-4 border-b"
        >
          <div className="flex items-start">
            <img
              src={product.image}
              alt={product.name}
              className="w-20 h-24 object-cover mr-4 rounded"
            />
            <div>
              <h3>{product.name}</h3>
              <p className="text-sm text-gray-500">
                size:{product.size} | color:{product.color}
              </p>
              <div className="flex items-center mt-2">
                <button className="border-rounded ">-</button>
                <span>{product.quantity}</span>
                <button className="border-rounded">+</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartContent;
