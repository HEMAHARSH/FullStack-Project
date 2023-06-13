import React ,{ useEffect, useState }from 'react'
import "./List.css";
import { Link, useNavigate } from 'react-router-dom';
import ChocolateService from '../Service/ChocolateService';


const List=()=> {
  const nav = useNavigate();
  const [chocolateList, setchocolateList] = useState([])
  useEffect(() => {
      getAllChocolateList();
  }, [])
  const getAllChocolateList = () => {
      ChocolateService.getChocolates().then((response) => {
          setchocolateList(response.data)
          console.log(response.data);
      }).catch(error =>{
          console.log(error);
      })
  }
  const [selectedOption, setSelectedOption] = useState('')
  
    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value)
    }
  
  const deleteChocolateList = (ChocolateListId) => {
     ChocolateService.deleteChocolate(ChocolateListId).then((response) =>{
      getAllChocolateList();
     }).catch(error =>{
         console.log(error);
     })
  }
  return (
    <div className='body5'>
    <p id='order'>Customization Order Details</p>
    
    <Link to="/get"><button id='actionsnew'>+</button></Link>
    <Link to="/get"><button id='actionsn'>ORDER NEW</button></Link>
    <Link to="/login"><h4 id='actionsl'>LOGOUT</h4></Link>

    <table id='gettable'>            
                <tr>
                  <th>Chocolate Id</th>
                  <th>Chocolate Name</th>
                  <th>Chocolate Brand to Infuse</th>
                  <th>Quantity</th>
                  <th>Base Chocolate Flavour</th>
                  <th>Toppings and Add ons</th>
                  <th>Shape of your Chocolate</th>
                  <th>Actions</th>
                </tr>         
              {
                chocolateList.map(
                    chocolist => (
      <tr>
             <th> {chocolist.id}</th>
             <th> {chocolist.chocolatename}</th>
             <th> {chocolist.brand}</th>
             <th> {chocolist.quantity}</th>
             <th> {chocolist.c1}</th>
             <th> {chocolist.c2}</th>
             <th> {chocolist.shape}</th>
             <th><Link to={`/update/${chocolist.id}`}><button id="actions">Update</button></Link>
             <button id="actions"  onClick = {() => deleteChocolateList(chocolist.id)}> Delete!</button>
             </th>         
             </tr>
             ))}    
             </table>
             </div>
             )
            }
            export default List;
            