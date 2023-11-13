import React from 'react';
import './Specials.css'; // Import your CSS file here

function Meal({ imageSrc, alt, tags, title, attributes }) {
  return (
    <div className="meal">
      <img src={imageSrc} className="meal-img" alt={alt} />
      <div className="meal-content">
        <div className="meal-tags">
          {tags.map((tag, index) => (
            <span key={index} className={`tag tag--${tag.toLowerCase()}`}>
              {tag}
            </span>
          ))}
        </div>
        <p className="meal-title">{title}</p>
        <ul className="meal-attributes">
          {attributes.map((attribute, index) => (
            <li key={index} className="meal-attribute">
              <ion-icon className="meal-icon" name={attribute.icon}></ion-icon>
              <span>
                <strong>{attribute.text}</strong>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function MealsSection() {
  return (
    <section className="section-meals">
      <div className="container grid grid--3-cols margin-right-md">
        <Meal
          imageSrc="https://github.com/erenburuk/html-css-course/blob/1aacbb283eed0f760ab9f905e4ad5099cfa11204/07-Omnifood-Desktop/img/meals/meal-1.jpg?raw=true"
          alt="Japanese Gyozas"
          tags={['Vegetarian']}
          title="Japanese Gyozas"
          attributes={[
            { icon: 'flame-outline', text: '650 calories' },
            { icon: 'restaurant-outline', text: 'NutriScore ® 74' },
            { icon: 'star-outline', text: '4.9 rating (537)' },
          ]}
        />
        <Meal
          imageSrc="https://github.com/erenburuk/html-css-course/blob/main/07-Omnifood-Desktop/img/meals/meal-2.jpg?raw=true"
          alt="Avocado Salad"
          tags={['Vegan', 'Paleo']}
          title="Avocado Salad"
          attributes={[
            { icon: 'flame-outline', text: '400 calories' },
            { icon: 'restaurant-outline', text: 'NutriScore ® 92' },
            { icon: 'star-outline', text: '4.8 rating (441)' },
          ]}
        />
        <Meal
          imageSrc="https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="Thai Red Curry"
          tags={['Vegan']}
          title="Thai Red Curry"
          attributes={[
            { icon: 'flame-outline', text: '450 calories' },
            { icon: 'restaurant-outline', text: 'NutriScore ® 86' },
            { icon: 'star-outline', text: '4.4 rating (349)' },
          ]}
        />
      </div>
    </section>
  );
}

export default MealsSection;
