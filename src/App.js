import { BaseLayout, Header } from 'components';
import Landing from 'pages/Landing';
import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import { Routes } from 'routes';

function App() {
  return (
    <Switch>
      <Route
        path="/"
        render={(props) => <BaseLayout {...props} Component={Landing} />}
      />
    </Switch>
  );
}

export default App;
