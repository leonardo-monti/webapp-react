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
    <div className="container mt-4">
      <h1 className="text-center mb-4">Movie List</h1>
      <div className="row">
        {movies.map((movie) => (
          <div key={movie.id} className="col mb-4">
            <div className="card h-100">
              <Link to={`/movies/${movie.id}`} className="text-decoration-none text-dark">
                <img
                  src={`http://localhost:3000/images/${movie.image}`}
                  className="card-img-top"
                  alt={movie.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{movie.title}</h5>
                  <p className="card-text"> <strong>
                   {movie.genre}
                  </strong></p>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home