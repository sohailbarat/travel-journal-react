export default function Main(props) {
    console.log(props)
    return (
        <main>
            <img src={props.img} className='main--img'/> <br/>
            <span> {props.country} </span> <span> <a href={props.country}> View on Google Maps </a> </span>
            <h1> {props.vacationSpot} </h1>
            <h3> {props.days} </h3>
            <p> {props.description} </p>
        </main>
    )
}