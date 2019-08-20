import React from 'react'
import PropTypes from 'prop-types'
import {Switch, Route } from 'react-router-dom';
import { ListPage, PostPage, EditorPage, LoginPage, NotFoundPage, RegisterPage} from 'pages'

const App = (props) => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ListPage}></Route>
        <Route exact path="/page/:page" component={ListPage}></Route>
        <Route exact path="/tag/:tag/:page?" component={ListPage}></Route>
        <Route exact path="/post/:id" component={PostPage}></Route>
        <Route exact path="/editor" component={EditorPage}></Route>
        <Route exact path="/login" component={LoginPage}></Route>
        <Route exact path="/register" component={RegisterPage}></Route>
        <Route component={NotFoundPage}></Route>
      </Switch>
    </div>
  );
}

export default App
