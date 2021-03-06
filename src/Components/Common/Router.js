import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import IntroPage from '../../Pages/IntroPage';
import ActivityPage from '../../Pages/ActivityPage';
import MyListPage from '../../Pages/MyListPage';
import LoginPage from '../../Pages/LoginPage';
import RegisterPage from '../../Pages/RegisterPage';
import MyPagePage from '../../Pages/MyPagePage';
import WritePage from '../../Pages/WritePage';
import ActivityDetailPage from '../../Pages/ActivityDetailPage';
import PrivateRoute from './PrivateRoute';

export default () => (
  <Router>
    <>
      <Switch>
        <PrivateRoute path="/" exact component={ActivityPage} />
        <Route path="/intro" component={IntroPage} />
        <Route path="/signin" component={LoginPage} />
        <Route path="/signup" component={RegisterPage} />
        <Route path="/mylist" component={MyListPage} />
        <Route path="/mypage" component={MyPagePage} />
        <Route path="/write" component={WritePage} />
        <Route path="/@:username/:activityId" component={ActivityDetailPage} />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </Router>
);
