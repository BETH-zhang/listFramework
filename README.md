# listFramework
---

React antd list-framework

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![gemnasium deps][gemnasium-image]][gemnasium-url]
[![npm download][download-image]][download-url]
## Screenshots

<img src="./img/screenshots.png" />

## Feature

* support ie8,ie8+,chrome,firefox,safari
## install

[![list-framework](https://nodei.co/npm/list-framework.png)](https://npmjs.org/package/list-framework)

## API

### ListFramework props

| name     | description    | type     | default      |
|----------|----------------|----------|--------------|
| className | additional css class of root dom node | String | '' |
| childrenButtons | In front of the list of additional action button | Array | [] |
| data | The list of the original data | Array | [] |
| loading | The data load state | Boolean | false |
| children | Additional content in front of the list | Any | |
| table | Form the configuration of the description, specific see the table below | TableProps[] | - |
| pagination | Paging the configuration of the description, ![specific see the table below](https://ant.design/components/pagination-cn/) | PaginationProps[] | - |
| modal | Modal the configuration of the description, ![specific see the table below](https://ant.design/components/modal-cn/) | ModalProps[] | - |
| initData | Preload data function | Func | () => {} |
| loadDataHandle | Load the data processing function | Fun | () => {} |

### Table props

| name     | description    | type     | default      |
|----------|----------------|----------|--------------|
| bordered | 是否展开外边框和列边框 | boolean | false|
| colums | 表格列的配置描述，![具体详见](https://ant.design/components/table-cn/) | ColumnProps[] |-|
| components | 覆盖默认的table元素 | object | - |
|dataSource| 数据数组 | any[] ||
| defaultExpandAllRows | 初始时，是否展开所有行 | boolean | false |
| defaultExpandedRowKeys | 默认展开的行 | string[] | - |
| expandedRowKeys | 展开的行，控制属性 | string[] | - |
| expandRowByClick | 通过点击行来展开子行 | boolean | false |
| expandedRowRender | expandedRowRender|Function(record):ReactNode||
|expandRowByClick|expandRowByClick|boolean|false|
|footer|表格尾部|Function(currentPageData)	||
|indentSize|展示树形数据时，每层缩进的宽度，以 px 为单位|number|15|
|loading|loading|boolean|object (更多)	|false|
|locale|默认文案设置，目前包括排序、过滤、空数据文案|object|filterConfirm: '确定' filterReset: '重置' emptyText: '暂无数据' 默认值|
|pagination|分页器，配置项参考 pagination，设为 false 时不展示和进行分页|object||
|rowClassName|表格行的类名|Function(record, index):string	||
|rowKey|表格行 key 的取值，可以是字符串或一个函数|string|Function(record):string	|'key'|
|rowSelection|rowSelection|object|null|
|scroll|横向或纵向支持滚动，也可用于指定滚动区域的宽高度：{{ x: true, y: 300 }}|object|-|
|showHeader|是否显示表头|boolean|true|
|size|正常或迷你类型，default or small|string|default|
|title|表格标题|Function(currentPageData)||
|onChange|分页、排序、筛选变化时触发|Function(pagination, filters, sorter)||
|onExpand|点击展开图标时触发|Function(expanded, record)||
|onExpandedRowsChange|展开的行变化时触发|Function(expandedRows)||
|onHeaderRow|设置头部列属性|Function(column, index)||
|onRow|设置列属性|Function(record, index)|||