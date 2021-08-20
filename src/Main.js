import React from 'react';
import { Switch, Route } from 'react-router-dom';

import art1 from './pages/art1';
import art2 from './pages/art2';
// import art3 from './pages/art3';
import Home from './pages/home';

const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/abj-blogs/' component={Home}></Route>
      <Route exact path='/abj-blogs/blog1' component={art1}></Route>
      <Route exact path='/abj-blogs/blog2' component={art2}></Route>
      {/* <Route exact path='/abj-blogs/blog3' component={art3}></Route> */}
    </Switch>
  );
}

export default Main;