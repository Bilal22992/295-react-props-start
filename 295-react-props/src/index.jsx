import React from "react";
import ReactDOM from "react-dom/client";

function Card(props) {
return <div>
 <h2>{props.name}</h2>
    <img
      src={props.img}
      alt={props.alt}
    />
    <p>{props.number}</p>
    <p>{props.website}</p>
    </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <h1>My Contacts</h1>

   <Card name="beyonce"   img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg" alt="avatar_img" phone="+123 456 789" website="b@beyonce.com"/>
   <Card name="Jack Bauer"   img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg" alt="avatar_img" phone="+987 654 321" website="jack@nowhere.com"/>
   <Card name="Chuck Norris"   img="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png" alt="avatar_img" phone="+918 372 574" website="gmail@chucknorris.com"/>



    
  </div>
);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
