import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/login.css";

function Login(){
    const navigate =useNavigate();

    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");

    const handleLogin =(e) =>{
        e.preventDefault();

        if (email&&password){
            localStorage.setItem("isLoggedIn","true");
            navigate("/home");
        }else{
            alert("Please fill all fields");
        }
    };

    return(
        <div className="login-container">

            <div className="login-box">
                <h1>Instagram</h1>
                <form onSubmit={handleLogin}>
                    <input 
                    type="email"
                    placeholder="Enter your Email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}/>

                    <input
                    type="password"
                    placeholder="Enter your Password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}/>

                    <button type="submit">
                        Log In
                    </button>

                    </form>
            </div>
        </div>
    )
}

export default Login;
