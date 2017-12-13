import React from 'react';
import PropTypes from 'prop-types';
import { Provider, create } from 'mini-store';

export default class ListFramework extends React.Component {
  static PropTypes = {
    data: PropTypes.array,
  }

  static defaultProps = {
    data: [],
  }

  constructor(props) {
    super(props);

    this.store = create({
      currentHoverKey: null,
      fixedColumnsHeadRowsHeight: [],
      fixedColumnsBodyRowsHeight: [],
    });
  }

  componentDidMount() {
  }

  componentWillReceiveProps(nextProps) {
    console.log('nextProps', nextProps);
  }

  componentDidUpdate(prevProps) {
    console.log('prevProps', prevProps);
  }

  render() {
    const props = this.props;

    let className = props.prefixCls;
    if (props.className) {
      className += ` ${props.className}`;
    }

    return (<Provider store={this.store}>
      <div>
        1111
        {props.title}
      </div>
    </Provider>);
  }
}
