import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';
import  UserContainer  from '../components/UserContainer';
import  AddUserContainer  from '../components/AddUserContainer';
import  App  from '../components/app';



export default (store, history) => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App} >
          <Route path="/users" component={UserContainer} />
          <Route path="/users/new" component={AddUserContainer} />
          <Route path="/users/:id" component={AddUserContainer} />
        </Route>
      </Router>
    </Provider>
  );
};
