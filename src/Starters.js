import React from 'react';
import './Menu.css'; // Import your CSS file here

function Menu() {
  return (
    
    <div>
      
      <div className="bgimg-1"></div>
      <div className="container">
        <div className="row">
          {/* First set of three images */}
          <div className="col-md-4" align="center">
      
            <img
              className="bd-placeholder-img rounded-circle"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqg1hDjEDivKVGozvg1rP6iVKf9iisGjSv_tD2IbCW6Q&usqp=CAU&ec=48665699"
              width="200"
              height="200"
              alt="Hyderabadi Chicken Fry"
            />
            <h5>HYDERABADI CHICKEN FRY</h5>
            <p>
              <button className="btn btn-secondary" type="button">
                RS.120
              </button>
            </p>
          </div>
          <div className="col-md-4" align="center">
          <img
              className="bd-placeholder-img rounded-circle"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX4Vbx9p9CPZaOFnxCYNmeNzqjSPzX1paOAYbZ4ykzeQ&usqp=CAU&ec=48665699"
              width="200"
              height="200"
              alt="LEG PIECES"
            />
            <h5>LEG PIECES</h5>
            <p>
              <button className="btn btn-secondary" type="button">
                RS.100
              </button>
            </p>
          </div>
          <div className="col-md-4" align="center">
          <img
              className="bd-placeholder-img rounded-circle"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX5jJdSsj_Y_p6vJoou2e57Ck-J3ixx6FFloXWLxZULw&usqp=CAU&ec=48665699"
              width="200"
              height="200"
              alt="MUTTON SAMOSA"
            />
            <h5>MUTTON SAMOSA</h5>
            <p>
              <button className="btn btn-secondary" type="button">
                RS.150
              </button>
            </p>
          </div>
        </div>
        {/* Repeat the same structure for other sets of three images */}
        {/* Second set of three images */}
        <div className="row">
          <div className="col-md-4" align="center">
          <img class="bd-placeholder-img rounded-circle" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWbPStQ_MCoatQCyNrjKa5NBH5UEmMtIBisCETds-oHA&usqp=CAU&ec=48665699" width="200" height="200" alt="JAPAN PANEER"/>
<h5>JAPAN PANEER</h5>
<p><button className="btn btn-secondary" type="button">RS.130</button></p>
          </div>
          <div className="col-md-4" align="center">
          <img class="bd-placeholder-img rounded-circle" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1Ynzqzu0gq0T43ESYXbv4MzOrxmD98aNX-O3b4bDyiQ&usqp=CAU&ec=48665699" width="200" height="200" alt="CHICKEN 65"/>
<h5>CHICKEN 65</h5>
<p><button className="btn btn-secondary" type="button">RS.100</button></p>
          </div>
          <div className="col-md-4" align="center">
          <img class="bd-placeholder-img rounded-circle" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTafRXaWzTq1g2WoPlrPnkJtqcGlHTALWS8_-p3M5oixQ&usqp=CAU&ec=48665699" width="200" height="200" alt="PRAWN TIKKA"/>
    <h5>PRAWN TIKKA</h5>
    <p><button className="btn btn-secondary" type="button">RS.110</button></p>
          </div>
        </div>
        {/* Repeat for other sets of three images */}
        {/* Third set of three images */}
        <div className="row">
          <div className="col-md-4" align="center">
          <img class="bd-placeholder-img rounded-circle" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCpXpbK9kJoXKxPM5OqEfxACyVVDubYPG86jL6VCzQUQ&usqp=CAU&ec=48665699" width="200" height="200" alt="SMOKKY CHICKEN"/>
        <h5>SMOKKY CHICKEN</h5>
        <p><button className="btn btn-secondary" type="button">RS.140</button></p>
        
          </div>
          <div className="col-md-4" align="center">
          <img class="bd-placeholder-img rounded-circle" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnCIBpVfG7Wh93oDY7vjlYd-D1p6P8FfP-ijNxaSizEA&usqp=CAU&ec=48665699" width="200" height="200" alt="CHICKEN MOMOS"/>
            <h5>CHICKEN MOMOS</h5>
            <p><button className="btn btn-secondary" type="button">RS.120</button></p>
          </div>
          <div className="col-md-4" align="center">
          <img class="bd-placeholder-img rounded-circle" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRcLqhbmn2GlMOPFK6rtOX-2BVCUq0gLmDyj_6X6BYFA&usqp=CAU&ec=48665699" width="200" height="200" alt="CHICKEN FRY"/>
                <h5>CHICKEN FRY</h5>
                <p><button className="btn btn-secondary" type="button">RS.150</button></p>
          </div>
        </div>
        <div className="row">

                <div class="col-md-4" align="center">
                    <img class="bd-placeholder-img rounded-circle" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHKVJLmGqamYqOIaAl8PNkZ9DD9hdbEfDscnhQenUUig&usqp=CAU&ec=48665699" width="200" height="200" alt="CHICKEN GRILL"/>
                    <h5>CHICKEN GRILL</h5>
                    <p><button className="btn btn-secondary" type="button">RS.180</button></p>
                    </div>
                    <div class="col-md-4" align="center">
                        <img class="bd-placeholder-img rounded-circle" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2p5GgkXwu4OzZmjoY6DMSr4z59UMPaFUIiLs8gYds8g&usqp=CAU&ec=48665699" width="200" height="200"alt="CRISPY POTATO FRY"/>
                        <h5>CRISPY POTATO FRY</h5>
                        <p><button className="btn btn-secondary" type="button">RS.120</button></p>
                        </div>
                        <div class="col-md-4" align="center">
                            <img class="bd-placeholder-img rounded-circle" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdKPHAlS9gXHny998W3RYCZhaO5TniW5nRDpPv4e0kGQ&usqp=CAU&ec=48665699" width="200" height="200" alt="LASANGA"/>
                            <h5>LASANGA</h5>
                            <p><button className="btn btn-secondary" type="button">RS.190</button></p>
                            </div>
          </div>
      </div>
    </div>
  );
}

export default Menu;
