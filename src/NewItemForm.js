import React from 'react';
import { v4 } from 'uuid';
// import PropTypes from 'prop-types';

function NewItemForm(){ // add props
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

// NewItemForm.propTypes = {
//   onNewItemCreation: PropTypes.func
// }

export default NewItemForm;