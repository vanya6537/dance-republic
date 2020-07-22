import {Component} from 'react';
import PropTypes from 'prop-types';

function isInDOM(obj) {
  return Boolean(obj.closest('body'));
}

function hasParent(element, root) {
  return root.contains(element) && isInDOM(element);
}

export default class ClickOutside extends Component {
  // eslint-disable-next-line react/static-property-placement
  static propTypes = {
    active: PropTypes.bool,
    // eslint-disable-next-line react/require-default-props
    onClick: PropTypes.func,
    // eslint-disable-next-line react/require-default-props
    render: PropTypes.func
  };

  // eslint-disable-next-line react/static-property-placement
  static defaultProps = {
    active: true
  };

  constructor(props) {
    super(props);
    this.handleRef = this.handleRef.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    if (this.props.active) {
      document.addEventListener('mousedown', this.handleClick);
      document.addEventListener('touchstart', this.handleClick);
    }
  }

  // eslint-disable-next-line camelcase
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (!this.props.active && nextProps.active) {
      document.addEventListener('mousedown', this.handleClick);
      document.addEventListener('touchstart', this.handleClick);
    }

    if (this.props.active && !nextProps.active) {
      document.removeEventListener('mousedown', this.handleClick);
      document.removeEventListener('touchstart', this.handleClick);
    }
  }

  componentWillUnmount() {
    if (this.props.active) {
      document.removeEventListener('mousedown', this.handleClick);
      document.removeEventListener('touchstart', this.handleClick);
    }
  }

  handleRef(element) {
    this.element = element;
  }

  handleClick(event) {
    if (!hasParent(event.target, this.element)) {
      if (typeof this.props.onClick === 'function') {
        this.props.onClick(event);
      }
    }
  }

  render() {
    return this.props.render({
      innerRef: this.handleRef
    });
  }
}
