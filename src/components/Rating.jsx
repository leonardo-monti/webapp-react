export default function Rating({ vote, maxVote = 5 }) {
  function renderStars() {
    const stars = []

    for (let i = 0; i < maxVote; i++) {
      const starClass = i < vote ? "bi-star-fill" : "bi-star"

      stars.push(
        <i
          key={i}
          className={`bi ${starClass} text-warning`}
        ></i>
      )
    }

    return stars
  }

  return <div>{renderStars()}</div>
}