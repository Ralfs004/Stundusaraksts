
import Diena from "./Diena";



function App() {
  const pirmdienasStundas = [
    "sports",
    "dabaszinibas",
    "vesture un socialas zinibas", 
    "krievu valoda"];
      const otradienasStundas = [
    "matematikas specialas nodalas",
    "datorsistemas un datortikli",
    "dabaszinibas", 
    "matematika"];
    
  const visasStundas = [
    {diena: "Pirmdiena",
  stundas: [
       "sports",
       "dabaszinibas",
       "vesture un socialas zinibas", 
       "krievu valoda"]},


    {diena: "Otrdiena",
    stundas: [  
        "matematikas specialas nodalas",
        "datorsistemas un datortikli",
        "dabaszinibas", 
        "matematika"]},


        {diena: "Tresdiena",
        stundas: [  
        "matematikas specialas nodalas",
        "datorsistemas un datortikli",
        "dabaszinibas", 
        "matematika"]},


     {diena: "Ceturtdiena",
    stundas: [  
        "matematikas specialas nodalas",
        "datorsistemas un datortikli",
        "dabaszinibas", 
        "matematika"]},


     {diena: "Piektdiena",
    stundas: [  
        "matematikas specialas nodalas",
        "datorsistemas un datortikli",
        "dabaszinibas", 
        "matematika"]}
  ];

        const dienasJSX = visasStundas.map((diena, indekss) => {
        return <Diena key= {indekss} diena = {diena.diena} stundas = {diena.stundas}  />
        
        });
  return (
    <>
{dienasJSX}
</>
  );
  }    
export default App;
