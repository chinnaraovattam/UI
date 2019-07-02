render() {
  return (
    <div>
      <h1 style={{fontSize: '1.2em', color: '#177CB8', marginBottom: '0'}}>CData API Server React Demo</h1>
      <br/>
      <label>Select a Table</label>
      <br/>
      <select className='tableDropDown' onChange={this.onTableChange}>
        { this.renderTableList() }
      </select>
      <br/>
      <br/>
      <label>Select {this.state.selectedTable} Columns</label>
      <br/>
      <select className='columnMultiSelect' onChange={this.onColumnChange} multiple>
        { this.renderColumnList() }
      </select>
      <br/>
      <br/>
      { this.state.selectedColumns.length > 0 ? <button onClick={this.getData}>Get [{ this.state.selectedTable }] Data</button> : null }
      <br/>
      <br/>
      { this.state.tableData.length > 0 ? this.renderTable() : null }
    </div>
  );

}