/* eslint-disable jsx-a11y/anchor-is-valid */
import { BrowserRouter, Link } from "react-router-dom";

function Assignment3() {
  return (
    // <div>
    //   <BrowserRouter>
    //     <nav className="navbar navbar-expand-sm navbar-light bg-light content-center">
    //       <a className="navbar-brand" href="#">
    //         ANN HANDLY{" "}
    //       </a>
    //       <div className="collapse navbar-collapse " id="navbarNav">
    //         <ul className="navbar-nav ">
    //           <li className="nav-item ">
    //             <Link exact to="/">
    //               ABOUT <span className="sr-only">(current)</span>
    //             </Link>
    //           </li>
    //           <li className="nav-item">
    //             <Link to="/about"> SPEAKING </Link>
    //           </li>
    //           <li className="nav-item">
    //             <Link to="/contact"> BOOKS </Link>
    //           </li>
    //           <li className="nav-item">
    //             <Link to="/emp"> CONTACT </Link>
    //           </li>
    //         </ul>
    //       </div>
    //     </nav>
    //   </BrowserRouter>
    // </div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
    </ul>
  </div>
</nav>
  );
}
export default Assignment3;
