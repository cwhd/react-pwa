import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <section className="hero is-info is-fullheight">
    <div className="hero-body">
      <div className="container">
        <h1 className="title">
            Welcome to Shopr
        </h1>
        <h2 className="subtitle">
            Your personal shopping AI, keeping your best interest in mind - always.
        </h2>
        <Link to="/home" className="button">Checkout the full demo</Link>
      </div>
    </div>
  </section>
);
