import React from 'react';
import Home from './pages/home';
import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";

const Main = () => {
  var length = 10;
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/abj-blogs/' component={Home}></Route>
      <Suspense fallback="">
        {
          [...Array(length /*Number of Blogs*/).keys()].map((i) => {
            const artComp = lazy(() => import(`./pages/art${i+1}`));
            return (<Route exact path={`/abj-blogs/blog${i+1}`} key={i+1} component={artComp}></Route>);
          })
        }
      </Suspense>
    </Switch>
  );
}

export default Main;
