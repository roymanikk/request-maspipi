import React from "react";

import Header from "parts/Header";
import Footer from "parts/Footer";

import flagID from "assets/images/flag-ID.png";
import flagJP from "assets/images/flag-JP.png";
import flagKR from "assets/images/flag-KR.png";

export default function ProphecyList() {
  return (
    <>
      <Header />
      <div className="prophecy-list container d-flex ">
        <div className="prophecy-list-sidebar d-flex flex-column ">
          <div className="prophecy-list-search mb-3">Search</div>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Type here ............."
          />
          <div className="prophecy-list-filter mt-3 mb-3">Filter</div>
          <input
            className="mb-2"
            type="text"
            name="search"
            id="filter-counting"
            placeholder="Type here ............."
          />
          <input
            type="text"
            name="search"
            id="filter-counting"
            placeholder="Type here ............."
          />
          <div className="prophecy-list-database mt-3 mb-3">Database</div>
          <p>Total Propechies</p>
          <p>100.000.000</p>
          <p>Still Counting Down</p>
          <p>100.000.000</p>
          <p>Proven Wrong</p>
          <p>100.000.000</p>
          <div className="prophecy-list-country-propechies mt-3  mb-3">
            Country Propechies
          </div>
          <p>
            <span>
              <img className="mr-2" src={flagID} alt="flag-ID" />
            </span>
            Indonesia
          </p>
          <p>100.000.000</p>
          <p>
            <span>
              <img className="mr-2" src={flagJP} alt="flag-JP" />
            </span>
            Japan
          </p>
          <p>100.000.000</p>
          <p>
            <span>
              <img className="mr-2" src={flagKR} alt="flag-KR" />
            </span>
            Korea
          </p>
          <p>100.000.000</p>
        </div>
        <div className="prophecy-list-table-container d-flex flex-column">
          <table className="prophecy-list-table table">
            <thead>
              <tr>
                <th scope="col">Prophecy Name</th>
                <th scope="col">Fortune Teller</th>
                <th scope="col">End of World Date</th>
                <th scope="col">Count Down</th>
                <th scope="col">Submitted by</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>The Mayan Prophecy</td>
                <td>Mayan Tribe</td>
                <td>12 Dec 2022</td>
                <td>
                  1Y, 2M, 3D <span />
                  <p>23h, 60m, 60s</p>
                </td>
                <td>by SuperAdmin</td>
              </tr>
              <tr>
                <td>Kiamat Kubro</td>
                <td>Jayabaya</td>
                <td>12 Dec 2022</td>
                <td>
                  1Y, 2M, 3D <span />
                  <p>23h, 60m, 60s</p>
                </td>
                <td>by SuperAdmin</td>
              </tr>
              <tr>
                <td>Kiamat Kubro</td>
                <td>Jayabaya</td>
                <td>12 Dec 2022</td>
                <td>
                  1Y, 2M, 3D <span />
                  <p>23h, 60m, 60s</p>
                </td>
                <td>by SuperAdmin</td>
              </tr>
              <tr>
                <td>Kiamat Kubro</td>
                <td>Jayabaya</td>
                <td>12 Dec 2022</td>
                <td>
                  1Y, 2M, 3D <span />
                  <p>23h, 60m, 60s</p>
                </td>
                <td>by SuperAdmin</td>
              </tr>
              <tr>
                <td>Kiamat Kubro</td>
                <td>Jayabaya</td>
                <td>12 Dec 2022</td>
                <td>
                  1Y, 2M, 3D <span />
                  <p>23h, 60m, 60s</p>
                </td>
                <td>by SuperAdmin</td>
              </tr>
              <tr>
                <td>Kiamat Kubro</td>
                <td>Jayabaya</td>
                <td>12 Dec 2022</td>
                <td>
                  1Y, 2M, 3D <span />
                  <p>23h, 60m, 60s</p>
                </td>
                <td>by SuperAdmin</td>
              </tr>
              <tr>
                <td>Kiamat Kubro</td>
                <td>Jayabaya</td>
                <td>12 Dec 2022</td>
                <td>
                  1Y, 2M, 3D <span />
                  <p>23h, 60m, 60s</p>
                </td>
                <td>by SuperAdmin</td>
              </tr>
              <tr>
                <td>Kiamat Kubro</td>
                <td>Jayabaya</td>
                <td>12 Dec 2022</td>
                <td>
                  1Y, 2M, 3D <span />
                  <p>23h, 60m, 60s</p>
                </td>
                <td>by SuperAdmin</td>
              </tr>
              <tr>
                <td>Kiamat Kubro</td>
                <td>Jayabaya</td>
                <td>12 Dec 2022</td>
                <td>
                  1Y, 2M, 3D <span />
                  <p>23h, 60m, 60s</p>
                </td>
                <td>by SuperAdmin</td>
              </tr>
              <tr>
                <td>Kiamat Kubro</td>
                <td>Jayabaya</td>
                <td>12 Dec 2022</td>
                <td>
                  1Y, 2M, 3D <span />
                  <p>23h, 60m, 60s</p>
                </td>
                <td>by SuperAdmin</td>
              </tr>
            </tbody>
          </table>
          <nav
            className="align-self-center "
            aria-label="Page navigation example"
          >
            <ul className="pagination d-flex  align-items-center">
              <li className="page-item mr-2">
                <a className="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">{"<"}</span>
                  <span className="sr-only">Previous</span>
                </a>
              </li>
              <li className="page-item  mr-2 ml-2 ">
                <a className="page-link bg-dark" id="page-number" href="#">
                  1
                </a>
              </li>
              <li className="page-item mr-2 ml-2">
                <a className="page-link bg-dark" id="page-number" href="#">
                  2
                </a>
              </li>
              <li className="page-item mr-2 ml-2">
                <a className="page-link bg-dark" id="page-number" href="#">
                  3
                </a>
              </li>
              <li className="page-item ml-2">
                <a
                  className="page-link font-color-black"
                  href="#"
                  aria-label="Next"
                >
                  <span aria-hidden="true">{">"}</span>
                  <span className="sr-only">Next</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <Footer />
    </>
  );
}
