import React, { useState, useEffect } from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex % 3) + 1); // Loop through slides (1 to 3)
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  useEffect(() => {
    const slides = document.getElementsByClassName("testimonial-slide");
    const dots = document.getElementsByClassName("testimonial-dot");

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    if (slides.length > 0) {
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].className += " active";
    }
  }, [slideIndex]);

  const plusSlides = (n) => {
    setSlideIndex((prevIndex) => {
      const newIndex = prevIndex + n;
      return newIndex > 3 ? 1 : newIndex < 1 ? 3 : newIndex; // Loop through slides
    });
  };

  return (
    <div className="testimonials-justheading">
      <div className="one" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <h1 className="main-heading" style={{ textTransform: "capitalize" }}>Testimonials & Reviews</h1>
        <ul style={{ alignItems: "center", padding: 0, listStyle: "none", display: "flex", gap: "10px" }}>
          <li>
            <a href="https://www.facebook.com/people/MKM-Thangamaligai/61555917721795/?mibextid=ZbWKwL" aria-label="Facebook">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                alt="Facebook"
                style={{ width: '30px', height: '30px' }}
              />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/mkmthangamaligai/profilecard/?igsh=MnE0MzcxeHRzYWl0" aria-label="Instagram">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                alt="Instagram"
                style={{ width: '30px', height: '30px' }}
              />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/@MKMThangamaligai" aria-label="YouTube">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png"
                alt="YouTube"
                style={{ width: '30px', height: '30px' }}
              />
            </a>
          </li>
        </ul>
      </div>

      <section className="testimonials-section" style={{ backgroundImage: "url(/assets/testmonialbg.jpg)" }}>
        <div className="testimonials-rectangle"></div>
        <div className="testimonials-slideshow-container">
          {/* Testimonial Slides */}
          <div className="testimonial-slide">
            <div className="testimonial-content">
              <q style={{ color: "white" }}>
                Wonderful gesture while purchasing and Creative collections on MKM Thangamaligai..I would personally recommend this shop to your Gold & Diamond Purchase collections!
              </q>
            </div>
            <div className="testimonial-rating">
    <span style={{ color: "gold" }}>★ ★ ★ ★ ★</span> {/* 5-star rating */}
  </div>
            <p className="testimonial-author" style={{ color: "white" }}>By: <span style={{ color: "white" }}>Banu Priya</span></p>
          </div>
          <div className="testimonial-slide">
            <div className="testimonial-content">
              <q style={{ color: "white" }}>
                The experience which I got when I visit the shop was literally awesome, and the design is really good and unique.
              </q>
            </div>
            <div className="testimonial-rating">
    <span style={{ color: "gold" }}>★ ★ ★ ★ ★</span> {/* 5-star rating */}
  </div>
            <p className="testimonial-author" style={{ color: "white" }}>By: <span style={{ color: "white" }}>Nirmal</span></p>
          </div>
          <div className="testimonial-slide">
            <div className="testimonial-content">
              <q style={{ color: "white" }}>
                Great experience.
              </q>
            </div>
            <div className="testimonial-rating">
    <span style={{ color: "gold" }}>★ ★ ★ ★ ★</span> {/* 5-star rating */}
  </div>
            <p className="testimonial-author" style={{ color: "white" }}>By: <span style={{ color: "white" }}>Gandhi Raj</span></p>
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
    </div>
  );
};

export default Testimonials;
