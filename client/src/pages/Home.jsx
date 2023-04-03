import { useEffect, useState } from "react";

import Header from "../component/common/Header";
import { categoryMovies } from "../services/api";

const Home = () => {

    const [movies, setMovies] = useState([])

    useEffect( () => {
        const getData = async () => {
            let response = await categoryMovies();
            setMovies()
        }
    getData();
    }, [])
    return (
            <div><Header/></div>
    )
}

export default Home;