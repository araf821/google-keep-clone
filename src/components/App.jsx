import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

function Card(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <img style={{width: "150px"}} src={props.imgSrc} />
      <h5>{props.email}</h5>
      <h5>{props.address}</h5>
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Note />
      <Card
        name="bebicat"
        imgSrc="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_3x2.jpg"
        email="bebicat@gmail.com"
        address="101010 Main St"
      />
      <Card
        name="bebicat"
        imgSrc="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_3x2.jpg"
        email="bebicat@gmail.com"
        address="101010 Main St"
      />
      <Card
        name="bebicat"
        imgSrc="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_3x2.jpg"
        email="bebicat@gmail.com"
        address="101010 Main St"
      />
      <Card
        name="bebicat"
        imgSrc="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_3x2.jpg"
        email="bebicat@gmail.com"
        address="101010 Main St"
      />
      <Footer />
    </div>
  );
}

export default App;
