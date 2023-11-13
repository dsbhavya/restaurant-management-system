import React, { useState } from 'react';
import "./Gallery.css";
import Navbar from './Navbar';
function ImageGallery() {
  
  const [activeImage, setActiveImage] = useState(
    ''
  );

  const smallImages = [
    'https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L2EwMDkta2Fib29tcGljcy0wMDEuanBn.jpg',
    'https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L2stcGYtcG9tLTEyNDIuanBn.jpg',
    'https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvYTAwOS1rYWJvb21waWNzLTE3Ny5qcGc.jpg',
    'https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvYTAxOS1qYWt1YmstMTU5MS1idXJnZXItOS5qcGc.jpg',
    'https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdXB3azYxODUzNzk1LXdpa2ltZWRpYS1pbWFnZS1rb3djdHl1dC5qcGc.jpg',
    'https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvay0xNDUtZXllLTAxNDUzMzEuanBn.jpg',
    'https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvYTAwOS1rYWJvb21waWNzLTUyMC5qcGc.jpg',
    'https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvay1wLTE3MC1jaGltLTE2Mjcta3plbWlpcDYuanBn.jpg',
    'https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdXB3azYxNjYwMzM4LXdpa2ltZWRpYS1pbWFnZS1rb3diMWE3Ny5qcGc.jpg',
    'https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvay1wZi1wb20tMTIyOC5qcGc.jpg',
    'https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvay0xNDUtcG9tLTkwMzguanBn.jpg',
    'https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3AtMzA0LWppcjAzNTYzMzc1NjU2NDNfMS5qcGc.jpg',
  ];

  const toggleImage = (smallImage) => {
    setActiveImage(smallImage);
  };

  return (
    <section className="gallery">
      <Navbar/>
      <div className="product">
        <div className="product-small-image">
          {smallImages.map((smallImage, index) => (
            <img
              key={index}
              className={`hvr-shrink ${activeImage === smallImage ? 'active' : ''}`}
              src={smallImage}
              alt=""
              onClick={() => toggleImage(smallImage)}
            />
          ))}
        </div>

        <div className="product-big-image">
          <img src={activeImage} alt="" id="big-image" />
        </div>
      </div>
    </section>
  );
}

export default ImageGallery;
