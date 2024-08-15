import { Home } from './components/Home'
import { Header } from './components/Header'
import { initialData } from './seed/seed'
const {menuItems} = initialData
function App() {

  return (
    <>
      <main>
        <Header menuItems={menuItems}/>
        <Home />
      </main>
    </>
  )
}

export default App
