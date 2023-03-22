import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

// import "./index.css";
const url = "https://api.github.com/users/parvizwpf";

const Comp = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const resp = await fetch(url);
        const usr = await resp.json();
        setUser(usr);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUser();
  }, []);

  return (
    <div>
      <img src={user.avatar_url} width="150px" />
      <h2>{user.name}</h2>
      <h4>work at: {user.company}</h4>
      <p>{user.bio}</p>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Comp />);
