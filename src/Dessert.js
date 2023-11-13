import React from 'react';
 // Import your CSS file here

function Dessert() {
  return (
    
    <div>
      
      <div className="bgimg-1"></div>
      <div className="container">
        <div className="row">
          {/* First set of three images */}
          <div className="col-md-4" align="center">
      
            <img
              className="bd-placeholder-img rounded-circle"
src="https://media.istockphoto.com/id/1167344045/photo/cheesecake-slice-new-york-style-classical-cheese-cake.jpg?s=612x612&w=0&k=20&c=y3eh7cFEefAYxB_5Ow2n1OJZML_PqFOdnB5Z9nvXdgw="              width="200"
              height="200"
              alt="Chesse cake"
            />
            <h5>CHESSE CAKE</h5>
            <p>
              <button className="btn btn-secondary" type="button">
                RS.120
              </button>
            </p>
          </div>
          <div className="col-md-4" align="center">
          <img
              className="bd-placeholder-img rounded-circle"
              src="https://cdn.pixabay.com/photo/2017/07/28/14/28/macarons-2548818_640.jpg"
              width="200"
              height="200"
              alt="LEG PIECES"
            />
            <h5>MACROONS</h5>
            <p>
              <button className="btn btn-secondary" type="button">
                RS.100
              </button>
            </p>
          </div>
          <div className="col-md-4" align="center">
          <img
              className="bd-placeholder-img rounded-circle"
              src="https://www.sugarsaltmagic.com/wp-content/uploads/2021/11/Frosted-Chocolate-Sprinkle-Donuts-3FEAT.jpg"
              width="200"
              height="200"
              alt="MUTTON SAMOSA"
            />
            <h5>CHOCOLATE DONUT</h5>
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
          <img class="bd-placeholder-img rounded-circle" src="https://media.istockphoto.com/id/544716244/photo/warm-chocolate-lava-cake-with-molten-center-and-red-currants.jpg?s=612x612&w=0&k=20&c=i1rRa1x7D1pu-INKabmC21BaU9MC8ZRQdcC7dBLdzUo=" width="200" height="200" alt="JAPAN PANEEr"/>
<h5>CHOCO LAVA</h5>
<p><button className="btn btn-secondary" type="button">RS.130</button></p>
          </div>
          <div className="col-md-4" align="center">
          <img class="bd-placeholder-img rounded-circle" src="https://thumbs.dreamstime.com/b/chocolate-ice-cream-cake-selective-focus-chocolate-ice-cream-cake-175643276.jpg" width="200" height="200" alt="CHICKEN 65"/>
<h5>ICE CAKE</h5>
<p><button className="btn btn-secondary" type="button">RS.100</button></p>
          </div>
          <div className="col-md-4" align="center">
          <img class="bd-placeholder-img rounded-circle" src="https://img.freepik.com/free-photo/close-up-tasty-chocolate-mousse-ready-be-served_23-2148622323.jpg" width="200" height="200" alt="PRAWN TIKKA"/>
    <h5>CHOCO MOUSSE</h5>
    <p><button className="btn btn-secondary" type="button">RS.110</button></p>
          </div>
        </div>
        {/* Repeat for other sets of three images */}
        {/* Third set of three images */}
        <div className="row">
          <div className="col-md-4" align="center">
          <img class="bd-placeholder-img rounded-circle" src="https://www.archanaskitchen.com/images/archanaskitchen/Dessert_Puddings/Creme_caramel_custard_pudding_caramel_custard_Recipe_shutterstock_170464598.jpg" width="200" height="200" alt="SMOKKY CHICKEN"/>
        <h5>CARAMEL BUDDING</h5>
        <p><button className="btn btn-secondary" type="button">RS.140</button></p>
        
          </div>
          <div className="col-md-4" align="center">
          <img class="bd-placeholder-img rounded-circle" src="https://m.media-amazon.com/images/I/51EzItSle4L._AC_UF894,1000_QL80_.jpg" width="200" height="200" alt="CHICKEN MOMOS"/>
            <h5>CHOCO TIKKA</h5>
            <p><button className="btn btn-secondary" type="button">RS.120</button></p>
          </div>
          <div className="col-md-4" align="center">
          <img class="bd-placeholder-img rounded-circle" src="https://www.foodandwine.com/thmb/V1OEgtLQGUv_w2Fvm40WMLsJ4rk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Indulgent-Hot-Chocolate-FT-RECIPE0223-fd36942ef266417ab40440374fc76a15.jpg" width="200" height="200" alt="CHICKEN FRY"/>
                <h5>HOT CHOCOLATE</h5>
                <p><button className="btn btn-secondary" type="button">RS.150</button></p>
          </div>
        </div>
        <div className="row">

                <div class="col-md-4" align="center">
                    <img class="bd-placeholder-img rounded-circle" src="https://media.istockphoto.com/id/585303220/photo/sprinkles.jpg?s=612x612&w=0&k=20&c=WOiT7UM38wLFUr6OV34O3uvN6e4_aoIAaypkgG_7ze0=" width="200" height="200" alt="CHICKEN GRILL"/>
                    <h5>CUP CAKES</h5>
                    <p><button className="btn btn-secondary" type="button">RS.180</button></p>
                    </div>
                    <div class="col-md-4" align="center">
                        <img class="bd-placeholder-img rounded-circle" src="https://media.istockphoto.com/id/1212990893/photo/flat-lay-of-yummy-homemade-belgian-waffle-topping-with-dark-chocolate-syrup-cocoa-powder-and.jpg?s=612x612&w=0&k=20&c=u1nRKT71AIHqd4wWU6R3iuhJNyyhIaZoU5hqLpnnEoY=" width="200" height="200"alt="CRISPY POTATO FRY"/>
                        <h5>CHOCO WAFFLE</h5>
                        <p><button className="btn btn-secondary" type="button">RS.120</button></p>
                        </div>
                        <div class="col-md-4" align="center">
                            <img class="bd-placeholder-img rounded-circle" src="https://media.istockphoto.com/id/1400292359/photo/ice-cream-cones-bouquet.webp?b=1&s=170667a&w=0&k=20&c=WWRPlrH9XrlZ74wkUhiK5S6nzm9O0vjRDpSJ-CHAC70=" width="200" height="200" alt="LASANGA"/>
                            <h5>ICE CREAMS</h5>
                            <p><button className="btn btn-secondary" type="button">RS.190</button></p>
                            </div>
          </div>
      </div>
    </div>
  );
}

export default Dessert;