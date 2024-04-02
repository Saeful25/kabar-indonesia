import React from "react";
import './Hero.css'

const Hero = () => {
  return (
    <div>
      <div className="container">
        <section className="hero">
        <div class="hero-left">
            <h2 class="hero-title">Kabar indonesia</h2>
            <p class="hero-description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam sapiente dignissimos earum quisquam
                velit impedit, eius eligendi, quaerat vero consectetur laudantium voluptatibus laborum. Facilis,
                officia.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur perspiciatis voluptatibus voluptatem
                dicta praesentium non totam illum soluta repellendus, vitae repellat quidem consectetur animi natus
                neque aspernatur! Repellat, dignissimos quaerat?
            </p>
            <button class="hero-button">read</button>
        </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;