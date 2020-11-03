import React, { Component } from 'react';
import Modal from '../../components/UI/Modal/Modal';
import ReactAux from '../ReactAux/ReactAux';

const inlineStyle = {
  textAlign: 'center'
}

const withErrorHandler = (WrappedComponent, axios) => {

  return class extends Component {
    state = {
      error: null
    }

    componentWillMount() {

      this.reqInterceptor = axios.interceptors.request.use(req => {
        this.setState({ error: null });

        return req;
      });

      this.resInterceptor = axios.interceptors.response.use(res => res, error => {
        this.setState({ error: error });
      });
    }

    componentWillUnmount() {
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.response.eject(this.resInterceptor);
    }

    errorConfirmedHandler = () => {
      this.setState({ error: null })
    }

    render() {
      return (
        <ReactAux>
          <Modal
            show={this.state.error}
            modalClosed={this.errorConfirmedHandler}>
            <div style={inlineStyle}>
              <p>Something went wrong, we might have burned your Burger!</p>
              <p>{this.state.error ? this.state.error.message : null}</p>
            </div>
          </Modal>
          <WrappedComponent {...this.props} />
        </ReactAux>
      );
    }

  }
}

export default withErrorHandler;