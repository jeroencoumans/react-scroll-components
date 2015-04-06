/** @jsx React.DOM */
var React = require('react');
var assign = require('react/lib/Object.assign');

var style = {
  pointerEvents: 'none'
};

var ScrollBlocker = React.createClass({

  getDefaultProps: function () {
    return {
      active: false
    };
  },

  render: function () {

    return (
      <div style={assign({}, this.props.style, this.props.active && style)}>
        {this.props.children}
      </div>
    );
  }
});

module.exports = ScrollBlocker;