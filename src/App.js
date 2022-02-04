import logo from "./logo.svg";
import "./App.css";
import Profile from "./profile/Profile.js";

function App() {
    return (
        <div className="App">
            <Profile
                fullName="Ahmed Fatnassi"
                bio="A 19 years old student"
                profession="Student"
            >
                <img src="./Photo.jpg" width={140} />
            </Profile>
        </div>
    );
}

export default App;
