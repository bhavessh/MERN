// import "./Register.css";
// import { useState } from "react";
// export default function Register(){
//     const [user,setUser]=useState({});
//     const handleSubmit = ()=>{

//         console.log(user)
//     }
//     return (
//         <div className="App-Register-Row">
//             <div style={{ backgroundColor: "white"}}>
//             <h2>Registration Form</h2>
//             <p>
//                 <input type="text"
//                 onChange={(e) => setUser({...user,firstName: e.target.value})} 
//                 placeholder="enter First name"/>
//             </p>
//             <p>
//                 <input type="text"
//                 onChange={(e) => setUser({...user,lastName: e.target.value})}
//                 placeholder="enter Last name"/>
//             </p>
//             <p>
//                 <input type="text"
//                 onChange={(e) => setUser({...user,email: e.target.value})}
//                 placeholder="enter email address"/>
//             </p>
//             <p>
//                 <input type="text"
//                 onChange={(e) => setUser({...user,password: e.target.value})}
//                 placeholder="enter password"/>
//             </p>
//             <p><button>Submit</button></p>
//         </div>
//         </div>
//     )
// }



import "./Register.css";
import { useRef } from "react";
export default function Register(){
    const firstName=useRef();
    const lastName=useRef();
    const email=useRef();
    const password=useRef();
    const handleSubmit = () => {
        const data = {
        firstName: firstName.current.value,
        lastName: lastName.current.value,
        email: email.current.value,
        password: password.current.value
        };
        console.log("form Data:",data)
    };
    return (
        <div className="App-Register-Row">
            <div style={{ backgroundColor: "white"}}>
            <h2>Registration Form</h2>
            <p>
                <input type="text"
                placeholder="enter First name"
                ref={firstName}/>
            </p>
            <p>
                <input type="text"
                placeholder="enter Last name"
                ref={lastName}/>
            </p>
            <p>
                <input type="text"
                placeholder="enter email address"
                ref={email}/>
            </p>
            <p>
                <input type="text"
                placeholder="enter password" 
                ref={password}/>
            </p>
            <p><button onClick={handleSubmit}>SUBMIT</button></p>
        </div>
        </div>
    )
}