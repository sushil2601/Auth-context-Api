const {useContext,createContext,useState} from 'react'

export const UserAuth = createContext();

const AuthContext = ({children}) => {

  const [isLoggedIn,setIsLoggedIn] = useState(false);

  const handleLoggedIn = () =>{
    setIsLoggedIn(true)
  }

  const handleLogout = () =>{
    setIsLoggedIn(false)
  }

  return 
    <AuthContext.Provider value={{isLoggedIn,onLogin : handleLoggedIn, onLogout : handleLogout}}>
      <div>
        {children}
      </div>;
    </AuthContext.Provider>
};

export default AuthContext;
