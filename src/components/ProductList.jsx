import products from "../data/products.json"

const ProductList = () => (
  <section id="produk">
    <h2>3 Varian Kopi Lakoffie</h2>
    <div className="products">
      {products.map(item => (
        <div key={item.id} className="product-card">
          <h3>{item.name}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  </section>
)

export default ProductList