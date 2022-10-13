import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "rsuite";
import "../App.css";

export const PagesB = () => {
  const [number, setNumber] = useState({
    one: 0,
    two: 0,
  });
  const [suma, setSuma] = useState();
   

  useEffect(() => {
    const { one, two } = number;
    setSuma(Number(one) + Number(two));
  }, [number]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setNumber({ ...number, [name]: value });
  };

  return (
    <div className="container-b">
      <h1 className='letrascss'>B</h1>
      <div className="containSum">
      <input
        placeholder="a"
        onChange={handleInput}
        className="inputSum"
        name="one"
        value={number.one}
        type="number"
      />
      <h1>+</h1>{" "}
      <input
        type="number"
        name="two"
        value={number.two}
        onChange={handleInput}
        className="inputSum"
        placeholder="a"
      />
     </div>
      <hr />
      Resultado total<input type="number" className="inputSum" value={suma} />
      
     
      <br />
      <Button className="continueButton">
        {" "}
        <Link to="/c">Continuar</Link>
      </Button>
      
      <br />
      <br />
      <Button className="continueButton">
        {" "}
        <Link to="/">atrás</Link>
      </Button>
    </div>
  );
};
