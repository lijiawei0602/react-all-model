import React from 'react';
import { Provider } from 'react-redux';
import {
    Switch,
    Route,
    Redirect,
    withRouter,
  } from 'react-router-dom';
import configStore from './store/index.js';
import Layout from './component/Layout/Layout.js';
import Test from './container/Test.js';
import Login from './container/User/Login/Login.js';
import Create from './container/User/Create/Create.js';
import Info from './container/User/Info/Info.js';

const store = configStore();

const User = () => (
    <Switch>
        <Route exact path="/User/login" component={Login}></Route>
        <Route exact path="/User/create" component={Create}></Route>
    </Switch>
)

const LayoutRouter = () => (
    <Layout>
        <Switch>
            <Route path='/Admin/Home' component={Test}></Route>
            <Route exact path="/Admin/info" component={Info}></Route>
            {/* <Redirect from='/' to='/Home'></Redirect> */}
        </Switch>
    </Layout>
)


class App extends React.Component {
    constructor (props) {
        super(props);
        this.state = {

        }
    }
    render () {
        return (
            <Provider store={store}>
                <Route path='/User' component={User}></Route>
                <Route path="/Admin" component={LayoutRouter}></Route>
            </Provider>
        );
    }
}

export default withRouter(App);