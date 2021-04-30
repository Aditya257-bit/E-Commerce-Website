import react from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
    return (
        <div>
            <div style={{width: "100%", background: "#004080", color: "#fff"}}>
                <div className="container-fluid pl-5 pb-1">
                    <span className="pt-4 pb-0 d-block mb-0 h1" style={{fontSize: "40px", lineHeight:"17px"}}>Quickie</span>
                    <small className="ml-5 mt-0 pt-0 pl-5 pb-5">Apps</small>
                </div>
            </div>
        </div>

    )
}

export default Navbar;