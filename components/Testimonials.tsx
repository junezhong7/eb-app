export default function Testimonials() {
  const testimonials = [
    {
      rating: "HIGHLY RECOMMENDED",
      text: "Highly recommended! My 6-year-old daughter finished the program in 4 months and her behavior has improved significantly. She's now more confident and emotionally regulated. The activities and worksheets were engaging too. Thank you very much for this amazing program.",
      author: "Sarah",
      date: "05/01/21"
    },
    {
      rating: "I AM EXCITED",
      text: "As a former primary school teacher, I am very impressed with Emotional Balance and how it has been structured. My daughter absolutely loves it and as a parent I am excited to see her emotional skills flourish as she takes ownership of her growth.",
      author: "Michael",
      date: "13/12/20"
    },
    {
      rating: "AWESOME WORK",
      text: "This is my third child using this program and it is so creative and helps with emotional and mental growth of children. My kids loved it and I love it too. I recommended this to all the friends and families I met and they are happy too. Awesome work!!!!",
      author: "Jennifer",
      date: "04/12/20"
    }
  ]

  return (
    <section className="testimonials">
      <div className="container">
        <h2>Trusted Reviews</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-rating">{testimonial.rating}</div>
              <p className="testimonial-text">&quot;{testimonial.text}&quot;</p>
              <div className="testimonial-author">
                <strong>{testimonial.author}</strong>
                <span>{testimonial.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

