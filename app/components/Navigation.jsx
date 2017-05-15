const React = require('react');
const {Link, IndexLink} = require('react-router');

const Navigation = React.createClass({
  onSearch: function(e)
  {
    e.preventDefault();
    const temp = this.refs.searchInput.value;
    const search = encodeURIComponent(temp);
    if(search && search.length>0){
      this.refs.searchInput.value="";
      window.location.hash ='#/?location='+search;
    }

  },
  render: function() {
    return (
      <div className="top-bar">
          <div className="top-bar-left">
            <ul className="menu">
              <li className="nav-title">React Timer App</li>
              <li>
                <IndexLink to="/timer" activeClassName="active-link">Timer</IndexLink>
              </li>
              <li>
                <Link to="/countdown" activeClassName="active-link">Countdown</Link>
              </li>
            </ul>
          </div>
          <div className="top-bar-right">
            <ul className="menu">
             <li className="menu-text">
            Created by <a href="http://www.ajayarjun.com" target="_blank">Ajay Arjun</a>
          </li>
            </ul>
          </div>
        </div>
      );
    }
  });

  module.exports = Navigation;
