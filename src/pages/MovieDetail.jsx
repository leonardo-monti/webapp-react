import axios from "axios"
import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import Rating from "../components/Rating"

function MovieDetail(){

const {id} = useParams()
const [movie,setMovie]=useState(null)

useEffect(()=>{
    axios.get(`http://localhost:3000/movies/${id}`)
    .then(res=>setMovie(res.data.movie))
    .catch(err=>console.error(err))
}, [id])

if(!movie) return <p>Loading...</p>

      return (
   <div className="container mt-4">
  <div className="card mx-auto" style={{ maxWidth: "300px" }}>
    <img
      src={`http://localhost:3000/images/${movie.image}`}
      className="card-img-top"
      alt={movie.title}
    />
            <div className="card-body">
              <h2 className="card-title">{movie.title}</h2>
              <p><strong>Genre:</strong> {movie.genre}</p>
              <p><strong>Director:</strong> {movie.director}</p>
              <p><strong>Release year:</strong> {movie.release_year}</p>
              <p><strong>Abstract:</strong> {movie.abstract}</p>
            </div>
          </div>

          <h4>Reviews</h4>
          {movie.reviews.map((review) => (
            <div key={review.id} className="card mb-2">
              <div className="card-body">
                <p><strong>{review.name}</strong> <Rating vote={review.vote} /></p>
                <p>{review.text}</p>
              </div>
            </div>
          ))}

        </div>
    
  )
}

export default MovieDetail