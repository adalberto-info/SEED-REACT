import ReactModal from 'react-modal';
import React from 'react';
import '../pagination/telaModal.css';

// import ReactDOM from 'react-dom';

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

class GettingStarted extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  handleOpenModal() {
    this.setState({ showModal: true });
  }
  handleCloseModal() {
    this.setState({ showModal: false });
  }
  render() {
    return (
      <div>
        <ReactModal isOpen={ this.state.showModal } contentLabel='ExemploModal' style={ customStyles }>
          <p>Tela Modal</p>
          <p>Albúm id: 1 id:1     title: accusamus beatae ad facilis cum similique qui sunt</p>
          <div className='gallery'>
            <img src={ 'http://placehold.it/600/92c952.jpg' } className='imagem1' alt='logo'/>
          </div>
          <div className='gallery'>
            <img src={ 'http://placehold.it/150/92c952.jpg' } className='imagem2' alt='logo'/>
          </div>
          <div className='btn_fechar'>
            <button onClick={ this.handleCloseModal }>Fechar</button>
          </div>
        </ReactModal>
      </div>
    );
  }
}
export default GettingStarted;
