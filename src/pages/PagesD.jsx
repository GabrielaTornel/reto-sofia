import { Link } from "react-router-dom";
import { Button } from "rsuite";
import "../App.css";


export const PagesD = () => {
  return (
    <>
      <h1 className='letrascss' style={{}}>D</h1>
      <img className="gifclass" alt="homero"src={"../../homero.gif"} width="200px"  >

      </img>
      <img className="gifclass" alt="backy"src={"../../backy.gif"} width="200px"  >

      </img>
       <Button className="continueButtonatrass">
       <Link to="/a">empezar de nuevo</Link>
      </Button>
      <br />
      <br />
      <button className="continueButtonatras">
        {" "}
        <Link to="/c">atrás</Link>
      </button>
    </>
  );
};
