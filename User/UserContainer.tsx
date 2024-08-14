import axios, { AxiosResponse } from "axios"
import { useEffect, useState } from "react"
import { User } from "./User"
import { UserInterface } from "../../interfaces/UserInterface"
import "./UserContainer.css"
import { useNavigate } from "react-router-dom"


export const UserContainer: React.FC = () => {

    //We could have stored a base URL here for cleaner requesting
    //const baseUrl = "http://localhost:8080/cars" 

    //we'll store state that consists of an Array of CarInterface objects
    const [users, setUsers] = useState<UserInterface[]>([]) //start with empty array

    //Define useNavigate to navigate around via our buttons
    const navigate = useNavigate()

    //I want to get all car when the component renders, so we'll use useEffect
    useEffect(() => {
        getAllUsers()
    }, []) //this triggers on component load 

    //GET request to server to get all car
    const getAllUsers = async () => {

        //our GET request 
        //TODO: send withCredentials to confirm the user is logged in)
        const response = await axios.get("http://localhost:8080/Users")

        //populate the car state
        setUsers(response.data)

        console.log(response.data)

    }

    // Function to handle user deletion
    const handleDelete = async (userId: number) => {
        try {
            await axios.delete(`http://localhost:8080/Users/${userId}`);
            console.log(`User with ID ${userId} deleted successfully.`);
            // Trigger a page reload to fetch the updated list of reimbursements
            window.location.reload();
        } catch (error) {
            console.error(`Failed to delete user with ID ${userId}.`, error);
        }
    };

    return(
        <div className="collection-container">
            <div>Manager View</div>

        {/* These would def look better as a navbar - bootstrap has those! */}
        <div>
            <button onClick={() => navigate("/")}>Back to Login</button>
            <button onClick={() => navigate("/Users")}>See Users</button>
            
        </div>

        <div className="sub-container">
            <button onClick={() => navigate("/addUser")}>Add New User</button>
            <button onClick={() => navigate("/Reimbursements")}>See Reimbursements</button>
            <button onClick={() => navigate("/pendingreimbursements")}>See All Pending Reimbursements</button>
            <button onClick={() => navigate("/resolveuser")}>Resolve a Reimbursements</button>
        </div>

            {/* Sending the entire cars array to get rendered in the Car component table*/}
            <User users={users} onDelete={handleDelete} />




            {/*If you need to render multiple elements in map(), they need to be in a <div> */}

        </div>
    )
}