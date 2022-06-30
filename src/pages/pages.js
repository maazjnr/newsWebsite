import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import EnterTainMent from "./Entertainment";
import Sport from "./Sport";
import Health from "./Health";
import Business from "./Business";
import Science from "./Science";
import Technology from "./Techology";


const Pages = () => {

    return(
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/entertainment" element={<EnterTainMent />} />
                <Route path="/sport" element={<Sport />} />
                <Route path="/health" element={<Health />} />
                <Route path="/business" element={<Business />} />
                <Route path="/science" element={<Science />} />
                <Route path="/technology" element={<Technology />} />
            </Routes>
        </div>
    )
}

export default Pages;