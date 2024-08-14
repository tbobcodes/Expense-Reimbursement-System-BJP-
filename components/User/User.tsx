import { Button, Table } from "react-bootstrap"
import { UserInterface } from "../../interfaces/UserInterface"
//Note: we took out the CSS import, as we're using bootstrap
import { useEffect } from "react"



interface UserProps {
    users: UserInterface[];
    onDelete?: (userId: number) => Promise<void>; // Optional onDelete prop
}
//We're destructuring the cars array as props in a different way here (in the generic)
//this will allow us to easily access the Array in the .map() function
export const User: React.FC<UserProps> = ({ users, onDelete }) => {

    //just to see the data in the console
    useEffect(()=>{
        console.log(users)
    }, [])

    


    return(
        <div className="container">   

            <h3>Your Users:</h3>

            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>email</th>
                        <th>password</th>
                        <th>role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={user.userId}>
                            <td>{user.userId}</td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.email}</td>
                            <td>{user.password}</td>
                            <td>{user.role}</td>
                            <td>
                                {onDelete && (
                                    <Button
                                        variant="outline-danger"
                                        onClick={() => onDelete(user.userId)}
                                    >
                                        Delete
                                    </Button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>



        </div>
    )

}