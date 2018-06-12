/* eslint max-len: 0 */
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import React from 'react';
import axios from 'axios';
import ReactModal from 'react-modal';
import './telaModal.css';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

const columns = [ {
  dataField: 'albumId',
  text: 'Albúm Id'
}, {
  dataField: 'id',
  text: 'id'
}, {
  dataField: 'title',
  text: 'Title'
}, {
  dataField: 'url',
  text: 'Url'
}, {
  dataField: 'thumbnailUrl',
  text: 'ThumbnailUrl'
} ];

let cAlbumId = ' ';
let cId = ' ';
let cTitle = ' ';
let cUrl = ' ';
let cThumbnailUrl = ' ';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '20px',
    transform: 'translate(-50%, -50%)'
  }
};

export default class DefaultPaginationTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { albuns: [], showModal: false };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  handleOpenModal() {
    this.setState({ showModal: true });
  }
  handleCloseModal() {
    this.setState({ showModal: false });
  }
  componentWillMount() {
    axios.get(`${BASE_URL}/photos`)
        .then(resp => { this.setState({ albuns: resp.data }); });
  }

  render() {
    const rowEvents = {
      onClick: (e, row) => {
        cAlbumId = row.albumId;
        cId = row.id;
        cTitle = row.title;
        cUrl = row.url;
        cThumbnailUrl = row.thumbnailUrl;
        this.handleOpenModal();
      }
    };
    return (
      <div>
        <ReactModal isOpen={ this.state.showModal } contentLabel='Exemplo Modal' style={ customStyles }>
        <p>Tela Modal</p>
        <p>Albúm id: { cAlbumId } - id: { cId } - title: { cTitle }</p>
        <p>Url: { cUrl } - thumnailUrl: { cThumbnailUrl }</p>
        <div className='gallery'>
            <img src={ cUrl } className='app-logo' alt='logo'/>
            <p> Imagem1 </p>
        </div>
        <div className='gallery'>
            <img src={ cThumbnailUrl } className='app-logo' alt='logo'/>
            <p> Imagem2 </p>
        </div>
        <div className='btn_fechar'>
            <button onClick={ this.handleCloseModal }>Fechar</button>
        </div>
        </ReactModal>
        <BootstrapTable keyField='id' data={ this.state.albuns } columns={ columns } rowEvents={ rowEvents } pagination={ paginationFactory() } />
      </div>
    );
  }
}
