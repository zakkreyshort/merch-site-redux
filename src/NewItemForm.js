import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

function NewItemForm(props){

  function handleNewItemFormSubmission(event) {
    event.preventDefault();
    props.onNewItemCreation({
      name: event.target.name.value, 
      description: event.target.description.value, 
      quantity: event.target.quantity.value,
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewItemFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder='item name' />
        <input
          type='text'
          name='description'
          placeholder='item description' />
        <input
          type='number'
          name='quantity'
          placeholder='initial quatity' />
        <button type='submit'>add item</button>
      </form>
    </React.Fragment>
  );
}

NewItemForm.propTypes = {
  onNewItemCreation: PropTypes.func
}

export default NewItemForm;