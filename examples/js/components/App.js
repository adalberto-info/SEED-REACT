/* eslint max-len: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/scale.css';
import '../../../css/react-bootstrap-table.css';
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap';

class App extends React.Component {

  static propTypes = {
    children: PropTypes.node
  };

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const examples = [ {
      text: 'Visualizar Imagens',
      href: 'pagination'
    } ];

    const exampleMenuItems = examples.map((item) => {
      return (
        <li key={ item.href }>
          <a href={ `#/examples/${item.href}` }>{ item.text }</a>
        </li>
      );
    });
    return (
      <div>
        <nav className='navbar navbar-inverse'>
          <div className='container-fluid'>
            <div className='navbar-header'>
              <a className='navbar-brand' href='#'>SEED-REACT</a>
            </div>
            <div className='collapse navbar-collapse'>
              <ul className='nav navbar-nav'>
                <li>
                  <a href='#/getting-started'>Tela Modal</a>
                </li>
                <li>
                  <a href='https://gitlab.engebras.com.br/kamida/seed-react'>Gitlab</a>
                </li>
                <li className='dropdown'>
                  <a href='#' className='dropdown-toggle' data-toggle='dropdown' role='button' aria-haspopup='true' aria-expanded='false'>Visualizar Imagens <span className='caret'></span></a>
                  <ul className='dropdown-menu'>
                    { exampleMenuItems }
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Grid fluid>
          <Row>
            <Col md={ 12 }>
              { this.props.children }
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
