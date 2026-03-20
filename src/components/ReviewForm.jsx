import axios from "axios"
import { useState } from "react"

export default function ReviewForm({movieId, addReview}) {

const [formData,setFormData] =useState({
    name:"",
    vote:1,
    text:"",

})

const handleFormChange=(e)=>{
    const{name,value}=e.target

    setFormData({...formData,[name]:value})
}

const handleFormSubmit=(e)=>{
    e.preventDefault()

    axios.post(`http://localhost:3000/movies/${movieId}/reviews`,formData)
    .then(()=>{
        addReview(formData)
        setFormData({name:"",vote:1,text:""})
    })
    .catch((err)=>console.error(err))
}

return (
    <div className="card mt-3">
        <div className="card-header">
            <h5>Add Review</h5>
</div>
<form className="card-body" onSubmit={handleFormSubmit}>
    <div className="mb-2">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleFormChange}
            required
          />
        </div>
        <div className="mb-2">
            <label className="form-label">Vote</label>
            <select
            className="form-select"
            name="vote"
            value={formData.vote}
            onChange={handleFormChange}>
                {[1, 2, 3, 4, 5].map((rank) => (
              <option key={rank} value={rank}>
                {rank}
              </option>
            ))}
        </select>
        </div>

        <div className="mb-2">
          <label className="form-label">Text</label>
          <textarea
            className="form-control"
            name="text"
            value={formData.text}
            onChange={handleFormChange}
            required>
            </textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit Review
        </button>
     </form>
    </div>
)
}