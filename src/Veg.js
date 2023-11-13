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
              src="https://images.unsplash.com/photo-1547496502-affa22d38842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGVhbHRoeSUyMGJvd2x8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
              width="200"
              height="200"
              alt="Hyderabadi Chicken Fry"
            />
            <h5>HEALTHY VEG BOWL</h5>
            <p>
              <button className="btn btn-secondary" type="button">
                RS.120
              </button>
            </p>
          </div>
          <div className="col-md-4" align="center">
          <img
              className="bd-placeholder-img rounded-circle"
              src="https://imgmedia.lbb.in/media/2019/08/5d4b30614f4e0b75c765e199_1565208673472.jpg?w=1200&h=628&fill=blur&fit=fill"
              width="200"
              height="200"
              alt="LEG PIECES"
            />
            <h5>VEG COMBO</h5>
            <p>
              <button className="btn btn-secondary" type="button">
                RS.100
              </button>
            </p>
          </div>
          <div className="col-md-4" align="center">
          <img
              className="bd-placeholder-img rounded-circle"
              src="https://media.istockphoto.com/id/1203065625/photo/baked-spaghetti-and-beef-pie.jpg?s=612x612&w=0&k=20&c=Fv81CZGc7jIqDNEkYbdMeT5McfIgt7SdzqR9S5unBH0="
              width="200"
              height="200"
              alt="MUTTON SAMOSA"
            />
            <h5>CHEESY SPAGATTI</h5>
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
          <img class="bd-placeholder-img rounded-circle" src="https://media.istockphoto.com/id/1292617686/photo/healthy-and-tasty-paneer-fried-rice-made-of-rice-mixed-veggies-and-paneer-served-in-bowl-over.jpg?s=612x612&w=0&k=20&c=frc5aSMeFo4zjjP8fo497lhKJBr6VWxyByFAHqPjpj4=" width="200" height="200" alt="JAPAN PANEER"/>
<h5>JAPAN PANEER RICE</h5>
<p><button className="btn btn-secondary" type="button">RS.130</button></p>
          </div>
          <div className="col-md-4" align="center">
          <img class="bd-placeholder-img rounded-circle" src="https://www.kannammacooks.com/wp-content/uploads/Chettinad-beetroot-kola-urundai-recipe.jpg" width="200" height="200" alt="CHICKEN 65"/>
<h5>VEG KOLA URUNDAI</h5>
<p><button className="btn btn-secondary" type="button">RS.100</button></p>
          </div>
          <div className="col-md-4" align="center">
          <img class="bd-placeholder-img rounded-circle" src="https://madscookhouse.com/wp-content/uploads/2020/10/Paneer-Butter-Masala-Nut-Free.jpg" width="200" height="200" alt="PRAWN TIKKA"/>
    <h5>PANEER BUTTER MASALA</h5>
    <p><button className="btn btn-secondary" type="button">RS.110</button></p>
          </div>
        </div>
        {/* Repeat for other sets of three images */}
        {/* Third set of three images */}
        <div className="row">
          <div className="col-md-4" align="center">
          <img class="bd-placeholder-img rounded-circle" src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/6/7/3/FNM_070111-WN-Dinners-028_s4x3.jpg.rend.hgtvcom.1280.960.suffix/1371597731887.jpeg" width="200" height="200" alt="SMOKKY CHICKEN"/>
        <h5>SMOKKY OKRA FRY </h5>
        <p><button className="btn btn-secondary" type="button">RS.140</button></p>
        
          </div>
          <div className="col-md-4" align="center">
          <img class="bd-placeholder-img rounded-circle" src="https://static.toiimg.com/thumb/60060757.cms?width=1200&height=900" width="200" height="200" alt="CHICKEN MOMOS"/>
            <h5>BABYCORN FRY</h5>
            <p><button className="btn btn-secondary" type="button">RS.120</button></p>
          </div>
          <div className="col-md-4" align="center">
          <img class="bd-placeholder-img rounded-circle" src="https://www.flavourhome.com/wp-content/uploads/2020/08/b2-3.jpg" width="200" height="200" alt="CHICKEN FRY"/>
                <h5>PANEER FRY</h5>
                <p><button className="btn btn-secondary" type="button">RS.150</button></p>
          </div>
        </div>
        <div className="row">

                <div class="col-md-4" align="center">
                    <img class="bd-placeholder-img rounded-circle" src="https://www.sharmispassions.com/wp-content/uploads/2020/03/WhiteSaucePasta6-500x375.jpg" width="200" height="200" alt="CHICKEN GRILL"/>
                    <h5> WHITE SAUCE PASTA</h5>
                    <p><button className="btn btn-secondary" type="button">RS.180</button></p>
                    </div>
                    <div class="col-md-4" align="center">
                        <img class="bd-placeholder-img rounded-circle" src="https://i0.wp.com/myvegetarianroots.com/wp-content/uploads/2019/11/DSC_0037-1.jpeg?fit=%2C&ssl=1" width="200" height="200"alt="CRISPY POTATO FRY"/>
                        <h5>VEG LASANGA</h5>
                        <p><button className="btn btn-secondary" type="button">RS.120</button></p>
                        </div>
                        <div class="col-md-4" align="center">
                            <img class="bd-placeholder-img rounded-circle" src="https://t4.ftcdn.net/jpg/05/15/91/77/360_F_515917790_cX2X7WWrYNLXPYTaQphUWFma39FM4wbD.jpg" width="200" height="200" alt="LASANGA"/>
                            <h5>MEAL COMBO</h5>
                            <p><button className="btn btn-secondary" type="button">RS.190</button></p>
                            </div>
          </div>
      </div>
    </div>
  );
}

export default Menu;