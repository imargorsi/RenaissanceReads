function Features() {
  return (
    <div className="features container">
      <h2 className="features__heading">Features and Benefits:</h2>
      <div className="features__container">
        <div className="features__container__single">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="single__heart"
          >
            <path d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
          </svg>

          <h2 className="single__heading">Connect with Readers</h2>
          <p className="single__desc">
            Forge meaningful connections with other book enthusiasts, share your
            reading experiences, and engage in lively discussions.
          </p>
        </div>
        <div className="features__container__single_bg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="single__heart"
          >
            <path d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
          </svg>

          <h2 className="single__heading">Your Personal Book Hub </h2>
          <p className="single__desc">
            Effortlessly manage your reading journey, from maintaining private
            and public book notes to leaving and reading reviews.
          </p>
        </div>
        <div className="features__container__single">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="single__heart"
          >
            <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
          </svg>
          <h2 className="single__heading">Discover Your Next Favorite</h2>
          <p className="single__desc">
            Unleash the power of our recommendation system, intelligently
            suggesting books based on your reading history and preferences.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;
