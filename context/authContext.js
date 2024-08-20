import  React,{createContext,useState} from 'react';
const  AuthContext = createContext({})


const AuthProvider=({children})=>{
   
    const [token,setToken]=useState(null);
    const [userdata,setUserdata]=useState(null);
 
    const updateToken =(newToken)=>{
        setToken(newToken);
    }
    const updateUserdata =(newUserdata)=>{
        setUserdata(newUserdata);
    }

    return (
        <AuthContext.Provider value={{token,userdata,updateToken,updateUserdata }}>
            {children}
        </AuthContext.Provider>
    )
}
export{AuthContext,AuthProvider}