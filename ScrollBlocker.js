/** @jsx React.DOM */
var React = require('react');
var spread = require('react/lib/Object.assign');

var style = {
  pointerEvents: 'none'
};

var ScrollBlocker = React.createClass({displayName: "ScrollBlocker",

  getDefaultProps: function () {
    return {
      active: false
    };
  },

  render: function () {

    return (
      React.createElement("div", {style: spread({}, this.props.style, this.props.active && style)}, 
        this.props.children
      )
    );
  }
});

module.exports = ScrollBlocker;