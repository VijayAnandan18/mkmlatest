import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./NewArrivals.css";

const NewArrivals = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const images = [
    { src: "assets/newarrivals1.webp", name: "Elegant Gold Necklace" },
    { src: "assets/newarrivals2.webp", name: "Classic Gold Necklace" },
    { src: "assets/newarrivals3.webp", name: "Emerald Bangle" },
    { src: "assets/newarrivals4.webp", name: "Gold Earring" },
    { src: "assets/newarrivals5.webp", name: "Ruby Stud Earrings" },
    { src: "assets/newarrivals6.webp", name: "Gold Cuff Chain" },
    { src: "assets/newarrivals7.webp", name: "Sapphire Kid Bracelet" },
    { src: "assets/newarrivals8.webp", name: "Mangalasutra" },
    { src: "assets/newarrivals9.webp", name: "Gold Emerald Necklace" },
    { src: "assets/newarrivals10.webp", name: "Gold Stud Chain" },
  ];

  return (
    <div className="new-arrivals">
      <div className="one">
        <h1>Sparkling Trends</h1>
        <p>Stay ahead with jewelry that sparkles with style.</p>
      </div>
      <Slider {...settings}>
        {images.map((item, index) => (
          <div className="card" key={index}>
            <img
              src={item.src}
              alt={`New Arrival ${index + 1}`}
              className="card-image"
            />
            <p className="image-caption">{item.name}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NewArrivals;
