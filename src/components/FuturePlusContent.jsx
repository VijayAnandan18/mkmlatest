import React from "react";
import './FuturePlusContent.css';

const FuturePlusContent = () => {
  return (
    <div className="future-plus-container">
      <div className="future-plus-content">
        {/* Introduction Section */}
        <div className="future-plus-section">
          <h2 className="future-plus-heading">Introduction</h2>
          <p>
            The MKM Future Plus Scheme is a unique investment opportunity where individuals can invest a fixed amount each month over a period of 11 months. At the end of this period, they will receive the total investment amount along with an additional increment. This scheme is designed to help people save systematically while also offering the benefit of purchasing jewelry after completing the full investment cycle.
          </p>
        </div>

        {/* Key Features Section */}
        <div className="future-plus-section">
          <h2 className="future-plus-heading">Key Features</h2>
          <ul>
            <li><strong>Monthly Investment:</strong> Participants invest a fixed amount every month for a period of 11 months.</li>
            <li><strong>Incremental Benefit:</strong> After completing the 11 months, an additional increment equal to the last month's contribution (₹500 for a ₹500 plan, or ₹10,000 for a ₹10,000 plan) will be added to the total amount.</li>
            <li><strong>Final Redemption Amount:</strong> The total amount, including the increment, can then be used to purchase a gold jewel.</li>
            <li><strong>Flexible Investment:</strong> The scheme offers flexibility in investment amounts, making it accessible to a wide range of people.</li>
            <li><strong>No Labor or Wastage Charges:</strong> The jewel can be purchased without any labor or wastage charges, ensuring a more cost-effective gold purchase.</li>
          </ul>
        </div>

        {/* Eligibility Section */}
        <div className="future-plus-section">
          <h2 className="future-plus-heading">Eligibility</h2>
          <ul>
            <li><strong>Minimum Age:</strong> The scheme is open to all individuals who can commit to the monthly investment for 11 months.</li>
            <li><strong>Identity Proof:</strong> Participants must provide valid government-issued ID proof and address proof during registration.</li>
            <li><strong>Income Requirement:</strong> There are no specific income requirements, but participants must be able to commit to paying the monthly contribution.</li>
            <li><strong>Investment Commitment:</strong> A minimum monthly payment of ₹500 is required to enroll in the scheme, with an option to pay ₹10,000 for a higher investment.</li>
          </ul>
        </div>

        {/* Benefits Section */}
        <div className="future-plus-section">
          <h2 className="future-plus-heading">Benefits</h2>
          <ul>
            <li><strong>Systematic Saving:</strong> The scheme encourages disciplined, monthly savings, making it easier for individuals to save and invest in gold.</li>
            <li><strong>Incremental Benefit:</strong> The increment at the end of 11 months increases the total amount available for purchasing jewelry, adding value to the investment.</li>
            <li><strong>Affordable Entry Point:</strong> With a starting investment of just ₹500 per month, the scheme is accessible to a wide range of people.</li>
            <li><strong>Gold Redemption:</strong> After 11 months, participants can use their accumulated funds to buy a gold jewel, with no additional charges for labor or wastage.</li>
            <li><strong>Flexible Investment Amounts:</strong> Higher investments, such as ₹10,000 per month, lead to higher returns, providing options for different financial capabilities.</li>
          </ul>
        </div>

        {/* Important Considerations Section */}
        <div className="future-plus-section">
          <h2 className="future-plus-heading">Important Considerations</h2>
          <ul>
            <li><strong>Commitment to Monthly Payments:</strong> The scheme requires participants to stick to their monthly payments. If a payment is missed, the participant may forfeit the opportunity to redeem their gold jewel at the end of the term.</li>
            <li><strong>No Partial Redemptions:</strong> Participants must complete the full 11-month cycle to be eligible for redemption. Partial redemptions are not allowed.</li>
            <li><strong>Taxes and Additional Charges:</strong> Any applicable taxes, including GST, will be deducted at the time of redemption. Diamonds, gemstones, or customizations in the jewel design are charged separately.</li>
            <li><strong>No Immediate Redemption:</strong> The jewel can only be purchased after completing the 11-month term, with the increment being added to the final amount.</li>
          </ul>
        </div>

        {/* Conclusion Section */}
        <div className="future-plus-section">
          <h2 className="future-plus-heading">Conclusion</h2>
          <p>
            The MKM Future Plus Scheme offers a flexible and structured way to invest in gold. By committing to a monthly investment, participants not only accumulate gold but also benefit from an increment at the end of the 11-month period. With no additional labor or wastage charges on the purchased jewel, this scheme is an excellent way for people to invest in gold, especially for those who want to save systematically and receive a tangible asset at the end of the investment cycle.
          </p>
        </div>
           {/* Contact Section */}
        <div className="flexi-gold-section flexi-gold-contact">
          <h2 className="flexi-gold-heading">For Any Scheme Related Query</h2>
          <p className="flexi-gold-text">
            <strong>Contact Us :</strong> <br />
            <strong style={{marginLeft:"10px"}}>Mail-Id:</strong> <a href="mailto:mkmthangamaligai@gmail.com">mkmthangamaligai@gmail.com</a> <br />
            <strong style={{marginLeft:"10px"}}>Landline No.:</strong> +0462 4055001
          </p>
        </div>
      </div>
    </div>
  );
};

export default FuturePlusContent;
