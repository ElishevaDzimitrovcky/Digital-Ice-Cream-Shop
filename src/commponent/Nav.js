import { Link } from "react-router-dom";
import logo1 from "../images/a/logo.png"
export default function Nav() {
    return (
        <div class="navbarotef">
      <ul class="nav nav-tabs nav-fill mb-3" id="ex1" role="tablist" style={{ "backgroundColor": 'rgb(50, 33, 126)', "color": 'white', "fontSize": "3vh" }}>
      <li class="nav-item" role="presentation">
          <img class="logo1" src={logo1} style={{"width":"5vw"}}/>
      </li>
      <li class="nav-item" role="presentation">
          <a class="nav-link" >
              <Link to="/">prodcts</Link>
          </a>
      </li>
      <li class="nav-item" role="presentation">
          <a class="nav-link">
              <Link to="/cart">cart</Link>
          </a>
      </li>
      <li class="nav-item" role="presentation">
          <a class="nav-link" >
              <Link to="/about">about</Link>
          </a>
      </li>
  </ul>
  </div>

    )
}
