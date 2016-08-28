import React from 'react';
import _ from 'lodash';
import QueryPanelHeader from '../query_panel_header/query_panel_header';
import SQLEditor from '../sql_editor/sql_editor';
import ResultTable from '../result_table/result_table';
import QueryList from '../query_list/query_list';

export default class QueryPanel extends React.Component {
  render() {
    let query = _.find(this.props.queries, { id: this.props.selectedQueryId });

    return (
      <div className="QueryPanel">
        <div className="QueryPanel-queryList">
          <QueryList {...this.props} />
        </div>
        <div className="QueryPanel-main">
          <QueryPanelHeader query={query} {...this.props} />
          <SQLEditor query={query} {...this.props} />
          <ResultTable query={query} {...this.props} />
        </div>
      </div>
    );
  }
}
