
import React from 'react';
import './FlexiGoldContent.css'; // Import the CSS for styling

const DailyContent = () => {
  return (
    <div className="flexi-gold-hero-container">
      <div className="flexi-gold-hero-content">
        
        {/* Introduction Section */}
        <div className="flexi-gold-section">
          <h2 className="flexi-gold-heading">Introduction</h2>
          <p className="flexi-gold-text">
            The MKM Flexi Gold Scheme offers individuals an opportunity to invest in gold in a flexible and structured manner. Through this scheme, investors can contribute a fixed amount each month and, after a period of 11 months, receive a gold jewel in exchange. This scheme allows people to accumulate gold in a cost-effective and systematic way, taking advantage of monthly gold price fluctuations to build up their gold reserves.
          </p>
        </div>

        {/* Key Features Section */}
        <div className="flexi-gold-section">
          <h2 className="flexi-gold-heading">Key Features</h2>
          <ul className="flexi-gold-list">
            <li className="flexi-gold-item">Monthly Contribution: The scheme requires a fixed monthly investment of ₹5000.</li>
            <li className="flexi-gold-item">Investment Period: Investors need to pay ₹5000 per month for a total of 11 months.</li>
            <li className="flexi-gold-item">Gold Accumulation: The amount of gold credited is calculated based on the prevailing gold price each month.</li>
            <li className="flexi-gold-item">Final Gold Value: The total accumulated gold is the sum of the gold grams collected each month.</li>
            <li className="flexi-gold-item">Gold Jewel Redemption: After 11 months, investors can redeem the accumulated gold as a jewel, without any labor or wastage charges.</li>
            <li className="flexi-gold-item">Tax Deduction: The applicable tax will be deducted based on the gold price on the date of redemption.</li>
          </ul>
        </div>

        {/* Eligibility Section */}
        <div className="flexi-gold-section">
          <h2 className="flexi-gold-heading">Eligibility</h2>
          <p className="flexi-gold-text">
            The MKM Flexi Gold Scheme is available to individuals who meet the following criteria:
            <ul className="flexi-gold-list">
              <li className="flexi-gold-item">Must be willing to make a monthly investment of ₹5000 for 11 months.</li>
              <li className="flexi-gold-item">Must have a valid ID proof and address proof to enroll in the scheme.</li>
              <li className="flexi-gold-item">No age restrictions, making it open to individuals of all ages.</li>
            </ul>
          </p>
        </div>

        {/* Benefits Section */}
        <div className="flexi-gold-section">
          <h2 className="flexi-gold-heading">Benefits</h2>
          <ul className="flexi-gold-list">
            <li className="flexi-gold-item">Systematic Investment: Build gold savings through affordable monthly contributions.</li>
            <li className="flexi-gold-item">Gold Price Advantage: Benefit from fluctuations in gold prices over time.</li>
            <li className="flexi-gold-item">No Extra Charges: Get a gold jewel without additional charges for labor or wastage.</li>
            <li className="flexi-gold-item">Tax Benefits: Only applicable taxes will be deducted on the day of redemption.</li>
          </ul>
        </div>

        {/* Important Considerations Section */}
        <div className="flexi-gold-section">
          <h2 className="flexi-gold-heading">Important Considerations</h2>
          <ul className="flexi-gold-list">
            <li className="flexi-gold-item">Gold Price Variability: The amount of gold accumulated may vary based on the market price of gold each month.</li>
            <li className="flexi-gold-item">Monthly Commitment: Ensure you can make monthly payments for the entire 11-month period.</li>
            <li className="flexi-gold-item">Taxation: Taxes will be applied based on the gold price on the day of redemption.</li>
          </ul>
        </div>

        {/* Conclusion Section */}
        <div className="flexi-gold-section">
          <h2 className="flexi-gold-heading">Conclusion</h2>
          <p className="flexi-gold-text">
            The MKM Flexi Gold Scheme offers a convenient and affordable way to invest in gold. By making monthly contributions, individuals can accumulate gold over 11 months and redeem it as a jewel, free from labor and wastage charges. This scheme offers the dual benefits of investing in gold and receiving a tangible asset after a short-term investment period, making it a popular choice for those looking to secure their financial future with precious metals.
          </p>
        </div>
      {/* Contact Section */}
      <div className="flexi-gold-section flexi-gold-contact">
          <h2 className="flexi-gold-heading">For Any Scheme Related Query</h2>
          <p className="flexi-gold-text">
            <strong>Contact Us :</strong> <br />
            <strong style={{marginLeft:"10px"}}>Mail-Id:</strong> <a href="mailto:mkmthangamaligai@gmail.com">mkmthangamaligai@gmail.com</a> <br />
            <strong style={{marginLeft:"10px"}}>Landline No:</strong> +0462 4055001
          </p>
        </div>
      </div>
    </div>
  );
}

export default DailyContent;
