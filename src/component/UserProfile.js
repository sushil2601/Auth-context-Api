import { useContext } from "react";
import UserAuth from "../context/UserAuth";

const UserProfile = () => {
  const { isLoggedIn, onLogin, onLogout } = useContext(UserAuth);

  return (
    <div>
      <h2>User Profile</h2>
      {isLoggedIn ? (
        <div>
          <p>Welcome,User!</p>
          <button onClick={onLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <p>Please log in ...</p>
          <button onClick={onLogin}>Login</button>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
