import Avatar1 from "../../images/Avatar1.jpg";
import Avatar2 from "../../images/Avatar2.jpg";
import Avatar3 from "../../images/Avatar3.jpg";
import Avatar4 from "../../images/Avatar4.jpg";
import "./HomePage.css";
import TestimonialCard from "./TestimonialCard";

function Testimonials() {
  const reviews = [
    {
      avatar: Avatar1,
      reviewerName: "Reviewer 1",
      reviewText:
        "I loved the food which was amazing with lots of flavor, very impressive",
      rating: 5,
    },
    {
      avatar: Avatar2,
      reviewerName: "Reviewer 2",
      reviewText:
        "We had a lovely meal here last night, with personal recommendations",
      rating: 5,
    },
    {
      avatar: Avatar3,
      reviewerName: "Reviewer 3",
      reviewText:
        "Great food and atmosphere - highly recommended! Will come again!",
      rating: 5,
    },
    {
      avatar: Avatar4,
      reviewerName: "Reviewer 4",
      reviewText:
        "Thanks for the wonderful care given to us. Forever repeat customers!",
      rating: 5,
    },
  ];

  return (
    <section className="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonial-cards">
        {reviews.map((review, index) => (
          <TestimonialCard
            key={index}
            avatar={review.avatar}
            reviewerName={review.reviewerName}
            reviewText={review.reviewText}
            rating={review.rating}
          />
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
