import React from 'react'
import '../App.css'
import { Button } from 'rsuite';
import {Link}  from "react-router-dom";

export const PagesA = () => {
  
  return (
    <>
      <div className='letrascss'>
      <h1 className='letrascss'>A</h1>
      </div>
      <br />
      <div>
      <Button className="continueButton" > <Link to="/b" >Continue</Link></Button>
      </div>
      
    </>
  )
}
