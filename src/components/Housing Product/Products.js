const Product = (props)=>{
    // console.log(props);
    
    return (
        <section>
                <img src="#"></img>
                <p>{props.name}</p>
                <p>{props.price}</p>
                <p>{props.rating}</p>
                <p>{props.type}</p>
                <p>{props.available? "in stock":"out of stock"}</p>
                <button>Add to Cart</button>
        </section>
    )
}
export default Product;