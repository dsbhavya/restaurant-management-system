import React from 'react';
import './Testimonial.css';
const Testimonial = () => {
  return (
    <section id="testimonial">
      <div className="container">
        <div className="testimonial__wrapper" data-aos="fade-up">
          <h2 className="testimonial__title">What Our Customers Say</h2>
          <div className="testimonial__items__wrapper">
            <TestimonialItem
              imgSrc="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
              name="Sayed Ahmed"
              starsSrc="https://github.com/ShaifArfan/shaif-s-cuisine/blob/main/images/3star.png?raw=true"
              text="Visited Shaif’s Cuisine with friends last Sunday. Really lovely meal and very warm welcome – we would recommend this lovely restaurant and will try to go back again"
            />
            <TestimonialItem
              imgSrc="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
              name="Arfan"
              starsSrc="https://github.com/ShaifArfan/shaif-s-cuisine/blob/main/images/3star.png?raw=true"
              text="from start to finish, lovely experience. Hostess very pleasant, wait staff john was wonderful and attentive, food plentiful and delicious, desserts out of this world"
            />
            <TestimonialItem
              imgSrc="https://st3.depositphotos.com/1017228/18878/i/450/depositphotos_188781580-stock-photo-handsome-cheerful-young-man-standing.jpg"
              name="Nishat"
              starsSrc="https://github.com/ShaifArfan/shaif-s-cuisine/blob/main/images/3star.png?raw=true"
              text="A warm and friendly welcome with fantastic customer service. Always great, tasty food served piping hot- just the way we love it . Would definitely recommend. We have been repeatedly and it's consistently exceeded our expectations"
            />
            <TestimonialItem
              imgSrc="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
              name="Hussain"
              starsSrc="https://github.com/ShaifArfan/shaif-s-cuisine/blob/main/images/3star.png?raw=true"
              text="I would just like to say thank you for the excellent service we received in your restaurant last night. Although the place was very busy we still had an excellent time and really appreciated the live entertainment too!"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialItem = ({ imgSrc, name, starsSrc, text }) => {
  return (
    <div className="testimonial__item">
      <div className="testimonial__item__img">
        <img src={imgSrc} alt={name} />
      </div>
      <div className="testimonial__item__info">
        <h3 className="testimonial__item__name">{name}</h3>
        <div className="testimonial__item__stars">
          <img src={starsSrc} alt="3 star" />
        </div>
        <p className="testimonial__item__text">{text}</p>
      </div>
    </div>
  );
};

export default Testimonial;
