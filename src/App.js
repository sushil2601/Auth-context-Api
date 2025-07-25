import "./styles.css";
import Home from "../component/Home";
import DashBoard from "../component/DashBoard";
import UserProfile from "../component/UserProfile";
import AuthContext from "../context/AuthContext";

export default function App() {
  return (
    <AuthContext>
      <div className="App">
        <h1>Context API</h1>
        <hr />
        <Home />
        <DashBoard />
        <UserProfile />
      </div>
    </AuthContext>
  );
}
