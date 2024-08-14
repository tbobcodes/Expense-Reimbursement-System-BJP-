import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Define the interfaces
export interface UserInterface {
    userId: number;
}

export interface ReimbursementInterface {
    amount: number;
    description: string;
    status: string;
    user: UserInterface;
}

export const ResolveReimbursement: React.FC = () => {
    // Set state for reimbursement input
    const [reimbursement, setReimbursement] = useState<ReimbursementInterface>({
        amount: 0,
        description: "",
        status: "",
        user: {
            userId: 0,
        },
    });

    // UseNavigate to navigate after submission
    const navigate = useNavigate();

    // Function to store the user input values
    const storeValues = (input: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = input.target;

        // Update state based on input field name
        if (name === "userId") {
            setReimbursement((prevReimbursement) => ({
                ...prevReimbursement,
                user: {
                    ...prevReimbursement.user,
                    [name]: Number(value),
                },
            }));
        } else {
            setReimbursement((prevReimbursement) => ({
                ...prevReimbursement,
                [name]: name === "amount" ? Number(value) : value,
            }));
        }
    };

    // Function to send a POST request with the reimbursement state data to resolve a reimbursement in the backend
    const resolveReimbursement = async () => {
        try {
            const response = await axios.post("http://localhost:8080/Reimbursements", reimbursement);
            console.log(response.data);
            alert(`Reimbursement was created for User ID: ${reimbursement.user.userId}`);
            navigate("/reimbursements"); // Navigate to reimbursements after successful submission
        } catch (error: any) {
            alert("Reimbursement resolution failed! Error message: " + error.message);
            // Use backend error message if available
        }
    };

    return (
        <div>
            <div className="text-container">
                <h3>Resolve Reimbursement!</h3>

                <div className="input-container">
                    <input type="number" placeholder="Amount" name="amount" onChange={storeValues} />
                </div>
                <div className="input-container">
                    <input type="text" placeholder="Description" name="description" onChange={storeValues} />
                </div>
                <div className="input-container">
                    <input type="text" placeholder="Status" name="status" onChange={storeValues} />
                </div>
                <div className="input-container">
                    <input type="number" placeholder="User Id" name="userId" onChange={storeValues} />
                </div>

                <button className="login-button" onClick={resolveReimbursement}>Submit</button>
                <button className="login-button" onClick={() => navigate("/reimbursements")}>Back</button>
            </div>
        </div>
    );
};
