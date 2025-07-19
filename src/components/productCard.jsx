export default function ProductCard(props){

    console.log(props)

    return (
        <div>
            <h1> {props.name} </h1>
            <img src = {props.src} />
            <h2> {props.price} </h2>
            <button> Add to Cart </button>
        </div>
    )
}