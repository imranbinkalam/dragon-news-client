import React from "react";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div>
      <h2>Terms and Condition</h2>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet fugit
        dolor quo porro natus vel nesciunt adipisci asperiores eligendi velit.
      </p>
      <p>
        Go back to <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default Terms;
