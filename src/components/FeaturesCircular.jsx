import React from "react";
import "./FeaturesCircular.css";

const FeaturesCircular = () => {
  // Example data for 10 circular items, including names and links
  const circularFeatures = [
    { id: 1, name: "New Arrivals", imageUrl: "/assets/round2.jpg", href: "#" },
    {
      id: 2,
      name: "Gold Necklaces",
      imageUrl: "/assets/jewels/gold/necklace/necklace1.webp",
      href: "gold-jewellery#necklaces",
    },
    {
      id: 3,
      name: "Gold Bracelets",
      imageUrl: "/assets/jewels/gold/bracelet/bracelet1.jpg",
      href: "gold-jewellery#bracelets",
    },
    {
      id: 4,
      name: "Gold Chains",
      imageUrl: "/assets/jewels/gold/chain/chain1.png",
      href: "gold-jewellery#chains",
    },
    {
      id: 5,
      name: "Gold Nosepins",
      imageUrl: "/assets/jewels/gold/nosepin/nosepin1.webp",
      href: "gold-jewellery#nosepins",
    },
    {
      id: 6,
      name: "Diamond Rings",
      imageUrl: "/assets/jewels/diamond/rings/diamondring1.webp",
      href: "diamond-jewellery#rings",
    },
    {
      id: 7,
      name: "Silver Idols",
      imageUrl: "/assets/jewels/silver/idols/idol1.webp",
      href: "silver-collection#idols",
    },
    { id: 8, name: "Purity Carat Meter", imageUrl: "/assets/Meter.png", href: "#" },
    {
      id: 9,
      name: "Mobile App",
      imageUrl: "/assets/mobile.png",
      href: "https://play.google.com/store/apps/details?id=com.ri.zinger.mkmthangamaligai",
    },
    { id: 10, name: "Car Parking Facility", imageUrl: "/assets/car.png", href: "#" },
  ];

  return (
    <div className="features-circular-container">
      {circularFeatures.map((feature) => (
        <a
          key={feature.id}
          href={feature.href}
          target={feature.href.startsWith("http") ? "_blank" : "_self"} // Open external links in a new tab
          rel="noopener noreferrer" // Security for external links
          className="orb-wrapper"
        >
          <div className="orb">
            <img
              src={feature.imageUrl}
              alt={feature.name}
              className="orb-image"
            />
          </div>
          <p className="orb-label">{feature.name}</p>
        </a>
      ))}
    </div>
  );
};

export default FeaturesCircular;
