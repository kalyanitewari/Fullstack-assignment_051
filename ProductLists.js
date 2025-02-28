const products = [
    { name: "dresses for Women", description: "Cool and stylish ", price: 10, imageUrl: "/cloth1.jpg" },
    { name: "H&M short dresses", description: "Women knee length dress", price: 20, imageUrl: "/cloth2.jpg" },
    {name:"Flora dresses",description:"Stylish and durable",price:10,imgeUrl:"/cloth3.jpg"}
];

export default function ProductList() {
    return (
        <div className="grid">
            {products.map((product, index) => (
                <div key={index} className="product-card">
                    <img src={product.imageUrl} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <p className="price">₹{product.price}</p>
                </div>
            ))}
        </div>
    );
}
