import React from 'react';

import './Blog.css';
import Navbar from './Navbar';
const Venue = () => {
  const size = {
     fontSize: '28px',
    padding: '10px'
  };
  const sizeH = {
     fontSize: '30px',
  };
  return (
    <div><Navbar/>
    <div className="venue-container">
      
    <div className="grid-containerV">
      <div className="grid-itemV">
        <img src="https://bridebox.com/wp-content/uploads/2014/08/wedding-party-animated-image-1.gif" alt="oops!"  />
      </div>
      <div className="grid-itemV">
        <p style={size}>R E C E P T I O N</p>
        <p style={size}>Experience the charm of our banquet hall facilities, where every detail is designed to create a memorable ambiance for your special occasions. Banquet halls are often a one-stop-shop for wedding venue selection with all your boxes checked especially with a gust list planned between 150 to 800 people. </p>
      </div>
    </div>
    <div className="grid-containerV">
    <div className="grid-itemV">
        <p style={size}>O F F I C E M E E T I N G S</p>
        <p style={size}>Holding a restaurant meeting is typically done by either scheduling a meeting with all employees on a predetermined day, or by conducting a pre-shift meeting. A formal meeting with all employees is usually reserved for introducing new changes in policy, addressing major problems and talking about new ideas.</p>
      </div>
      <div className="grid-itemV">
        <img src="https://media2.giphy.com/media/9uIvimXZf5ZK9dOOWc/giphy.gif" alt="oops!"  />
      </div>
    </div>
    <div className="grid-containerV">
      <div className="grid-itemV">
        <img src="https://images.ctfassets.net/3dar4x4x74wk/3BDPNKqLEoTE8pCZFpwgRy/728eabdda83f3775a98f290df15c1a94/ME_Birthdays_LandingPage-Header-GIF.gif?w=808" alt="oops!"  />
      </div>
      <div className="grid-itemV">
      <p style={sizeH}>B I R T H D A Y S</p>
        <p style={size}>A restaurant has the perfect ambiance and décor for celebrating any joyous occasion with your friends, and family. Catering would be easy and professional and often the restaurants would be having a bar for fulfilling the requirements of the guests.</p>
      </div>
    </div>

    <div className="grid-containerV">
    <div className="grid-itemV">
    <p style={sizeH}>A N N I V E R S A R Y</p>
        <p style={size}>The whole experience marked a memorable historic moment in my life. With the hearty breakfast, casual lunches, and intimate candlelit dinners, it marks a magnificent experience. The relaxing evenings in the cozy guest rooms with thick cotton bathrobes, bedside sweets, are just terrifically fascinating.</p>
      </div>
      <div className="grid-itemV">
        <img src="https://www.wishesquotesimages.com/wp-content/uploads/2022/06/happy-anniversary-love-gif-image-2022.gif" alt="oops!"  />
      </div>
    </div>
    <div className="grid-containerV">
      <div className="grid-itemV">
        <img src="https://cdn.shopify.com/s/files/1/0506/9343/9683/files/unnamed_480x480.gif?v=1612172268" alt="oops!"  />
      </div>
      <div className="grid-itemV">
      <p style={sizeH}>P A R T I E S</p>
        <p style={size}>A restaurant has the perfect ambiance and décor for celebrating any joyous occasion with your friends, and family. Catering would be easy and professional and often the restaurants would be having a bar for fulfilling the requirements of the guests.</p>
      </div>
    </div>

    <div className="grid-containerV">
    <div className="grid-itemV">
    <p style={sizeH}>B A B Y S H O W E R</p>
        <p style={size}>Baby shower is a fun and emotional event and the three major things which should be involved in the event are games, food and gifts. This is the occasion where moms want to look the best and flaunt her beautiful baby bump. </p>
      </div>
      <div className="grid-itemV">
        <img src="https://images.bhaskarassets.com/webp/thumb/512x0/web2images/521/2023/05/16/25-pwd_1684241915.gif" alt="oops!"  />
      </div>
    </div>
    </div>
    </div>
      );
};

export default Venue;

