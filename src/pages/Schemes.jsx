import React from 'react';
import { Link } from 'react-router-dom';
import './Schemes.css';

const Schemes = () => {
  return (
    <div className="schemes-container">
      <div className="schemes-content">
        <section className="schemes-section">
          <h2 className="schemes-heading">Saving Schemes: Your Path to Systematic Gold Investment</h2>
          <p className="schemes-description">
            The MKM Saving Schemes offer a range of flexible and structured plans designed to help individuals invest in gold systematically and affordably. With these schemes, you can contribute a fixed amount periodically and accumulate gold over time, taking advantage of price fluctuations in the market. These plans not only make saving for gold easy but also allow you to redeem your savings as exquisite gold jewelry after completing the investment cycle.
          </p>
        </section>

        <section className="schemes-section">
          <h3 className="schemes-subheading">Available Saving Schemes:</h3>
          <div className="schemes-list">
            <div className="scheme-item">
              <div className="scheme-item-content">
                <div className="scheme-item-image">
                  <img src="/assets/schemes/fs.jpeg" alt="MKM Flexi Gold Scheme" />
                </div>
                <div className="scheme-item-text">
                  <h4 className="scheme-title">MKM Flexi Gold Scheme</h4>
                  <p className="scheme-description">
                    A flexible and structured investment option where you contribute a fixed amount monthly for 11 months. At the end of the period, you can redeem your savings as a beautiful gold jewel, making it a cost-effective way to build your gold reserves while benefiting from monthly gold price fluctuations.
                  </p>
                  <Link to="/flexigold" className="read-more-link">Read More</Link>
                </div>
              </div>
            </div>

            <div className="scheme-item">
              <div className="scheme-item-content">
                <div className="scheme-item-image">
                  <img src="/assets/schemes/fg.jpeg" alt="MKM Future Gold Scheme" />
                </div>
                <div className="scheme-item-text">
                  <h4 className="scheme-title">MKM Future Gold Scheme</h4>
                  <p className="scheme-description">
                    Designed for individuals looking to invest in gold at a fixed monthly rate of ₹10,000, this scheme accumulates gold at the current market price over 11 months. At the end of the term, the accumulated gold is redeemed as a gold jewel, offering a structured and affordable way to invest in gold.
                  </p>
                  <Link to="/futuregold" className="read-more-link">Read More</Link>
                </div>
              </div>
            </div>

            <div className="scheme-item">
              <div className="scheme-item-content">
                <div className="scheme-item-image">
                  <img src="/assets/schemes/fd.jpeg" alt="MKM Future Plus Scheme" />
                </div>
                <div className="scheme-item-text">
                  <h4 className="scheme-title">MKM Future Plus Scheme</h4>
                  <p className="scheme-description">
                    A unique savings plan where you invest a fixed amount monthly for 11 months. Upon completing the cycle, you receive your total investment along with an additional increment, providing an excellent opportunity to save systematically and purchase jewelry at the end of the term.
                  </p>
                  <Link to="/futureplus" className="read-more-link">Read More</Link>
                </div>
              </div>
            </div>

            <div className="scheme-item">
              <div className="scheme-item-content">
                <div className="scheme-item-image">
                  <img src="/assets/schemes/dailycollection.jpg" alt="MKM Daily Collection Scheme" />
                </div>
                <div className="scheme-item-text">
                  <h4 className="scheme-title">MKM Daily Collection Scheme</h4>
                  <p className="scheme-description">
                    A daily investment option where you can save money consistently and accumulate it as gold. This plan is ideal for those who prefer small, frequent contributions to build their gold reserves gradually.
                  </p>
                  <Link to="/dailycollection" className="read-more-link">Read More</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="schemes-section">
          <h3 className="schemes-subheading">Convenience Through Technology</h3>
          <p className="schemes-description">
            All these schemes can be managed effortlessly using the MKM app, making it easier for you to track your investments, manage contributions, and stay updated on gold prices. Invest smartly and securely with the MKM Saving Schemes and turn your dreams of owning gold into a reality!
          </p>
        </section>
      </div>
    </div>
  );
};

export default Schemes;
