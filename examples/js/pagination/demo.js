/* eslint max-len: 0 */
import React from 'react';
import DefaultPaginationTable from './default-pagination-table';

class Demo extends React.Component {
  render() {
    return (
      <div>
        <div className='col-md-offset-1 col-md-8'>
          <div className='panel panel-default'>
            <div className='panel-heading'>Lista de Imagens</div>
            <div className='panel-body'>
              <h5>Albuns</h5>
              <DefaultPaginationTable />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Demo;
