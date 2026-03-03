import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link" to="/">
                {props.item1 ? props.item1.toUpperCase() : null}
              </Link>
              <Link className="nav-link" to="/text-util">
                {props.item2 ? props.item2.toUpperCase() : null}
              </Link>
              <Link className="nav-link" to="/about-table">
                {props.item3 ? props.item3.toUpperCase() : null}
              </Link>
            </div>
          </div>
        </div>

        {/* Toggle switch for dark/light mode */}
        <div className="form-check form-switch" onClick={props.switchMode}>
          <input
            className="form-check-input"
            type="checkbox"
            id="flexSwitchCheckDefault"
            aria-label="Toggle dark/light mode"
          />
          <label
            className={`form-check-label ${props.mode === 'light' ? 'text-dark' : 'text-white'}`}
            htmlFor="flexSwitchCheckDefault"
          >
            <span>
              {props.mode === 'light' ? 'Enable Dark Mode' : 'Enable Light Mode'}
            </span>
          </label>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
