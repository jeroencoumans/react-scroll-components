var win = typeof window !== 'undefined' ? window : false;

var getScrollTop = function () {
  return win.pageYOffset || win.document.scrollTop || win.document.body.scrollTop || 0;
}

var ScrollListenerMixin = {

  getDefaultProps: function() {
    return {
      endScrollTimeout: 300
    };
  },

  getInitialState: function() {
    return {
      scrollTop: 0,
      isScrolling: false
    };
  },

  componentDidMount: function () {
    if (win) {
      win.addEventListener('scroll', this._onPageScroll);
    }
  },

  componentWillUnmount: function () {
    if (win) {
      win.removeEventListener('scroll', this._onPageScroll);
    }
  },

  shouldComponentUpdate: function(nextProps, nextState) {
    return (
      nextState.scrollTop !== this.state.scrollTop ||
      nextState.isScrolling !== this.state.isScrolling
    )
  },

  _onPageScrollEnd: function () {
    var scrollTop = getScrollTop();
    if (scrollTop === this.state.scrollTop) {
      win.clearTimeout(this._pageScrollTimeout);
      this.setState({ isScrolling: false });

      if (typeof this.props.onPageScrollEnd === 'function') {
        this.props.onPageScrollEnd(scrollTop, isScrolling);
      }
    }
  },

  _onPageScroll: function () {
    var scrollTop = getScrollTop();

    this.setState({
      scrollTop: scrollTop,
      isScrolling: true
    });

    win.clearTimeout(this._pageScrollTimeout);
    this._pageScrollTimeout = win.setTimeout(this._onPageScrollEnd, this.props.endScrollTimeout);

    if (typeof this.props.onPageScroll === 'function') {
      this.props.onPageScroll(scrollTop, isScrolling);
    }
  }
};

module.exports = ScrollListenerMixin;