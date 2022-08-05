import React from "react";

import Header from "parts/Header";
import Footer from "parts/Footer";
import image1 from "assets/images/image-list-1.jpg";
import image2 from "assets/images/image-list-2.jpg";
import image3 from "assets/images/image-list-3.jpg";

export default function ProphecyDetail() {
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
  ];
  return (
    <>
      <Header />
      <div className="prophecy-detail container d-flex ">
        <div className="prophecy-detail-wraper d-flex flex-column">
          <div className="prophecy-detail-info d-flex">
            <img src={image1} alt="image1" />
            <div className="prophecy-detail-wrapper container-fluid">
              <h3 className="prophecy-detail-title d-block">
                The Mayan Prophecy
              </h3>
              <div className="prophecy-detail-text-wrapper row ">
                <p className="prophecy-detail-text col-sm ">Conclusion </p>
                <p className="prophecy-detail-text col-sm">Proven Wrong</p>
              </div>
              <div className="prophecy-detail-text-wrapper row ">
                <p className="prophecy-detail-text col-sm">First Invention</p>
                <p className="prophecy-detail-text col-sm">200 BC</p>
              </div>
              <div className="prophecy-detail-text-wrapper row ">
                <p className="prophecy-detail-text col-sm">End of day</p>
                <p className="prophecy-detail-text col-sm">12 Dec 2012</p>
              </div>
              <div className="prophecy-detail-text-wrapper row ">
                <p className="prophecy-detail-text col-sm">Count down</p>
                <p className="prophecy-detail-text col-sm">
                  -10 Y, 12M, 28D 10 h : 2 m : 47s
                </p>
              </div>
              <div className="prophecy-detail-text-wrapper row ">
                <p className="prophecy-detail-text col-sm">Prophecy</p>
                <p className="prophecy-detail-text col-sm">
                  Earth will be doomed and no one wil survive
                </p>
              </div>
              <div className="prophecy-detail-text-wrapper row ">
                <p className="prophecy-detail-text col-sm">Submitted Date</p>
                <p className="prophecy-detail-text col-sm">16 Dec 2022</p>
              </div>
              <div className="prophecy-detail-text-wrapper row ">
                <p className="prophecy-detail-text col-sm">Submitted by</p>
                <p className="prophecy-detail-text col-sm">SuperAdmin</p>
              </div>
            </div>
          </div>
          <h2 className="text-dark">Related Articles</h2>
          <div className="prophecy-detail-related">
            <ul className="prophecy-detail-related-items">
              {data.map((item, index) => (
                <li
                  key={index}
                  className="prophecy-detail-related-list d-flex p-2"
                >
                  <img src={item.url} alt={item.title} />
                  <div className="prophecy-detail-related-wrapper d-flex flex-column text-dark">
                    <p className="prophecy-detail-related-title text-dark">
                      {item.title}
                    </p>
                    <p className="prophecy-detail-related-desc text-dark">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="prophecy-sidebar d-flex flex-column ">
          <p className="text-dark">Search</p>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Type here ............."
          />
          <p className="text-dark">Related Search</p>
          <ul className="prophecy-sidebar-related-items">
            {data.map((item, index) => (
              <li
                key={index}
                className="prophecy-sidebar-related-list d-flex p-2"
              >
                <img src={item.url} alt={item.title} />
                <div className="prophecy-sidebar-related-wrapper d-flex flex-column text-dark">
                  <p className="prophecy-sidebar-related-title text-dark">
                    {item.title}
                  </p>
                  <p className="prophecy-sidebar-related-desc text-dark">
                    by Joyoboyo
                  </p>
                  <p className="prophecy-sidebar-related-desc text-dark">
                    Counting Down
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Footer />
    </>
  );
}
