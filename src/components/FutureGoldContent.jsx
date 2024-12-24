import React from 'react';
import './FutureGoldContent.css'; // Make sure to import the corresponding CSS file

const FutureGoldContent = () => {
  return (
    <div className="future-gold-container">
      <div className="future-gold-content">
        {/* Introduction Section */}
        <div className="future-gold-section">
          <h2 className="future-gold-heading">Introduction</h2>
          <p className="future-gold-text">
            The MKM Future Gold Scheme is designed for individuals who wish to invest in gold over an 11-month period. By contributing ₹10,000 per month, investors accumulate gold at the current market price, which is then redeemed as a gold jewel after 11 months. This scheme offers an excellent opportunity for individuals to invest in gold in a flexible, affordable, and structured manner, while taking advantage of price fluctuations in the gold market.
          </p>
        </div>

        {/* Key Features Section */}
        <div className="future-gold-section">
          <h2 className="future-gold-heading">Key Features</h2>
          <ul className="future-gold-list">
            <li>Monthly Contribution: ₹10,000 per month for 11 months.</li>
            <li>Gold Accumulation: The gold is accumulated based on the prevailing market price each month.</li>
            <li>Redemption: After 11 months, the accumulated gold is redeemed as a gold jewel at the prevailing gold rate at that time.</li>
            <li>Jewel without Charges: The jewel is provided without any labor or wastage charges.</li>
            <li>Taxation: GST and other taxes will be deducted at the time of redemption.</li>
            <li>Diamonds and Gemstones: Any diamonds or gemstones included in the jewel will be priced separately.</li>
          </ul>
        </div>

        {/* Eligibility Section */}
        <div className="future-gold-section">
          <h2 className="future-gold-heading">Eligibility</h2>
          <p className="future-gold-text">
            To participate in the MKM Future Gold Scheme, the following criteria must be met:
            <ul className="future-gold-list">
              <li>Age Requirement: Open to individuals of all ages who can commit to paying ₹10,000 monthly for 11 months.</li>
              <li>Income Source: There are no restrictions on the source of income, but the participant must ensure they can maintain monthly payments.</li>
              <li>Identity Proof: Participants must provide valid government-issued ID proof and address proof during registration.</li>
              <li>Commitment: Participants must be willing to pay ₹10,000 each month for 11 months to be eligible for the scheme.</li>
            </ul>
          </p>
        </div>

        {/* Benefits Section */}
        <div className="future-gold-section">
          <h2 className="future-gold-heading">Benefits</h2>
          <ul className="future-gold-list">
            <li>Systematic investment through monthly payments, making it easier to invest in gold.</li>
            <li>If gold prices rise, participants benefit by locking in the price at the 11th-month rate.</li>
            <li>Gold jewel redemption without labor or wastage charges.</li>
            <li>Applicable taxes, including GST, will only be deducted at the time of redemption.</li>
            <li>Flexibility in choosing designs for the gold jewel, with additional payments for diamonds or gemstones if chosen.</li>
          </ul>
        </div>

        {/* Important Considerations Section */}
        <div className="future-gold-section">
          <h2 className="future-gold-heading">Important Considerations</h2>
          <ul className="future-gold-list">
            <li>The amount of gold accumulated depends on the market price at the time of each monthly payment.</li>
            <li>The scheme requires a strict commitment to paying ₹10,000 each month. Non-payment may result in cancellation of the scheme.</li>
            <li>Taxes will be deducted at the redemption date, based on the gold price on that day.</li>
            <li>Diamonds, gemstones, and any customizations in the jewel design are charged separately and are not included in the ₹10,000 monthly payments.</li>
            <li>The scheme requires completion of the full 11-month period to redeem the gold as a jewel.</li>
          </ul>
        </div>

        {/* Conclusion Section */}
        <div className="future-gold-section">
          <h2 className="future-gold-heading">Conclusion</h2>
          <p className="future-gold-text">
            The MKM Future Gold Scheme offers a structured, flexible way to invest in gold. By contributing ₹10,000 each month for 11 months, participants can accumulate gold at current market rates, with the option to redeem it as a gold jewel at the end of the period. This scheme allows for gold investments while benefiting from market price fluctuations, and offers a jewel without labor or wastage charges. It is a great option for those looking to invest in gold systematically over time.
          </p>
        </div>
             {/* Contact Section */}
        <div className="flexi-gold-section flexi-gold-contact">
          <h2 className="flexi-gold-heading">For Any Scheme Related Query</h2>
          <p className="flexi-gold-text">
            <strong>Contact Us :</strong> <br />
            <strong>Mail-Id:</strong> <a href="mailto:mkmthangamaligai@gmail.com">mkmthangamaligai@gmail.com</a> <br />
            <strong>Landline No.:</strong> +0462 4055001
          </p>
        </div>
      </div>

    </div>
  );
};

export default FutureGoldContent;
