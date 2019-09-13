import React from 'react'
import PropTypes from 'prop-types'
import {Switch, Route } from 'react-router-dom';
import { ListPage, PostPage, EditorPage, LoginPage, NotFoundPage, RegisterPage, AdminPage, MainPage} from 'pages'
import Base from 'containers/common/Base'


const App = (props) => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={MainPage}></Route>
        <Route exact path="/board" component={ListPage}></Route>
        <Route exact path="/post/:id" component={PostPage}></Route>
        <Route exact path="/editor" component={EditorPage}></Route>
        <Route exact path="/login" component={LoginPage}></Route>
        <Route exact path="/register" component={RegisterPage}></Route>
        <Route exact path="/board" component={RegisterPage}></Route>
        <Route exact path="/admin" component={AdminPage}></Route>
        <Route component={NotFoundPage}></Route>
      </Switch>
      <Base/>
    </div>

  );
}

export default App
