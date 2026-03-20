import axios from "axios"
import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import Rating from "../components/Rating"
import ReviewForm from "../components/ReviewForm"
import { useLoaderContext } from "../context/LoaderContext"



function MovieDetail(){

const {id} = useParams()
const [movie,setMovie]=useState(null)
const [showForm, setShowForm]=useState(false)
const {setLoading}=useLoaderContext()

useEffect(()=>{
  setLoading(true)
    axios.get(`http://localhost:3000/movies/${id}`)
    .then(res=>{
      setMovie(res.data.movie)
      setLoading(false)
    })
    .catch(err=>{
      console.error(err)
      setLoading(false)
    })
}, [id])

if(!movie) return <p>Loading...</p>

const addReview= (newReview)=>{
  setMovie({...movie,reviews:[...movie.reviews,{id: Date.now(), ...newReview}]
})
}

      return (
   <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h2>{movie.title}</h2>
        <button
          className="btn btn-success"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? "Close Form" : "Add Review"}
        </button>
      </div>

      {showForm && <ReviewForm movieId={movie.id} addReview={addReview} />}

      <div className="card mx-auto mb-4 mt-4" style={{ maxWidth: "300px" }}>
        <img
          src={`http://localhost:3000/images/${movie.image}`}
          className="card-img-top"
          alt={movie.title}
        />
        <div className="card-body">
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
            <p>
              <strong>{review.name}</strong> <Rating vote={review.vote} />
            </p>
            <p>{review.text}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default MovieDetail