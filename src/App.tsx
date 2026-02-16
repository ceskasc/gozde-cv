import { Route, Switch } from 'wouter';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Work from './pages/Work';
import About from './pages/About';
import Contact from './pages/Contact';
import ProjectDetail from './pages/ProjectDetail';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/work" component={Work} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/project/:id" component={ProjectDetail} />
        {/* We will add more routes later */}
        <Route>404: The Void Stares Back</Route>
      </Switch>
    </Layout>
  )
}

export default App
