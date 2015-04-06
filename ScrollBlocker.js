/** @jsx React.DOM */
var React = require('react');

var blockerStyle = {
  pointerEvents: 'none'
};

var ScrollBlocker = React.createClass({displayName: "ScrollBlocker",

  propTypes: {
    active: React.PropTypes.bool,
    style: React.PropTypes.object,
    children: React.PropTypes.node
  },

  getDefaultProps: function () {
    return {
      active: false
    };
  },

  render: function () {
    var { style, active, ...other } = this.props;

    return (
      React.createElement("div", React.__spread({},  other, {style: active && style}), 
        this.props.children
      )
    );
  }
});

module.exports = ScrollBlocker;