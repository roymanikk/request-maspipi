import React from "react";

import Button from "elements/Button";

import image1 from "assets/images/image-list-1.jpg";
import image2 from "assets/images/image-list-2.jpg";
import image3 from "assets/images/image-list-3.jpg";

export default function Main() {
  const data = [
    {
      url: image1,
      title: "Mayan",
      description:
        "The Mayan describes that the world would end on the 12th December 2012 yet at that time there were no major events that happened.",
    },
    {
      url: image2,
      title: "Mayan",
      description:
        "The Mayan describes that the world would end on the 12th December 2012 yet at that time there were no major events that happened.",
    },
    {
      url: image3,
      title: "Mayan",
      description:
        "The Mayan describes that the world would end on the 12th December 2012 yet at that time there were no major events that happened.",
    },
    {
      url: image1,
      title: "Mayan",
      description:
        "The Mayan describes that the world would end on the 12th December 2012 yet at that time there were no major events that happened.",
    },
    {
      url: image2,
      title: "Mayan",
      description:
        "The Mayan describes that the world would end on the 12th December 2012 yet at that time there were no major events that happened.",
    },
    {
      url: image3,
      title: "Mayan",
      description:
        "The Mayan describes that the world would end on the 12th December 2012 yet at that time there were no major events that happened.",
    },
    {
      url: image1,
      title: "Mayan",
      description:
        "The Mayan describes that the world would end on the 12th December 2012 yet at that time there were no major events that happened.",
    },
    {
      url: image2,
      title: "Mayan",
      description:
        "The Mayan describes that the world would end on the 12th December 2012 yet at that time there were no major events that happened.",
    },
    {
      url: image3,
      title: "Mayan",
      description:
        "The Mayan describes that the world would end on the 12th December 2012 yet at that time there were no major events that happened.",
    },
    {
      url: image1,
      title: "Mayan",
      description:
        "The Mayan describes that the world would end on the 12th December 2012 yet at that time there were no major events that happened.",
    },
    {
      url: image2,
      title: "Mayan",
      description:
        "The Mayan describes that the world would end on the 12th December 2012 yet at that time there were no major events that happened.",
    },
    {
      url: image3,
      title: "Mayan",
      description:
        "The Mayan describes that the world would end on the 12th December 2012 yet at that time there were no major events that happened.",
    },
    {
      url: image1,
      title: "Mayan",
      description:
        "The Mayan describes that the world would end on the 12th December 2012 yet at that time there were no major events that happened.",
    },
    {
      url: image2,
      title: "Mayan",
      description:
        "The Mayan describes that the world would end on the 12th December 2012 yet at that time there were no major events that happened.",
    },
    {
      url: image3,
      title: "Mayan",
      description:
        "The Mayan describes that the world would end on the 12th December 2012 yet at that time there were no major events that happened.",
    },
    {
      url: image1,
      title: "Mayan",
      description:
        "The Mayan describes that the world would end on the 12th December 2012 yet at that time there were no major events that happened.",
    },
    {
      url: image2,
      title: "Mayan",
      description:
        "The Mayan describes that the world would end on the 12th December 2012 yet at that time there were no major events that happened.",
    },
    {
      url: image3,
      title: "Mayan",
      description:
        "The Mayan describes that the world would end on the 12th December 2012 yet at that time there were no major events that happened.",
    },
    {
      url: image1,
      title: "Mayan",
      description:
        "The Mayan describes that the world would end on the 12th December 2012 yet at that time there were no major events that happened.",
    },
    {
      url: image2,
      title: "Mayan",
      description:
        "The Mayan describes that the world would end on the 12th December 2012 yet at that time there were no major events that happened.",
    },
    {
      url: image3,
      title: "Mayan",
      description:
        "The Mayan describes that the world would end on the 12th December 2012 yet at that time there were no major events that happened.",
    },
    {
      url: image1,
      title: "Mayan",
      description:
        "The Mayan describes that the world would end on the 12th December 2012 yet at that time there were no major events that happened.",
    },
    {
      url: image2,
      title: "Mayan",
      description:
        "The Mayan describes that the world would end on the 12th December 2012 yet at that time there were no major events that happened.",
    },
    {
      url: image3,
      title: "Mayan",
      description:
        "The Mayan describes that the world would end on the 12th December 2012 yet at that time there were no major events that happened.",
    },
    {
      url: image1,
      title: "Mayan",
      description:
        "The Mayan describes that the world would end on the 12th December 2012 yet at that time there were no major events that happened.",
    },
    {
      url: image2,
      title: "Mayan",
      description:
        "The Mayan describes that the world would end on the 12th December 2012 yet at that time there were no major events that happened.",
    },
    {
      url: image3,
      title: "Mayan",
      description:
        "The Mayan describes that the world would end on the 12th December 2012 yet at that time there were no major events that happened.",
    },
  ];

  return (
    <div className="container main-container d-flex ">
      <div className="main-text d-flex flex-column">
        <p className="main-text-quote">
          EVERYONE, DEEP IN THEIR HEARTS, IS WAITING FOR THE END OF THE WORLD TO
          COME
        </p>
        <p className="main-text-quote-author">Haruki Murakami</p>

        <Button
          className="main-text-button btn-dark"
          href="/prophecy-list"
          type="link"
          isLarge={true}
        >
          Explore Prophecies
        </Button>
      </div>
      <div className="main-list">
        <ul className="main-list-items">
          {data.map((item, index) => (
            <li key={index} className="main-list-item d-flex p-2">
              <img src={item.url} alt={item.title} />
              <div className="main-list-item-wrapper d-flex flex-column">
                <p className="main-list-item-title">{item.title}</p>
                <p className="main-list-item-desc">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
