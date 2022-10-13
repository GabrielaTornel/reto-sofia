import React from "react";
import { Link } from "react-router-dom";
import { Button } from "rsuite";


export const PagesC = () => {
  return (
    <div>
      {" "}
      total<input type="number" className="inputSum" />
      <hr />
      <Button className="continueButton">
       
        {" "}
        <Link to="/d">Continuar</Link>
      </Button>
      <br />
      <br/>
      <Button className="continueButton">
        {" "}
        <Link to="/b">atrás</Link>
      </Button>
    </div>
  );
};
