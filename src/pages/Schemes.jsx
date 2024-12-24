import React from 'react';
import { Link } from 'react-router-dom';
import './Schemes.css';

const Schemes = () => {
  return (
    <div className="schemes-container">
      <div className="schemes-content">
        
        <section className="schemes-section">
          <h2 className="schemes-heading">Saving Schemes: Your Path to Systematic Gold Investment!</h2>
          <p className="schemes-description">
            The MKM Saving Schemes offer a range of flexible and structured plans designed to help individuals invest in gold systematically and affordably. With these schemes, you can contribute a fixed amount periodically and accumulate gold over time, taking advantage of price fluctuations in the market. These plans not only make saving for gold easy but also allow you to redeem your savings as exquisite gold jewelry after completing the investment cycle
          </p>
        </section>
        <div className="shop-explore-more">
        <a href="/digigold"><button>Explore DigiGold...</button></a>
      </div>
        <section className="schemes-section">
          <h3 className="schemes-subheading" style={{marginLeft:"2px"}}>Available Saving Schemes:</h3>
          <div className="schemes-list">
            <div className="scheme-item">
              <div className="scheme-item-content">
                <div className="scheme-item-image">
                  <img src="/assets/schemes/fs.jpeg" alt="MKM Flexi Gold Scheme" />
                </div>
                <div className="scheme-item-text">
                  <h4 className="scheme-title">MKM Flexi Gold Scheme</h4>
                
                  <Link to="/flexigold" className="read-more-link" style={{fontWeight:"bold"}}>Read More...</Link>
                </div>
              </div>
            </div>

            <div className="scheme-item">
              <div className="scheme-item-content">
                <div className="scheme-item-image">
                  <img src="/assets/schemes/fg.png" alt="MKM Future Gold Scheme" />
                </div>
                <div className="scheme-item-text">
                  <h4 className="scheme-title">MKM Future Gold Scheme</h4>
               
                  <Link to="/futuregold" className="read-more-link">Read More...</Link>
                </div>
              </div>
            </div>

            <div className="scheme-item">
              <div className="scheme-item-content">
                <div className="scheme-item-image">
                  <img src="/assets/schemes/fd.png" alt="MKM Future Plus Scheme" />
                </div>
                <div className="scheme-item-text">
                  <h4 className="scheme-title">MKM Future Plus Scheme</h4>
            
                  <Link to="/futureplus" className="read-more-link">Read More...</Link>
                </div>
              </div>
            </div>

            <div className="scheme-item">
              <div className="scheme-item-content">
                <div className="scheme-item-image">
                  <img src="/assets/schemes/dailycollection.png" alt="MKM Daily Collection Scheme" />
                </div>
                <div className="scheme-item-text">
                  <h4 className="scheme-title">MKM Daily Collection Scheme</h4>
                
                  <Link to="/dailycollection" className="read-more-link">Read More...</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="schemes-section">
          <h3 className="schemes-heading"  style={{marginLeft:"2px"}}>Conclusion</h3>
          <p className="schemes-description">
            All these schemes can be managed effortlessly using the MKM app, making it easier for you to track your investments, manage contributions, and stay updated on gold prices. Invest smartly and securely with the MKM Saving Schemes and turn your dreams of owning gold into a reality!
          </p>
        </section>
            {/* Contact Section */}
            <div className="flexi-gold-section flexi-gold-contact">
          <h2 className="flexi-gold-heading">For Any Scheme Related Query</h2>
          <p className="flexi-gold-text">
            <strong>Contact Us :</strong> <br />
            <strong>Mail-Id:</strong> <a href="mailto:mkmthangamaligai@gmail.com">mkmthangamaligai@gmail.com</a> <br />
            <strong>Landline No:</strong> +0462 4055001
          </p>
        </div>
    
      </div>
    </div>
  );
};

export default Schemes;
