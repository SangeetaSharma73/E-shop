import React from "react";

const NewArrivals = () => {
  const newArrivals = [
    {
      _id: "1",
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500/random=1",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "2",
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500/random=1",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "3",
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500/random=1",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "4",
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500/random=1",
          altText: "Stylish Jacket",
        },
      ],
    },
  ];
  return (
    <section>
      <div className="container mx-auto text-center mb-10 relative">
        <h2 className="text-3xl font-bold mb-4">Explore new Arrivals</h2>
        <p>
          Discover the latest styles straight off the runway, freshly added to
          keep your wardrobe on the cutting edge of fashion.
        </p>
      </div>
      {/* Scroll Bottons */}
      <div class>
        <button></button>
      </div>
    </section>
  );
};

export default NewArrivals;
