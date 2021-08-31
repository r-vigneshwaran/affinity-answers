import { BaseLayout } from 'components';
import Landing from 'pages/Landing';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

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
