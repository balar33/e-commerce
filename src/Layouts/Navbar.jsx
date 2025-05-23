import logo from "../assets/images/logo.png";
import "./layouts.css";

export const Navbar = () => {
  return (
    <div class="header-bottom">
      <div class="container-fluid">
        <div class="d-none d-lg-block">
          <nav class="menu-area d-flex align-items-center justify-content-between">
            <div class="logo">
              <a href="#">
                <img src={logo} alt="logo" class="img-fluid" />
              </a>
            </div>
            <div class="search-bar">
              <input type="text" placeholder="Search for product..." />
              <div class="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20.414"
                  height="20.414"
                  viewBox="0 0 20.414 20.414"
                >
                  <g
                    id="Search_Icon"
                    data-name="Search Icon"
                    transform="translate(1 1)"
                  >
                    <ellipse
                      id="Ellipse_1"
                      data-name="Ellipse 1"
                      cx="8.158"
                      cy="8"
                      rx="8.158"
                      ry="8"
                      fill="none"
                      stroke="#1a2224"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    />
                    <line
                      id="Line_4"
                      data-name="Line 4"
                      x1="3.569"
                      y1="3.5"
                      transform="translate(14.431 14.5)"
                      fill="none"
                      stroke="#1a2224"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    />
                  </g>
                </svg>
              </div>
            </div>
            <div class="menu-icon ">
              <ul className="d-flex justify-content-end list-unstyled m-0">
                <li>
                  <a href="wishlist.html">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="20"
                      viewBox="0 0 22 20"
                    >
                      <g id="Heart" transform="translate(1 1)">
                        <path
                          id="Heart-2"
                          data-name="Heart"
                          d="M20.007,4.59a5.148,5.148,0,0,0-7.444,0L11.548,5.636,10.534,4.59a5.149,5.149,0,0,0-7.444,0,5.555,5.555,0,0,0,0,7.681L4.1,13.317,11.548,21l7.444-7.681,1.014-1.047a5.553,5.553,0,0,0,0-7.681Z"
                          transform="translate(-1.549 -2.998)"
                          fill="#fff"
                          stroke="#1a2224"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                        />
                      </g>
                    </svg>
                    <span class="heart">3</span>
                  </a>
                </li>
                <li>
                  <a href="cart.html">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                    >
                      <g id="Icon" transform="translate(-1524 -89)">
                        <ellipse
                          id="Ellipse_2"
                          data-name="Ellipse 2"
                          cx="0.909"
                          cy="0.952"
                          rx="0.909"
                          ry="0.952"
                          transform="translate(1531.364 108.095)"
                          fill="none"
                          stroke="#1a2224"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                        />
                        <ellipse
                          id="Ellipse_3"
                          data-name="Ellipse 3"
                          cx="0.909"
                          cy="0.952"
                          rx="0.909"
                          ry="0.952"
                          transform="translate(1541.364 108.095)"
                          fill="none"
                          stroke="#1a2224"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                        />
                        <path
                          id="Path_3"
                          data-name="Path 3"
                          d="M1,1H4.636L7.073,13.752a1.84,1.84,0,0,0,1.818,1.533h8.836a1.84,1.84,0,0,0,1.818-1.533L21,5.762H5.545"
                          transform="translate(1524 89)"
                          fill="none"
                          stroke="#1a2224"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                        />
                      </g>
                    </svg>
                    <span class="cart">3</span>
                  </a>
                </li>
                <li>
                  <a href="account.html">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="20"
                      viewBox="0 0 18 20"
                    >
                      <g id="Account" transform="translate(1 1)">
                        <path
                          id="Path_86"
                          data-name="Path 86"
                          d="M20,21V19a4,4,0,0,0-4-4H8a4,4,0,0,0-4,4v2"
                          transform="translate(-4 -3)"
                          fill="none"
                          stroke="#000"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                        />
                        <circle
                          id="Ellipse_9"
                          data-name="Ellipse 9"
                          cx="4"
                          cy="4"
                          r="4"
                          transform="translate(4)"
                          fill="#fff"
                          stroke="#000"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                        />
                      </g>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        {/* <!-- Mobile Menu --> */}
        <aside class="d-lg-none">
          <div class="mobile-nav d-flex align-items-center justify-content-between">
            <div class="logo">
              <a href="#">
                <img src={logo} alt="logo" />
              </a>
            </div>
            <div class="search-bar">
              <input type="text" placeholder="Search for product..." />
              <div class="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20.414"
                  height="20.414"
                  viewBox="0 0 20.414 20.414"
                >
                  <g
                    id="Search_Icon"
                    data-name="Search Icon"
                    transform="translate(1 1)"
                  >
                    <ellipse
                      id="Ellipse_1"
                      data-name="Ellipse 1"
                      cx="8.158"
                      cy="8"
                      rx="8.158"
                      ry="8"
                      fill="none"
                      stroke="#1a2224"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    />
                    <line
                      id="Line_4"
                      data-name="Line 4"
                      x1="3.569"
                      y1="3.5"
                      transform="translate(14.431 14.5)"
                      fill="none"
                      stroke="#1a2224"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    />
                  </g>
                </svg>
              </div>
            </div>
            <div class="menu-icon">
              <ul className="d-flex justify-content-end list-unstyled m-0">
                <li>
                  <a href="wishlist.html">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="20"
                      viewBox="0 0 22 20"
                    >
                      <g id="Heart" transform="translate(1 1)">
                        <path
                          id="Heart-2"
                          data-name="Heart"
                          d="M20.007,4.59a5.148,5.148,0,0,0-7.444,0L11.548,5.636,10.534,4.59a5.149,5.149,0,0,0-7.444,0,5.555,5.555,0,0,0,0,7.681L4.1,13.317,11.548,21l7.444-7.681,1.014-1.047a5.553,5.553,0,0,0,0-7.681Z"
                          transform="translate(-1.549 -2.998)"
                          fill="#fff"
                          stroke="#1a2224"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                        />
                      </g>
                    </svg>
                    <span class="heart">3</span>
                  </a>
                </li>
                <li>
                  <a href="cart.html">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                    >
                      <g id="Icon" transform="translate(-1524 -89)">
                        <ellipse
                          id="Ellipse_2"
                          data-name="Ellipse 2"
                          cx="0.909"
                          cy="0.952"
                          rx="0.909"
                          ry="0.952"
                          transform="translate(1531.364 108.095)"
                          fill="none"
                          stroke="#1a2224"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                        />
                        <ellipse
                          id="Ellipse_3"
                          data-name="Ellipse 3"
                          cx="0.909"
                          cy="0.952"
                          rx="0.909"
                          ry="0.952"
                          transform="translate(1541.364 108.095)"
                          fill="none"
                          stroke="#1a2224"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                        />
                        <path
                          id="Path_3"
                          data-name="Path 3"
                          d="M1,1H4.636L7.073,13.752a1.84,1.84,0,0,0,1.818,1.533h8.836a1.84,1.84,0,0,0,1.818-1.533L21,5.762H5.545"
                          transform="translate(1524 89)"
                          fill="none"
                          stroke="#1a2224"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                        />
                      </g>
                    </svg>
                    <span class="cart">3</span>
                  </a>
                </li>
                <li>
                  <a href="account.html">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="20"
                      viewBox="0 0 18 20"
                    >
                      <g id="Account" transform="translate(1 1)">
                        <path
                          id="Path_86"
                          data-name="Path 86"
                          d="M20,21V19a4,4,0,0,0-4-4H8a4,4,0,0,0-4,4v2"
                          transform="translate(-4 -3)"
                          fill="none"
                          stroke="#000"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                        />
                        <circle
                          id="Ellipse_9"
                          data-name="Ellipse 9"
                          cx="4"
                          cy="4"
                          r="4"
                          transform="translate(4)"
                          fill="#fff"
                          stroke="#000"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                        />
                      </g>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};
