import { Home } from './components/Home'
import { Header } from './components/Header'
import { initialData } from './seed/seed'
import { Projects } from './components/Projects'
import { ContactMe } from './components/ContactMe';
const {menuItems, projects} = initialData
function App() {

  return (
    <>
      <main>
        <Header menuItems={menuItems}/>
        <Home />
        <Projects projects={projects} />
        <ContactMe />
      </main>
    </>
  )
}

export default App
