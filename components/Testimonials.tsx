export default function Testimonials() {
  const testimonials = [
    {
      rating: "HIGHLY RECOMMENDED",
      text: "This game is amazing! My 6-year-old daughter loves playing it, and through the game she learned how to better handle emotions and get along with friends. Getting feedback after each choice helps her understand what's right. The game is fun and she always wants to play again!",
      author: "Sarah",
      date: "01/15/24"
    },
    {
      rating: "VERY EFFECTIVE",
      text: "As an elementary school teacher, I'm very impressed with this game's design. My students learn behavior choices through the game, and it works much better than just lecturing. The children all love it, and it really helps them understand correct behaviors.",
      author: "Michael",
      date: "01/10/24"
    },
    {
      rating: "GREAT LEARNING TOOL",
      text: "This is the third child in our family using this game. The game is very creative and helps children grow emotionally and socially. My children all love it, and I love it too. I've recommended it to all my friends and families!",
      author: "Jennifer",
      date: "01/05/24"
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

