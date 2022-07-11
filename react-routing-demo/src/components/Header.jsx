import React from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className='header-container'>
      <div className="header-wrap">
        <div className="header-left-wrap">
          <Link style={{ display: 'flex', alignItems: 'center' }} to="/">
            <img
              style={{ width: "154px", height: "20px" }}
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
              alt="로고"
            />
          </Link>
          <ul>
            <li>
              <Link className="header-nav-item" to="/movie">
                영화
              </Link>
            </li>
            <li>
              <Link className="header-nav-item" to="/tv">
                TV 프로그램
              </Link>
            </li>
            <li>
              <Link className="header-nav-item" to="/person">
                인물
              </Link>
            </li>
            <li>
              <Link className="header-nav-item" to="/">
                More
              </Link>
            </li>
          </ul>
        </div>
        <div></div>
      </div>
    </div>
  );
}
