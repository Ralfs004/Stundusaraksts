import Stunda from "./Stunda";
function Diena(){
    const PirmdienasStundas = [
        "Sports",
        "Dabaszinibas",
        "Vesture",
        "Krievu valoda"
    ]

    const OtrdienasStundas = [
        "Matematika",
        "Datorsistemas",
        "Dabaszinibas",
        "Matematika"
    ]
    return(
        <>
    <h2>Pirmdiena</h2>
    
        <ul>
    <Stunda nosaukums={PirmdienasStundas[0]}/>
    <Stunda nosaukums={PirmdienasStundas[1]}/>
    <Stunda nosaukums={PirmdienasStundas[2]}/>
    <Stunda nosaukums={PirmdienasStundas[3]}/>
        </ul>

        <h2>Otrdiena</h2>
        <Stunda nosaukums={OtrdienasStundas[0]}/>
        <Stunda nosaukums={OtrdienasStundas[1]}/>
        <Stunda nosaukums={OtrdienasStundas[2]}/>
        <Stunda nosaukums={OtrdienasStundas[3]}/>

    </>
    );
}
export default Diena;