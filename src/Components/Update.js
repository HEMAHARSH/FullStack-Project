import React, { useEffect,useState } from "react";
import "./Update.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import ChocolateService from "../Service/ChocolateService";



const Update = () => {
    const nav = useNavigate();
  const [chocolatename, setchocolatename] = useState("");
  const [brand, setbrand] = useState("");
  const [quantity, setquantity] = useState("");
  const [c1, setc1] = useState("");
  const [c2, setc2] = useState("");
  const [shape, setshape] = useState("");
  const { id } = useParams();
  
  const saveOrUpdateEmployee = (e) => {
    e.preventDefault();
    if (
      chocolatename.length === 0 ||
      brand.length === 0 ||
      quantity.length === 0 ||
      c1.length === 0 ||
      c2 === 0 ||
      shape === 0
    ) {
      alert("No field sbould be empty");
    }else {
        e.preventDefault();
        const chocolatelist = {
          id,
          chocolatename,
          brand,
          quantity,
          c1,
          c2,
          shape,
        };
        if (id) {
          ChocolateService.updateChocolate(id, chocolatelist)
            .then((response) => {
              nav("/list");
            })
            .catch((error) => {
              console.log(error);
            });
        }
      }
    };
    useEffect(() => {
      ChocolateService.getChocolateById(id)
        .then((response) => {
          setchocolatename(response.data.chocolatename);
          setbrand(response.data.brand);
          setquantity(response.data.quantity);
          setc1(response.data.c1);
          setc2(response.data.c2);
          setshape(response.data.shape);
        })
        .catch((error) => {
          console.log(error);
        });
    }, [id]);
    
   

    
  
  return (
    <div className="bodyupdate">
      <div className="coverupdate">
        <h2 className="txtupdate">Update Details</h2>
        <form className="formup">
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
            onClick={saveOrUpdateEmployee}
            className="signup-btnup"
            type="submit"
          >
            Save
          </button>
          <Link to="/list"><button className="cancel-btn">Cancel</button></Link>
        </form>
      </div>
    </div>
  );
};
export default Update;
