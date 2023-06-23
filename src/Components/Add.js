import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./Add.css";
import HeaderNew from "./HeaderNew";
//import HeaderComponent from "./Header";

function Add() {
   const nav=useNavigate();
  const [chocolatename, setchocolatename] = useState("");
  const [brand, setbrand] = useState("");
  const [quantity, setquantity] = useState("");
  const [c1, setc1] = useState("");
  const [c2, setc2] = useState("");
  const [shape, setshape] = useState("");
  const senddb = (e) => {
    e.preventDefault();
    if (
      chocolatename.length === 0 ||
      brand.length === 0 ||
      quantity.length === 0 ||
      c1.length === 0 ||
      c2 === 0 ||
      shape === 0
    ) {
      alert("Enter All fields");
    } else {
      e.preventDefault();
      const AddList = {
        chocolatename,
        brand,
        quantity,
        c1,
        c2,
        shape,
      };
      console.log(AddList);
      fetch("http://localhost:8080/chocolatelist/post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(AddList),
      }).then(() => {
        console.log("New Order Added");
        nav("/list")
      });
    }
  };
  return (
    <div className="body2">
   <HeaderNew/>
      <div className="cover2">
        <h2 className="txt">Customise Your Chocos</h2>
        <form>
          <input
            type="text"
            value={chocolatename}
            onChange={(e) => setchocolatename(e.target.value)}
            placeholder="Your favorite Chocolate"
          />

          <input
            type="text"
            value={brand}
            onChange={(e) => setbrand(e.target.value)}
            placeholder="Mix up product"
          />
          <input
            type="text"
            value={quantity}
            onChange={(e) => setquantity(e.target.value)}
            placeholder="Quantity"
          />
          <input
            type="text"
            value={c1}
            onChange={(e) => setc1(e.target.value)}
            placeholder="Base Chocolate Flavour"
          />

          <input
            type="text"
            value={c2}
            onChange={(e) => setc2(e.target.value)}
            placeholder="Toppings and Add ons"
          />
          <input
            type="text"
            value={shape}
            onChange={(e) => setshape(e.target.value)}
            placeholder="Shape of your chocolate"
          />
          <button
            className="signup-btn2"
            onClick={senddb}
            type="submit"
            
          >Save</button>
        </form>
      </div>
    </div>
  );
}
export default Add;
