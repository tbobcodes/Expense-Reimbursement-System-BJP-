import { FormControl } from "react-bootstrap"

export const AddCar: React.FC = () => {




    return(
        <div className="container">
            <h3>Enter New Car Info:</h3>

            <FormControl type="text" placeholder="Enter Make" name="make"></FormControl>
            <FormControl type="text" placeholder="Enter Model" name="model"></FormControl>
        </div>
    )
}