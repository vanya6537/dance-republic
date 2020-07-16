import {PureComponent} from 'react';

export default function (Component) {
  return class extends PureComponent {
    render() {
      return <Component {...this.props} />;
    }
  };
}
