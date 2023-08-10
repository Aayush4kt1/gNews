
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import User from './User';
import NewCard from './Newcard';
import Header from './Header';
import './styles.css';




 function Garage() {
  const [newData, setnewData]= useState([])


useEffect(()=>{
  (async function f1(){
  
  let url = "https://gnews.io/api/v4/search?q=india&lang=en&country=us&max=10&apikey=7da037cdcba50756ce8dc7c5504aced5"
  const response = await fetch(url)
  const data = await response.json()
  setnewData(data['articles'])
  })()
},[]) 
return(
  <>
  <Header />
  <div className="new-component">
 {newData?.map((items)=>{

  return < NewCard data={items}/>
 })}
  </div>
  </>
)}


export default Garage;
