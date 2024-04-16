import React from "react";
import { Link } from "react-router-dom";

function AnotherPage() {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>This is another page</h1>
      <Link to="/">
        <button>Go to Home</button>
      </Link>
    </div>
  );
}

export default AnotherPage;
