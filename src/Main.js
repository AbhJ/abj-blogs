import React from 'react';
import { Switch, Route } from 'react-router-dom';

import art1 from './pages/art1';
import art2 from './pages/art2';
import art3 from './pages/art3';
// import art4 from './pages/art4';
import Home from './pages/home';

const Main = () => {

  const artComponents = {
    art1: art1,
    art2: art2,
    art3: art3,
  };

  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/abj-blogs/' component={Home}></Route>
      
      {/*
      <Route exact path='/abj-blogs/blog1' component={art1}></Route>
      <Route exact path='/abj-blogs/blog2' component={art2}></Route>
      <Route exact path='/abj-blogs/blog3' component={art3}></Route>
      */}
      {
        [...Array(3).keys()].map((i) => {
          const artComp = artComponents[`art${i+1}`];
          return (<Route exact path={`/abj-blogs/blog${i+1}`} component={artComp}></Route>)
        })
      }

    </Switch>
  );
}

export default Main;
