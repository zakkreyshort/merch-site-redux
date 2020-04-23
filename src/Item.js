import React from 'react';
import PropTypes from 'prop-types';

function Item(props){

  const itemStyles = {
    height: '150px',
    width: '150px',
    border: '1px solid #82CA81',
    textAlign: 'center',
    padding: '2%',
    marginBottom: '1em',
    marginTop: '1em'
  }

  return (
    <React.Fragment>
      <div onClick = {() => props.whenItemClicked(props.id)}>
        <div style={itemStyles}>
          <p>{props.name}</p>
          <p>{props.description}</p>
          <p>Quantity: {props.quantity}</p>
          <div className="buttons">
            <button type="submit">Buy</button>
            <button type="submit">Restock</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  id: PropTypes.string,
  whenItemClicked: PropTypes.func
}

export default Item;