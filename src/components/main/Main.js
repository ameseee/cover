import React from 'react';
// import ContactCards from '../contactCards/ContactCards';

const Main = (props) => {
console.log(props);
  return (
    <div className="main">
      <main>
        <section className="emergency-section">
          <h3 className="emergency-title">Emergency</h3>
          <button className="emergency-btn">TEXT 911</button>
        </section>

        <section className="contacts-section">
          <h3 className="section-title">Contacts</h3>

          <article className="contact-card">
            <h4 className="contact-card-name">hard coded friend1</h4>
            <button className="custom-text-btn">send custom text</button>
            <button className="location-now-btn">send my location NOW</button>
          </article>

          <article className="contact-card">
            <h4 className="contact-card-name">hard coded friend2</h4>
            <button className="custom-text-btn">send custom text</button>
            <button className="location-now-btn">send my location NOW</button>
          </article>

{/* dont i want to go through all the contacts in firebase, filter out the ones who have the currentUserId === userId, then make a card for each other those? */}

        </section>
      </main>
    </div>
  );
};

export default Main;
