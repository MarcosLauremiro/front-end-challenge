import { Product } from "./components/Product"
import { GlobalProvider } from "./providers/GlobalContext"

function App() {

  return (
    <GlobalProvider>
      <Product/>
    </GlobalProvider>
  )
}

export default App
