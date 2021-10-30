import { Navbar, Home, Work, Projects, Footer } from './components';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/work">
          <Work />
        </Route>
        <Route exact path="/projects">
          <Projects />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
