import React, {useEffect,useState} from 'react';
import app from './firebase';

const styles={
    position : 'absolute',
    top:'50%',
    left:'50%',
    transform:'translate(-50%,-50%)'
}

export const AuthContext =React.createContext();
console.log(AuthContext)
export const AuthProvider = ({children}) =>{
    const [currentUser,setCurrentUser]= useState(null);
    const [pending, setPending] = useState(true);

    useEffect(()=>{
        app.auth().onAuthStateChanged((user) => {
            setCurrentUser(user)
            setPending(false)
          });
   },[]);
   if(pending){
    return <h2 style={styles}>Logging in....</h2>
  }
    return (
      
<AuthContext.Provider
value={{currentUser}}>{children}</AuthContext.Provider>

    );
};