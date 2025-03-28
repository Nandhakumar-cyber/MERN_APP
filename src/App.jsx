import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GridView from "../src/Gridview.jsx";
import Todo from "./Todo";
import Navbar from "./Navbar";
import ProfileCard from "./profilecard.jsx"; // Corrected the casing to match the file name

const user = {
    name: 'Name :Nandha kumar',
    email: 'E-mail :cyber@example.com',
    address: 'Address :74 Kumaran Road, Tirupur, India',
    achievements: [
        'Completed 100+ projects in the last year',
        'Certified Full Stack Developer',
        'Published 5 technical articles',
        'Won Developer of the Year 2023',
    ],
    image: 'https://www.w3schools.com/w3images/avatar2.png',
};

function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                <Route path="/gridview" element={<GridView />} />
                    <Route path="/" element={<Todo />} />
                    <Route path="/navbar" element={<Navbar />} />
                    <Route
                        path="/profilecard"
                        element={
                            <ProfileCard
                                name={user.name}
                                email={user.email}
                                address={user.address}
                                achievements={user.achievements}
                                image={user.image}
                            />
                        }
                    />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;










