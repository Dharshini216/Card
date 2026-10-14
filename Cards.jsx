// import react from "react";
// function Cards(props) {
//     return(
//         <div className={props.clsname}>
//             <img src={props.image} alt={props.name}/>
//             <h1 className={props.hname}>{props.name}</h1>
//             <p>{props.desc}</p>
//             <button className={props.cname}>Learn More</button>
//         </div>
//     )
// }
// export default Cards;

import react,{useState} from "react";
function Cards(props) {
    const [data,setdata]=useState([])
    const handleApi=async()=>{
        let apires=await fetch("https://fakestoreapi.com/products")
        let a=await apires.json()
        setdata(a)
    }
    handleApi();
    return(
        <div className={props.clsname}>
            {data.slice(0,1).map(prod=>(
                <div key={prod.id} className={props.clname}>
                    <img src={prod.image} alt={prod.title}/>
                    <h1 className={props.hname}>{prod.title}</h1>
                    <p>{prod.description}</p>
                    <button className={props.cname}>Learn More</button>
                </div>
            ))}
        </div>
    )
}
export default Cards;