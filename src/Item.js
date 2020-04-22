import React from 'react';
import PropTypes from 'prop-types';

function Item(props){

  const itemStyles = {
    height: '200px',
    width: '200px',
    border: '1px solid #7FBC76',
    padding: '5%',
  }

  return (
    <React.Fragment>
      <div style={itemStyles}>
        <p>{props.name}</p>
        <p>{props.description}</p>
        <p>Quantity: {props.quantity}</p>
        <div className="buttons">
          <button type="submit">Buy</button>
          <button type="submit">Restock</button>
        </div>
      </div>
    </React.Fragment>
  );
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired
}

export default Item;