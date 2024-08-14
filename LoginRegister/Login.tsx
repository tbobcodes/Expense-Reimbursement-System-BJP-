import { useNavigate } from "react-router-dom"
import "./Login.css" 
import { useState } from "react"


export const Login: React.FC = () => {

    //defining a state object for our user data
    const[user, setUser] = useState({
        username:"",
        password:""
    })

    //we need a useNavigate hook to allow us to navigate between components... no more manual URL changes!
    const navigate = useNavigate()

    //function to store input box values
    const storeValues = (input:any) => {
 
        //if the "username" input changed, set the value of username in the user state object
 
        if(input.target.name === "username"){
            setUser((user) => ({...user, username:input.target.value}))
        } else {
            setUser((user) => ({...user, password:input.target.value}))
        }

        //rememeber the "..." is known as the "spread operator"
        //it SPREADS across an entire object so we can do things like send a whole object to a child component
        //or in this case, we're spreading for only the useState hook so we change individual values
 
    }

    const login = async () => {

        //TODO: gather username and password from state, and send a POST to the java server

        //TODO: We should validate user input here AND on the backend 

            //use our useNavigate hook to switch views to the Car Container Component
            navigate("/Users")

    }


    return(
       
            <div className="login">
            <div className="text-container">
                <h1>Welcome to the Reimbursement Application</h1>
                <h3>Log in view and modify reimbursements</h3>

                <div className="input-container">
                    <input type="text" placeholder="username" name="username" onChange={storeValues}/>
                </div>

                <div className="input-container">
                    <input type="password" placeholder="password" name="password" onChange={storeValues}/>
                </div>

                <button className="login-button" onClick={login}>Login</button>
                <button className="login-button" onClick={() => navigate("/register")}>Create Account</button>
            </div>

        </div>
      
        
 
    )

}