var React = require('react');

var blockerStyle = {
  pointerEvents: 'none'
};

var ScrollBlocker = React.createClass({

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
      <div {...other} style={Object.assign({}, style, active && blockerStyle)}>
        {this.props.children}
      </div>
    );
  }
});

module.exports = ScrollBlocker;
