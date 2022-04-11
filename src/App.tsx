import { BrowserRouter, Route } from 'react-router-dom';
import { Home } from './pages/Home'
import { NewRoom } from './pages/NewRoom'
//roteamento para navegar entre as paginas 
//react router dom

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Home} />
    </BrowserRouter>
    //<Home />
    //<NewRoom />
  );
}
export default App;
