import Quiggylogo from "../Assets/quiggylogo.png"

function Navbar(){
    return(
        <div className="Navbar">
            <img src={Quiggylogo} alt="Quiggy, the #1 hospital food delivery app (not affiliated with Swiggy" height="100px"/>
        </div>
    )
}

export default Navbar;