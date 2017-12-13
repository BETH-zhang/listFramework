import React from 'react';
import ReactDOM from 'react-dom';
import ListFramework from 'rc-list-framework';
import 'rc-list-framework/assets/index.less';

const data = [
  { createdAt: 0, validateDate: 'ann', operator: 21, note: 'haha' },
  { createdAt: 1, validateDate: 'ann', operator: 22, note: 'haha' },
  { createdAt: 2, validateDate: 'ann', operator: 23, note: 'haha' },
];

ReactDOM.render(
  <div>
    <h2>Demo</h2>
    <ListFramework
      title="demo"
      className="cls-demo"
      data={data}
      loading={false}
      table={{
        columnsConstant: [
          ['时间', 'createdAt', '100'],
          ['操作人', 'operator', '100']
        ],
      }}
    />
  </div>,
  document.getElementById('__react-content')
);
