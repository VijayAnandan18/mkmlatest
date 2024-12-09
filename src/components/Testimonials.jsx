import React, { useState } from 'react';
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

  React.useEffect(() => {
    showSlides(slideIndex);
  }, [slideIndex]);

  return (
    <section className="testimonials-section">
      <div className="testimonials-rectangle"></div>
      <div className="testimonials-slideshow-container">
      <div className="one">
        <h1 className="main-heading">Testimonials</h1>
        <p>Wonderful gesture while purchasing and Creative collections on MKM Thangamaligai..I would personally recommend this shop to your Gold & Diamond Purchase collections!</p>
      </div>
        <div className="testimonial-slide">
       
          <div className="testimonial-content">
            <q style={{color: "white"}}>
              Curabitur ligula augue, lobortis in interdum nec, dignissim vel arcu. Donec semper aliquet mattis. Curabitur convallis urna congue viverra elementum.
            </q>
          </div>
          <p className="testimonial-author">By: <span>Joe Bloggs</span></p>
        </div>
        <div className="testimonial-slide">
          <div className="testimonial-content">
            <q style={{color: "white"}}>
              Vivamus est felis, tempor sed mauris ac, malesuada sollicitudin ipsum. Etiam nec ullamcorper nibh, ac pretium sapien. Donec pharetra sollicitudin ligula, sit amet ornare nisi vestibulum et.
            </q>
          </div>
          <p className="testimonial-author">By: <span>Jane Doe</span></p>
        </div>
        <div className="testimonial-slide">
          <div className="testimonial-content">
            <q style={{color: "white"}}>
              Mauris malesuada, ex at volutpat euismod, velit diam placerat lacus, eu rhoncus enim metus ultricies nisi. Mauris pharetra tristique nisl.
            </q>
          </div>
          <p className="testimonial-author">By: <span>John Doe</span></p>
        </div>
        <a className="testimonial-prev" onClick={() => plusSlides(-1)}>&#10094;</a>
        <a className="testimonial-next" onClick={() => plusSlides(1)}>&#10095;</a>
      </div>
      <div className="testimonial-dot-container">
        <span className="testimonial-dot"></span>
        <span className="testimonial-dot"></span>
        <span className="testimonial-dot"></span>
      </div>
    </section>
  );
};

export default Testimonials;
