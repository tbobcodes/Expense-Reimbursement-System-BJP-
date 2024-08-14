import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Assuming you will change this to a proper UserInterface later
interface CreateUserInterface {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export const AddUser: React.FC = () => {
    // Set state for user input
    const [user, setUser] = useState<CreateUserInterface>({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });

    // UseNavigate to navigate after registration
    const navigate = useNavigate();

    // Function to store the user input values
    const storeValues = (input: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = input.target;

        // Update state based on input field name
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    // Function to send a POST request with the user state data to register a user in the backend
    const register = async () => {
        try {
            const response = await axios.post("http://localhost:8080/Users", user);
            console.log(response.data);
            alert(`${response.data.firstName} ${response.data.lastName} was created!`);
            navigate("/users"); // Navigate back to login after successful registration
        } catch (error: any) {
            alert("Register failed! Error message: " + error.message);
            // Use backend error message if available
        }
    };

    return (
        <div>
            <div className="text-container">
                <h3>Create new user here!</h3>

                <div className="input-container">
                    <input type="text" placeholder="First Name" name="firstName" onChange={storeValues} />
                </div>
                <div className="input-container">
                    <input type="text" placeholder="Last Name" name="lastName" onChange={storeValues} />
                </div>
                <div className="input-container">
                    <input type="email" placeholder="Email" name="email" onChange={storeValues} />
                </div>
                <div className="input-container">
                    <input type="password" placeholder="Password" name="password" onChange={storeValues} />
                </div>

                <button className="login-button" onClick={register}>Submit</button>
                <button className="login-button" onClick={() => navigate("/")}>Back</button>
            </div>
        </div>
    );
};
