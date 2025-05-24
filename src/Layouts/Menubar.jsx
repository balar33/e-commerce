import "./layouts.css";

export const Menubar = () => {
  return (
    <div class="container-fluid">
      <div class="row py-3">
        <div class="d-flex  justify-content-center justify-content-sm-between align-items-center">
          <nav class="main-menu d-flex navbar navbar-expand-lg">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              class="offcanvas offcanvas-end"
              tabindex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div class="offcanvas-header justify-content-center">
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div class="offcanvas-body">
                <select class="filter-categories border-0 mb-0 me-5">
                  <option>Shop by Departments</option>
                  <option>Groceries</option>
                  <option>Drinks</option>
                  <option>Chocolates</option>
                </select>
                <ul class="navbar-nav justify-content-end menu-list list-unstyled d-flex gap-md-3 mb-0">
                  <li class="nav-item active">
                    <a href="#women" class="nav-link">
                      Women
                    </a>
                  </li>
                  <li class="nav-item dropdown">
                    <a href="#men" class="nav-link">
                      Men
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <div className="dropdown custom-dropdown">
                      <span className="nav-link dropdown-toggle">Dropdown</span>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Another action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Something else here
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li class="nav-item">
                    <a href="#kids" class="nav-link">
                      Kids
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#accessories" class="nav-link">
                      Accessories
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#brand" class="nav-link">
                      Brand
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#sale" class="nav-link">
                      Sale
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#blog" class="nav-link">
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};
