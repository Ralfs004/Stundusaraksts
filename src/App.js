
import Diena from "./Diena";
import { useEffect, useState} from "react";



function App() {
const [lessons, setLessons] = useState([]);
const [loading, setLoading] = useState(true);
  useEffect(() =>{
    async function getLessons(){
    const response = await fetch ("https://cheese-cake.onthewifi.com/api/lessons");
    const data = await response.json()
    console.log(data.IPb22[4].classes);
    const cleansedData = [
      {
        diena: "pirmdiena",
        stundas: data.IPb22[0].classes,
      },
      {
        diena: "otrdiena",
        stundas: data.IPb22[1].classes,
      },
      {
        diena: "tresdiena",
        stundas: data.IPb22[2].classes,
      },
      {
        diena: "ceturtdiena",
        stundas: data.IPb22[3].classes,
      },
      {
        diena: "piektdiena",
        stundas: data.IPb22[4].classes,
      },
    ]
    setLessons(data);
    setLoading(false);
    }
    getLessons();
    }, [])

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

        const dienasJSX = lessons.map((diena, indekss) => {
        return <Diena key= {indekss} diena = {diena.diena} stundas = {diena.stundas}  />
        
        });
  return (
    <>
{loading? <h1>Loading... </h1> : dienasJSX}
</>
  );
  }    
export default App;
