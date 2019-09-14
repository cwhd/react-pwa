import React from 'react';
import PropTypes from 'prop-types';
import GuestLayout from './guest-layout';

const Column = (props) => {
  const { title, description, link } = props;
  return (
    <div className="column">
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">
            {title}
          </p>
        </header>
        <div className="card-content">
          <div className="content">
            {description}
            {' '}
            {!!link.length && (
              <a
                href={link}
                target="_blank"
                rel="noreferrer noopener nofollow"
              >
                Read more
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
Column.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default () => (
  <GuestLayout>
    <section className="hero is-medium is-info is-bold">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
            Shopr
          </h1>
          <h2 className="subtitle">
            Working for you.
          </h2>
        </div>
      </div>
    </section>
    <section className="m-t-lg">
      <div className="container p-l-md p-r-md">
        <h4 className="title is-4">
          Shopr helps you save time and money by helping you shop.
        </h4>
        <div className="columns">
          <Column
            title="Save money and time"
            description="Shopr manages your shopping with your best interest in mind - always. She can manage your day to day shopping, wishlists, and find you deals that you care about."
            link="#"
          />
          <Column
            title="Cryptocompatible"
            description="Shopr uses crytocurrency to transact, opening up a world of true free trade and commerce."
            link="#"
          />
          <Column
            title="Personal Advocate"
            description="Shopr is an AI based agent. Instead of using AI to cross or upsell you stuff, Shopr uses AI for your benefit to find you deals and let you know what retailers are trying to sell you and why."
            link="#"
          />
        </div>
      </div>
    </section>
  </GuestLayout>
);
