import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import ProductList from '../pages/ProductList';
import Cart from '../pages/Cart';

function Routes() {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products" component={ProductList} />
        <Route path="/cart" component={Cart} />
      </Switch>
    )
}

export default Routes;