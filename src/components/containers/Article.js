import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { pending, rejected, fulfilled } from 'redux-saga-thunk';
import { request as requestArticle } from '../../redux/actions/articles';
import { ARTICLES_REQUEST } from '../../redux/types/articles';

class ArticleContainer extends Component {
  /* eslint-disable */
  static preloadData(store, { id }) {
    // return store.dispatch(requestArticle(id));
  }

  componentDidMount() {
    console.log(this.props);
    const { requestArticle, name, match } = this.props;
    const { id } = match.params;
    if (name === '') {
      requestArticle(id);
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
    const { name, id } = this.props;

    return (
      <div>
        <h2>Article</h2>
        <div>
          <p>{`${id} ${name}`}</p>
        </div>
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
  id: ''
};

const mapStateToProps = state => (
  {
    ...state.articles,
    loading: pending(state, ARTICLES_REQUEST),
    error: rejected(state, ARTICLES_REQUEST),
    success: fulfilled(state, ARTICLES_REQUEST),
  }
);

export default connect(
  mapStateToProps,
  { requestArticle },
)(ArticleContainer);
