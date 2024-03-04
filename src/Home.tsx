import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Home = () => {

    return (
        <div className="h-100 d-flex flex-column">
            <div className="header-container">
                <Header />
            </div>
            <div className="flex-grow-1">
                <Outlet />
            </div>
            <div className="header-container">
                <Footer />
            </div>
        </div>
    )
}

export default Home