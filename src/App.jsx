import Header from "./components/Header.jsx"
import Hero from "./components/Hero.jsx"
import ProductList from "./components/ProductList.jsx"
import WhatsAppCTA from "./components/WhatsAppCTA.jsx"
import Footer from "./components/Footer.jsx"

const App = () => (
  <div>
    <Header />
    <Hero />
    <ProductList />
    <WhatsAppCTA />
    <Footer />
  </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)
export default App
