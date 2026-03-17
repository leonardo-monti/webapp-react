import axios from "axios"
import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"

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
    
    <div>
        <h1>{movie.title}</h1>
        <img src={`http://localhost:3000/images/${movie.image}`} alt={movie.title} />
        <p>Director: {movie.director}</p>
        <p>Genre: {movie.genre}</p>
        <p>Release year: {movie.release_year}</p>
        <p>Abstract: {movie.abstract}</p>
   

{movie.reviews.map(review => (
  <div key={review.id}>
    <p>{review.name} - {review.vote}/5</p>
    <p>{review.text}</p>
  </div>
))}

 </div>

    )
}

export default MovieDetail