import React, { useState, useEffect } from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const slides = document.getElementsByClassName("testimonial-slide");
  const dots = document.getElementsByClassName("testimonial-dot");

  const showSlides = (n) => {
    if (n > slides.length) {
      setSlideIndex(1);
    } else if (n < 1) {
      setSlideIndex(slides.length);
    } else {
      setSlideIndex(n);
    }

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  };

  const plusSlides = (n) => {
    showSlides(slideIndex + n);
  };

  useEffect(() => {
    showSlides(slideIndex);
  }, [slideIndex]);

  return (
    <section className="testimonials-section" style={{ backgroundImage: "url(/assets/testmonialbg.jpg)" }}>
      <div className="testimonials-rectangle"></div>
      <div className="testimonials-slideshow-container">
        <div className="one">
          <h1 className="main-heading" style={{color:"goldenrod"}}>Testimonials</h1>
        </div>

        {/* Testimonial Slides */}
        <div className="testimonial-slide">
          <div className="testimonial-content">
            <q style={{ color: "white" }}>
              Wonderful gesture while purchasing and Creative collections on MKM Thangamaligai..I would personally recommend this shop to your Gold & Diamond Purchase collections!
            </q>
          </div>
          <p className="testimonial-author"  style={{color:"white"}}>By: <span  style={{color:"white"}}>Banu Priya</span></p>
        </div>

        <div className="testimonial-slide">
          <div className="testimonial-content">
            <q style={{ color: "white" }}>
              The experience which I got when I visit the shop was literally awesome, and the design is really good and unique.
            </q>
          </div>
          <p className="testimonial-author"  style={{color:"white"}}>By: <span  style={{color:"white"}}>Nirmal</span></p>
        </div>

        <div className="testimonial-slide">
          <div className="testimonial-content">
            <q style={{ color: "white" }}>
              Great experience.
            </q>
          </div>
          <p className="testimonial-author"  style={{color:"white"}} >By:  <span  style={{color:"white"}}>Gandhi Raj</span></p>
        </div>

        <a className="testimonial-prev" onClick={() => plusSlides(-1)}>&#10094;</a>
        <a className="testimonial-next" onClick={() => plusSlides(1)}>&#10095;</a>
      </div>

      {/* Dots Navigation */}
      <div className="testimonial-dot-container">
        <span className="testimonial-dot"></span>
        <span className="testimonial-dot"></span>
        <span className="testimonial-dot"></span>
      </div>
    </section>
  );
};

export default Testimonials;
