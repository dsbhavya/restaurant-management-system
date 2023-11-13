import React from 'react';

const OurStory = () => {
  return (
    <section id="ourStory" data-aos="fade-up">
      <div className="container">
        <div className="ourStory__wrapper">
          <div className="ourStory__images">
            <div className="ourStory__img">
              <img src="https://github.com/ShaifArfan/shaif-s-cuisine/blob/main/images/ourStoryImg.png?raw=true" alt="shaif's cuisine" />
            </div>
            <div className="ourStory__img">
              <img src="https://github.com/ShaifArfan/shaif-s-cuisine/blob/main/images/ourGoals_img2.png?raw=true" alt="shaif's cuisine" />
            </div>
          </div>
          <div className="ourStory__info">
            <h3 className="ourStory__title">
              Our Story
            </h3>
            <p className="ourStory__subtitle">
              It's all started since 1998
            </p>
            <p className="ourStory__text">
              Welcome to Yummy's Cuisine. We take pride in delivering warm, friendly service and creating mouth-watering
              culinary delights for all. Using only the freshest locally sourced ingredients, we’ll ensure you have a
              dining
              experience to remember.
              <br /><br />
              Since 1998, we are the perfect place for a romantic meal for two, a catch-up with friends, family parties,
              business meetings, and bringing loved ones together. With comfortable surroundings, affordable prices, and
              seating for up to 65 guests, we can cater for all occasions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
