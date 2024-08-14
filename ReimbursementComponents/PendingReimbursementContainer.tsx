import axios, { AxiosResponse } from "axios"
import { useEffect, useState } from "react"
import { Reimbursement } from "./Reimbursement"
import { PendingReimbursement } from "./PendingReimbursement"
import { ReimbursementInterface } from "../../interfaces/ReimbursementInterface"
import { useNavigate } from "react-router-dom"


 

export const PendingReimbursementContainer: React.FC = () => {
 
    //We could have stored a base URL here for cleaner requesting
    //const baseUrl = "http://localhost:8080/cars" 

    //we'll store state that consists of an Array of CarInterface objects

    //for pending reimbursements
    const [pendingreimbursements, setPendingReimbursements] = useState<ReimbursementInterface[]>([]) //start with empty array

    //Define useNavigate to navigate around via our buttons
    const navigate = useNavigate()

    //I want to get all car when the component renders, so we'll use useEffect
    useEffect(() => {
        getPendingReimbursements()
    }, []) //this triggers on component load   


        // GET request to server to get only pending reimbursements
        const getPendingReimbursements = async () => {
            try {
                const response: AxiosResponse<ReimbursementInterface[]> = await axios.get("http://localhost:8080/Reimbursements/pending");
                setPendingReimbursements(response.data);
                console.log("Pending reimbursements:", response.data);
            } catch (error) {
                console.error("Error fetching pending reimbursements:", error);
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
                
                
        </div>

            {/* Sending the entire cars array to get rendered in the Car component table*/}

            <Reimbursement reimbursements ={pendingreimbursements} />


            {/*If you need to render multiple elements in map(), they need to be in a <div> */}

        </div>
    )
}