/** @jsx React.DOM */
var React = require('react');
var cx = require('react/lib/cx');

var ScrollBlocker = React.createClass({displayName: 'ScrollBlocker',

  getDefaultProps: function () {
    return {
      active: false
    };
  },

  render: function () {
    var classes = cx({
      'ScrollBlocker': this.props.active
    });

    return (
      React.DOM.div( {className:cx(this.props.className, classes)}, 
        this.props.children
      )
    );
  }
});

module.exports = ScrollBlocker;