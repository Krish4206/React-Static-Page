function HeroSection() {
  return (
    <div className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="hero-btn">
          <button className="primary-btn">Shop Now</button>
          <button className="secondary-btn">Shop Now</button>
        </div>
        <div className="shopping">
          <p>Also Available On</p>
          <div className="brand-icons">
            <img src="./images/flipkart.png" alt="flipkart-logo" />
            <img src="./images/amazon.png" alt="amazon-logo" />
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="./images/hero-image.png" alt="amazon-logo" />
      </div>
    </div>
  );
}
export default HeroSection;
