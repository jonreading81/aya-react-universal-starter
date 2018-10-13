import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/articles';

const ArticleContainer = (props) => {
  const { name, requestArticle } = props;
  return (
    <div>
      <h2>Article</h2>
      <div>{name}</div>
      <button type="button" onClick={() => requestArticle(1)}>Click me</button>
    </div>
  );
};

ArticleContainer.propTypes = {
  name: PropTypes.string,
  requestArticle: PropTypes.func.isRequired,
};

ArticleContainer.defaultProps = {
  name: '',
};

const mapStateToProps = ({ articles }) => {
  const { name } = articles;
  return { name };
};

export default connect(
  mapStateToProps,
  { requestArticle: actions.request }
)(ArticleContainer);
