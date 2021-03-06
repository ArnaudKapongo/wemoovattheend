import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from "./components/layout/Navbar";
//import Landing from "./components/layout/Landing";
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alert from './components/layout/Alert';
import Dashboard from './components/dashboard/Dashboard';
import CreateProfile from './components/profile-forms/CreateProfile';
import EditProfile from './components/profile-forms/EditProfile';
import AddConsultant from './components/profile-forms/AddConsultant';
import Profiles from './components/profiles/Profiles';
import Profile from './components/profile/Profile';
import Posts from './components/posts/Posts';
import Post from './components/post/Post';
import PrivateRoute from './components/routing/PrivateRoute';
import Rating from './components/rating/Rating';
import BarChart from './components/chart/BarChart';
import Admin from './components/adminwemoov/Admin';
import AdminPage from './components/adminwemoov/Adminpage';
import './App.css';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

if(localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

    return(
    <>
      <Provider store={store}>
        <div className="container">
      <Router>
      {/*<Navbar/>  */}
           <Route  exact path="/" component={Login} />
         {/*<section className={(pathname === "/dashboard") ? "containerDashboard" : "container" }>*/}
           <Alert/>
           <Switch>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profiles" component={Profiles}/>
            <Route exact path="/profile/:id" component={Profile}/>
            {/*<Route exact path="/admin" component={Admin} />*/}
            <nav className="navbar">
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute exact path="/dashboard/:id" component={BarChart}/>
            <PrivateRoute exact path="/create-profile" component={CreateProfile} />
            <PrivateRoute exact path="/edit-profile" component={EditProfile} />
            <PrivateRoute exact path="/add-consultant" component={AddConsultant} />
            <PrivateRoute exact path="/posts" component={Posts} />
            <PrivateRoute exact path="/posts/:id" component={Post} />
            <PrivateRoute exact path="/rating/:id" component={Rating} />
            {/*<Route exact path="/adminpage" component={AdminPage} />*/}
            </nav>
          </Switch>
         
       </Router>
       </div>
       </Provider>
    </>
)}
export default App
