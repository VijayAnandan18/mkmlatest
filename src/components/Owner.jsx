import React from "react";
import "./Owner.css"; // Import the unique CSS styles for this component

const Owner = () => {
  return (
    <div className="owner-body">
     <div className="one"> <h1  style={{fontSize:"25px", backgroundColor:"rgb(230, 199, 101)", color:"black", borderRadius:"20px"}}>Managing Directors of MKM Thanagamaligai</h1></div>
      <div className="owner-card-container">
        <div className="owner-a-box">
          <div className="owner-img-container">
            <div className="owner-img-inner">
              <div className="owner-inner-skew">
                <img src="assets/logo1.webp" alt="MKM SYED AHAMED KABEER" />
              </div>
            </div>
          </div>
          <div className="owner-text-container">
            <h3
              style={{
                fontWeight: "bold",
                fontFamily: "PlayfairDisplay",
                backgroundColor: "#e6c765",
                borderRadius: "5px",
              }}
            >
              MKM SYED AHAMED KABEER
            </h3>
            <div style={{ textAlign: "justify" }}>
              An ambitious and visionary and socially responsible exemplary
              being director of MKM group of companies with more than 30 years
              of expertise knowledge in fields of retail gold jewellery,
              transports, manufacturing, property developments, etc., and
              social activist and philanthropist.
            </div>
          </div>
        </div>

        <div className="owner-a-box">
          <div className="owner-img-container">
            <div className="owner-img-inner">
              <div className="owner-inner-skew">
                <img
                  src="assets/logo1.webp"
                  alt="MKMS.MOHAMED VAJITH MEERAN"
                />
              </div>
            </div>
          </div>
          <div className="owner-text-container">
            <h3
              style={{
                fontWeight: "bold",
                fontFamily: "PlayfairDisplay",
                backgroundColor: "#e6c765",
                borderRadius: "5px",
              }}
            >
              MKMS.MOHAMED VAJITH MEERAN
            </h3>
            <div style={{ textAlign: "justify" }}>
              An Enthusiastic Business Professional Holding a Master Degree in
              Business Administration, Having an Experience of More Than 17
              Years in Jewellery Industry, Garments, Trading.
            </div>
          </div>
        </div>

        <div className="owner-a-box">
          <div className="owner-img-container">
            <div className="owner-img-inner">
              <div className="owner-inner-skew">
                <img src="assets/logo1.webp" alt="MKMS IMTHIAS" />
              </div>
            </div>
          </div>
          <div className="owner-text-container">
            <h3
              style={{
                fontWeight: "bold",
                fontFamily: "PlayfairDisplay",
                backgroundColor: "#e6c765",
                borderRadius: "5px",
              }}
            >
              MKMS IMTHIAS
            </h3>
            <div style={{ textAlign: "justify" }}>
              An MBA graduate, very passionate about business administration and
              systematic practices, experienced in the fields of jewellery and
              garments.
            </div>
          </div>
        </div>

        <div className="owner-a-box">
          <div className="owner-img-container">
            <div className="owner-img-inner">
              <div className="owner-inner-skew">
                <img src="assets/logo1.webp" alt="MKM MOHAMED NAKIB" />
              </div>
            </div>
          </div>
          <div className="owner-text-container">
            <h3
              style={{
                fontWeight: "bold",
                fontFamily: "PlayfairDisplay",
                backgroundColor: "#e6c765",
                borderRadius: "5px",
              }}
            >
              MKM MOHAMED NAKIB
            </h3>
            <div style={{ textAlign: "justify" }}>
              An Senior person Experienced and Passionate Person with wide
              knowledge in Jewellery industry, Hospital Management,
              Manufacturing Industry and thriving hard workers.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Owner;
