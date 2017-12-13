import React from 'react';
import PropTypes from 'prop-types';
import { Provider, create } from 'mini-store';
// import isFunction from 'lodash/isFunction';
// import cloneDeep from 'loadsh/cloneDeep';
// import classNames from 'classnames';
// import moment from 'moment';
// import assign from 'lodash/assign';
import isArray from 'lodash/isArray';

const getColumns = (data) => {
  console.log(data, '--');
  if (isArray(data)) {
    let scrollX = 0;
    const columns = data.map((item, index) => {
      // item title=item[0] value=item[1] width=item[2] obj=item[3]
      const width = item[3] ? item[3] : item[2];
      const rest = item[4] || {};
      scrollX += width ? Number(width) : 0;
      return {
        title: item[0],
        dataIndex: item[1],
        key: item[1],
        className: (item[3] && item[3].className) || '',
        fixed: (item[3] && item[3].fixed) ? 'right' : null,
        width,
        ...rest,
      };
    });
    return {
      data: columns,
      scrollX,
    };
  }
  return {};
};

// 导入组件
import {
  Table,
  Spin,
  // Modal,
  // Popconfirm,
  // Button,
  // Pagination,
  // Select,
} from 'antd';

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

  /**
   * 获取页面table需要的数据
  */
  getDataSource = (columns) => {
    const { data, table } = this.props;
    const columnsItem = (table && table.columnsItem) || {};
    let rows = [];
    if (data && data.length) {
      rows = data.map((item, index) => {
        const column = {};
        const key = 'key';
        column[key] = index;
        columns.forEach((subItem) => {
          const columnsItemTemplate = columnsItem[subItem.key];
          if (columnsItemTemplate && isFunction(columnsItemTemplate)) {
            column[subItem.key] = columnsItemTemplate(item, index);
          } else {
            column[subItem.key] = item[subItem.key];
          }
        });
        return column;
      })
    }
    return rows;
  }

  render() {
    const props = this.props;

    let className = props.prefixCls;
    if (props.className) {
      className += ` ${props.className}`;
    }

    const {
      data, loading,
      table: { columnsConstant, handleTableChange },
    } = this.props;

    const columns = getColumns(columnsConstant).data;
    return (<Provider store={this.store}>
      <div className={className}>
        <Spin spinning={this.props.loading}>
          <Table
            columns={columns}
            onChange={handleTableChange}
            dataSource={this.getDataSource(columns)}
            pagination={false}
          />
        </Spin>
      </div>
    </Provider>);
  }
}
