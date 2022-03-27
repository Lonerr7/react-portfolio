import React from 'react';
import { connect } from 'react-redux';
import {
  filterPortfolioItemsSuccess,
  setFilteredPortfolioItemsSuccess,
} from '../../../../../../redux/appReducer';
import PortfolioControls from '../PortfolioControls';

const PortfolioControlsContainer = ({
  filterPortfolioItemsSuccess,
  setFilteredPortfolioItems,
}) => {
  const filterPortfolioItemsHandler = (word) => {
    filterPortfolioItemsSuccess(word);
    setFilteredPortfolioItems();
  };

  return <PortfolioControls filterPortfolioItemsHandler={filterPortfolioItemsHandler} />;
};

const dispatchToProps = {
  filterPortfolioItemsSuccess,
  setFilteredPortfolioItems: setFilteredPortfolioItemsSuccess,
};

export default connect(null, dispatchToProps)(PortfolioControlsContainer);
