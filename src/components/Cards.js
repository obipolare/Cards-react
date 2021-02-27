import React, { useState } from "react";
import Card from "./Card";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";

const Cards = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      title: "Obipolare",
      image: image1,
      url: "https://twitter.com/obipolare",
    },
    {
      id: 2,
      title: "twitter",
      image: image2,
      url: "https://twitter.com/obipolare",
    },
    {
      id: 3,
      title: "instagram",
      image: image3,
      url: "https://twitter.com/obipolare",
    },
  ]);
  console.log(cards);
  return (
    <main className="flex items-center justify-center w-full h-full py-4 mx-auto sm:p-12 lg:w-11/12 xl:h-screen">
      <section className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3">
        {cards.map((card) => (
          <article className="w-64 sm:w-80" key={card.id}>
            <Card {...card} />
          </article>
        ))}
      </section>
    </main>
  );
};

export default Cards;
