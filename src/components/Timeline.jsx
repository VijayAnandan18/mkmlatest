import React from 'react';
import './Timeline.css';

const Timeline = () => {
  return (
    <div className="timeline-container">
      <div className="two">
        <h1>A Legacy of Excellence: Our Journey Through the Years</h1>
      </div>
      <div className="timeline">
        <div className="timeline-event">
          <div className="date">2024</div>
          <div className="content">
            <div className="title">New Shop Opening</div>
            <div className="description" style={{ textAlign: 'justify' }}>
              The new shop was inaugurated in Sripuram, Tirunelveli, expanding the brand's presence in the region.
            </div>
          </div>
        </div>
        <div className="timeline-event">
          <div className="date">2022</div>
          <div className="content">
            <div className="title">Future Vision</div>
            <div className="description" style={{ textAlign: 'justify' }}>
              MKM Thangamaligai LLP remains committed to fostering partnerships with professionals and investors to shape a successful future.
            </div>
          </div>
        </div>
        <div className="timeline-event">
          <div className="date">2017</div>
          <div className="content">
            <div className="title">Commitment to Innovation</div>
            <div className="description" style={{ textAlign: 'justify' }}>
              MKM Thangamaligai LLP continued to grow with a strong focus on innovation, quality, and strategic partnerships.
            </div>
          </div>
        </div>
        <div className="timeline-event">
          <div className="date">2012</div>
          <div className="content">
            <div className="title">Part of Team NAVRATNA THANGAMALIGAI</div>
            <div className="description" style={{ textAlign: 'justify' }}>
              The brand joined the esteemed Team NAVRATNA THANGAMALIGAI, with stores in India and the UAE, including Pattukottai, Karaikudi, Palani, Cumbum, Dubai, and Ajman.
            </div>
          </div>
        </div>
        <div className="timeline-event">
          <div className="date">2002</div>
          <div className="content">
            <div className="title">Expansion and Growth</div>
            <div className="description" style={{ textAlign: 'justify' }}>
              MKM Jewellers evolved into MKM Thangamaligai LLP, building on over 25 years of experience in the jewellery industry.
            </div>
          </div>
        </div>
        <div className="timeline-event">
          <div className="date">1996</div>
          <div className="content">
            <div className="title">Inception of MKM Jewellers</div>
            <div className="description" style={{ textAlign: 'justify' }}>
              MKM Jewellers opened its first showroom in Tirunelveli and quickly gained a reputation as one of the best in South Tamil Nadu.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;

