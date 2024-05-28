import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <div className="navBar">
                <div className="headingText">
                    <div className={'tabs'}>
                        <Typography variant={'h6'}> <Link to="/">Movies</Link> </Typography>
                        <Typography variant={'h6'}><Link to="/favourite">Favourite</Link></Typography>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Navbar;