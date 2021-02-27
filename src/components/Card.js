import React from "react";

const Card = ({ image, title, url }) => {
  return (
    <div className="w-full m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90">
      <a href={url} target="_blank" className="block w-full h-full">
        <img
          alt="blog photo"
          src={image}
          className="object-cover w-full max-h-40"
        />
        <div className="w-full p-4 bg-white dark:bg-gray-800">
          <p className="font-medium text-indigo-500 text-md"></p>
          <p className="mb-2 text-xl font-medium text-gray-800 capitalize dark:text-white">
            {title}
          </p>
          <p className="font-light text-gray-400 dark:text-gray-300 text-md">
            The new supermac is here, 543 cv and 140 000$. This is best racing
            computer about 7 years on... The new supermac is here, 543 cv and
            140 000$. This is best racing computer about 7 years on... The new
          </p>
        </div>
      </a>
    </div>
  );
};

export default Card;
