
import Stunda from "./Stunda";
function Diena(props){
  const stundasJSX = props.stundas.map((stunda) => {
      retrun <Stunda nosaukums = {stunda} />
  };
    


    return(
        <>
    <h2>{props.diena}</h2>
    
        <ul>
    {stundasJSX}
        </ul>

        <h2>Otrdiena</h2>
        <Stunda nosaukums={props.stundas[0]}/>
        <Stunda nosaukums={props.stundas[1]}/>
        <Stunda nosaukums={props.stundas[2]}/>
        <Stunda nosaukums={props.stundas[3]}/>

    </>
    )};

export default Diena;