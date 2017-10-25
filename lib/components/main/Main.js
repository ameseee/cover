import React from 'react';

const Main = () => {

  return (
    <div>
      <nav>
        <h1>Cover</h1>
        <ul>
          <li>Manage Contacts</li>
          <li>Settings</li>
          <li>LogOut</li>
        </ul>
      </nav>
      <main>
        <section className="emergency-section">
          <h3>Emergency</h3>
          <button>TEXT 911</button>
        </section>

        <section className="contacts-section">
          {/* contact cards */}
        </section>
      </main>
    </div>
  );
};

export default Main;
