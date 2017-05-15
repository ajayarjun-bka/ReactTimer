const React = require('react');
const ReactDOM = require('react-dom');

// MAIN COMPONENT
const {Route, Router, IndexRoute, browserHistory } = require('react-router');
const Main = require('Main');
const Timer = require('Timer');
const Countdown = require('Countdown');
const About = require('About');

// Load foundation
require('style!css!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

//load css styles
require('style!css!sass!appstyles');


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component = {Main}>
    <Route path='timer' component = {Timer}/>
    <Route path='countdown' component = {Countdown}/>
    <IndexRoute component={About}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
