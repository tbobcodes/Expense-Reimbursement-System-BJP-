import axios, { AxiosResponse } from "axios"
import { useEffect, useState } from "react"
import { Car } from "./Car"
import { CarInterface } from "../../interfaces/CarInterface"
import "./CarContainer.css"
import { useNavigate } from "react-router-dom"


export const CarContainer: React.FC = () => {

    //We could have stored a base URL here for cleaner requesting
    //const baseUrl = "http://localhost:8080/cars" 

    //we'll store state that consists of an Array of CarInterface objects
    const [cars, setCars] = useState<CarInterface[]>([]) //start with empty array

    //Define useNavigate to navigate around via our buttons
    const navigate = useNavigate()

    //I want to get all car when the component renders, so we'll use useEffect
    useEffect(() => {
        getAllCars()
    }, []) //this triggers on component load 

    //GET request to server to get all car
    const getAllCars = async () => {

        //our GET request 
        //TODO: send withCredentials to confirm the user is logged in)
        const response = await axios.get("http://localhost:8080/Cars")

        //populate the car state
        setCars(response.data)

        console.log(response.data)

    }

    return(
        <div className="collection-container">

        {/* These would def look better as a navbar - bootstrap has those! */}
        <div>
            <button onClick={() => navigate("/")}>Back to Login</button>
            <button onClick={() => navigate("/addcar")}>Add New Car</button>
            <button>Profile</button>
        </div>

            {/* Sending the entire cars array to get rendered in the Car component table*/}
            <Car cars = {cars}></Car>


            {/*If you need to render multiple elements in map(), they need to be in a <div> */}

        </div>
    )
}