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
              src="https://media.istockphoto.com/id/489809469/photo/bbq-chicken-pizza.jpg?s=612x612&w=0&k=20&c=kB3xRU4-A7fJ9iYpIzlOqSiLX4f6OIath45yFOmqjxQ="
              width="200"
              height="200"
              alt="Hyderabadi Chicken Fry"
            />
            <h5>CHICKEN PIZZA</h5>
            <p>
              <button className="btn btn-secondary" type="button">
                RS.120
              </button>
            </p>
          </div>
          <div className="col-md-4" align="center">
          <img
              className="bd-placeholder-img rounded-circle"
              src="https://img.freepik.com/premium-photo/mutton-lamb-biriyani-with-basmati-rice-served-bowl-moody-background_466689-72545.jpg?w=2000"
              width="200"
              height="200"
              alt="LEG PIECES"
            />
            <h5>MUTTON BOWL RICE</h5>
            <p>
              <button className="btn btn-secondary" type="button">
                RS.100
              </button>
            </p>
          </div>
          <div className="col-md-4" align="center">
          <img
              className="bd-placeholder-img rounded-circle"
              src="https://www.archanaskitchen.com/images/archanaskitchen/1-Author/KarthikaKrishnan/Kongunad_Chicken_Fry_400.jpg"
              width="200"
              height="200"
              alt="MUTTON SAMOSA"
            />
            <h5>KONGUNADU CHICKEN FRY</h5>
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
          <img class="bd-placeholder-img rounded-circle" src="https://mariasmenu.com/wp-content/uploads/Kadai-Chicken.png" width="200" height="200" alt="JAPAN PANEER"/>
<h5>KADAAI CHICKEN</h5>
<p><button className="btn btn-secondary" type="button">RS.130</button></p>
          </div>
          <div className="col-md-4" align="center">
          <img class="bd-placeholder-img rounded-circle" src="https://www.yummytummyaarthi.com/wp-content/uploads/2023/05/1-1-scaled.jpg" width="200" height="200" alt="CHICKEN 65"/>
<h5>JAPAN CHICKEN</h5>
<p><button className="btn btn-secondary" type="button">RS.100</button></p>
          </div>
          <div className="col-md-4" align="center">
          <img class="bd-placeholder-img rounded-circle" src="https://thumbs.dreamstime.com/b/seafood-platter-dipping-sauce-15196062.jpg?w=768" width="200" height="200" alt="PRAWN TIKKA"/>
    <h5>SEA FOOD MEALS</h5>
    <p><button className="btn btn-secondary" type="button">RS.110</button></p>
          </div>
        </div>
        {/* Repeat for other sets of three images */}
        {/* Third set of three images */}
        <div className="row">
          <div className="col-md-4" align="center">
          <img class="bd-placeholder-img rounded-circle" src="https://media.istockphoto.com/id/1345624336/photo/chicken-biriyani.jpg?s=612x612&w=0&k=20&c=adU_N0P-1SKMQLZu5yu7aPknfLLgbViI8XILqLP92A4=" width="200" height="200" alt="SMOKKY CHICKEN"/>
        <h5>CHICKEN BRIYANI</h5>
        <p><button className="btn btn-secondary" type="button">RS.140</button></p>
        
          </div>
          <div className="col-md-4" align="center">
          <img class="bd-placeholder-img rounded-circle" src="https://media.istockphoto.com/id/488481490/photo/fish-biryani-with-basmati-rice-indian-food.jpg?s=612x612&w=0&k=20&c=9xEw3VOQSz9TP8yQr60L47uExyKF9kogRhQdlghlC00=" width="200" height="200" alt="CHICKEN MOMOS"/>
            <h5>MUTTON BRIYANI</h5>
            <p><button className="btn btn-secondary" type="button">RS.120</button></p>
          </div>
          <div className="col-md-4" align="center">
          <img class="bd-placeholder-img rounded-circle" src="https://t3.ftcdn.net/jpg/01/14/51/60/360_F_114516029_Z2B6FO30AB6ZR3v9WHXjpXmJScaiLtzk.jpg" width="200" height="200" alt="CHICKEN FRY"/>
                <h5>HYDERABADI CHICKEN BRIYANI</h5>
                <p><button className="btn btn-secondary" type="button">RS.150</button></p>
          </div>
        </div>
        <div className="row">

                <div class="col-md-4" align="center">
                    <img class="bd-placeholder-img rounded-circle" src="https://img.buzzfeed.com/buzzfeed-static/static/2023-02/22/11/asset/3f59c03fc224/sub-buzz-540-1677066963-3.jpg?downsize=900:*&output-format=auto&output-quality=auto" width="200" height="200" alt="CHICKEN GRILL"/>
                    <h5>CHICKEN MEALS</h5>
                    <p><button className="btn btn-secondary" type="button">RS.180</button></p>
                    </div>
                    <div class="col-md-4" align="center">
                        <img class="bd-placeholder-img rounded-circle" src="https://4.bp.blogspot.com/-1uvV4514CSM/VrMxz2TeaXI/AAAAAAAAjVw/zaZ5YvWDknI/s1600/DSC_0248.JPG" width="200" height="200"alt="CRISPY POTATO FRY"/>
                        <h5>MUTTON MEALS</h5>
                        <p><button className="btn btn-secondary" type="button">RS.120</button></p>
                        </div>
                        <div class="col-md-4" align="center">
                            <img class="bd-placeholder-img rounded-circle" src="https://cookwithashu.files.wordpress.com/2015/09/wpid-cymera_20150920_144858.jpg" width="200" height="200" alt="LASANGA"/>
                            <h5>FISH MEALS</h5>
                            <p><button className="btn btn-secondary" type="button">RS.190</button></p>
                            </div>
          </div>
      </div>
    </div>
  );
}

export default Menu;