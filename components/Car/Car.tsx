import { Button, Table } from "react-bootstrap"
import { CarInterface } from "../../interfaces/CarInterface"
//Note: we took out the CSS import, as we're using bootstrap
import { useEffect } from "react"


//We're destructuring the cars array as props in a different way here (in the generic)
//this will allow us to easily access the Array in the .map() function
export const Car: React.FC<{cars:CarInterface[]}> = ({cars}) => {

    //just to see the data in the console
    useEffect(()=>{
        console.log(cars)
    }, [])


    return(
        <div className="container">   

            <h3>Your Cars:</h3>

            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Make</th>
                        <th>Model</th>
                        <th>AWD</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    {cars.map((car, index) => (
                        <tr key={car.carId}>
                            <td>{car.carId}</td>
                            <td>{car.make}</td>
                            <td>{car.model}</td>
                            <td>{car.fourWheelDrive}</td>
                            <td>
                                <Button variant="outline-info">Update</Button>
                                <Button variant="outline-danger">Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>



        </div>
    )

}