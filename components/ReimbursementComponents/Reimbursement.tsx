import { Button, Table } from "react-bootstrap"
import { ReimbursementInterface } from "../../interfaces/ReimbursementInterface"
//Note: we took out the CSS import, as we're using bootstrap
import { useEffect } from "react"


//We're destructuring the cars array as props in a different way here (in the generic)
//this will allow us to easily access the Array in the .map() function
export const Reimbursement: React.FC<{reimbursements:ReimbursementInterface[]}> = ({reimbursements}) => {

    //just to see the data in the console
    useEffect(()=>{
        console.log(reimbursements)
    }, [])


    return(
        <div className="container">   

            <h3>Your Reimbursements:</h3>

            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>ReimbursementId</th>
                        <th>Amount</th>
                        <th>Description</th>
                        <th>status</th>
                        <th>UserID</th>
                    </tr>
                </thead>
                <tbody>
                    {reimbursements.map((reimbursement, index) => (
                        <tr>
                            <td>{reimbursement.reimbursementId}</td>
                            <td>{reimbursement.amount}</td>
                            <td>{reimbursement.description}</td>
                            <td>{reimbursement.status}</td>
                            <td>{reimbursement.userId}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>



        </div>
    )

}