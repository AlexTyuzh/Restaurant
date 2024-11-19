function TestimonialCard({ avatar, reviewerName, reviewText, rating }) {
  return (
    <div className="testimonial-card">
      <div className="avatar">
        <img src={avatar} alt={`${reviewerName} avatar`} />
      </div>
      <div className="reviewer-name">{reviewerName}</div>
      <div className="review-text">"{reviewText}"</div>
      <div className="rating">{"⭐".repeat(rating)}</div>
    </div>
  );
}

export default TestimonialCard;
