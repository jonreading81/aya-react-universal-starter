import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { pending, rejected, fulfilled } from 'redux-saga-thunk';
import { request as requestArticle } from '../../redux/actions/articles';
import { ARTICLES_REQUEST } from '../../redux/types/articles';

class ArticleContainer extends Component {
  static preloadData(store) {
    return store.dispatch(requestArticle());
  }


  componentDidMount() {
    const { requestArticle, name } = this.props;
    if (name === '') {
      requestArticle();
    }
  }

  loading() {
    const { loading } = this.props;
    if (loading) {
      return <p>Loading...</p>;
    }
    return '';
  }

  render() {
    const { name } = this.props;

    return (
      <div>
        <h2>Article</h2>
        <div>{name}</div>
        {this.loading()}
      </div>
    );
  }
}

ArticleContainer.propTypes = {
  name: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  requestArticle: PropTypes.func.isRequired,
};

ArticleContainer.defaultProps = {
  name: '',
};

const mapStateToProps = (state) => {
  const { name } = state.articles;
  return {
    name,
    loading: pending(state, ARTICLES_REQUEST),
    error: rejected(state, ARTICLES_REQUEST),
    success: fulfilled(state, ARTICLES_REQUEST),
  };
};

export default connect(
  mapStateToProps,
  { requestArticle },
)(ArticleContainer);
