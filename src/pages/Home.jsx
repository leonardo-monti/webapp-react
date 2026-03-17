import axios from "axios"
import { useState,useEffect } from "react"
import { Link } from "react-router-dom"

function Home(){

const [movies,setMovies]=useState([])

useEffect(()=>{
    axios.get("http://localhost:3000/movies")
    .then(res=>{
        setMovies(res.data.movies)
    })
    .catch(err=>{
        console.error(err)
    })
},[])

return (
<div>
<h1>Movie List</h1>

{movies.map((movie) => (
  <div key={movie.id}>
    <Link to={`/movies/${movie.id}`}>
      <img
        src={`http://localhost:3000/images/${movie.image}`}
        alt={movie.title}
      />
      <h2>{movie.title}</h2>
    </Link>
  </div>
))}



</div>
)
}

export default Home