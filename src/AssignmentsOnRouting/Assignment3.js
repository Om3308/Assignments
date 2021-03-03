/* eslint-disable jsx-a11y/anchor-is-valid */
import { BrowserRouter, Link } from "react-router-dom";

function Assignment3() {
  return (
    <div>
      <BrowserRouter>
        <nav className="navbar navbar-expand-sm navbar-light bg-light content-center">
          <a className="navbar-brand" href="#">
            ANN HANDLY{" "}
          </a>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav ">
              <li className="nav-item ">
                <Link exact to="/">
                  ABOUT <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about"> SPEAKING </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact"> BOOKS </Link>
              </li>
              <li className="nav-item">
                <Link to="/emp"> CONTACT </Link>
              </li>
            </ul>
          </div>
        </nav>
      </BrowserRouter>
    </div>
  );
}
export default Assignment3;
