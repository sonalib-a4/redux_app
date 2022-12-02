import Header from './components/header'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import ProductListing from './components/ProductListing'
import ProductDetail from './components/ProductDetail'
import './App.css'

function App() {
  return (
    <div className="App">
      <Router> 
        <Header />
        <Switch>
          <Route path="/" exact component={ProductListing} />
          <Route path="/product/:productId" component={ProductDetail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
