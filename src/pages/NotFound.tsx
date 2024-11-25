import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div className="not-found">
      <h1 className="not-found__code">404</h1>
      <p className="not-found__text">Page not found</p>
      <Link to="/" className="not-found__link">
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
