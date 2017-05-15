var React = require('react');
var {Link, IndexLink} = require('react-router');

var Navigation = React.createClass({
  onSearch: function(e)
  {
    e.preventDefault();
    var temp = this.refs.searchInput.value;
    var search = encodeURIComponent(temp);
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
              <li className="menu-text">React Timer App</li>
              <li>
                <IndexLink to="/timer" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Timer</IndexLink>
              </li>
              <li>
                <Link to="/countdown" activeClassName="active"  activeStyle={{fontWeight: 'bold'}}>Countdown</Link>
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
