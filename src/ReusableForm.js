import React from 'react';
import PropTypes from 'prop-types';

function ReusableForm(props) {

  const formStyles = {
    width: '40vw',
    margin: 'auto auto',
    backgroundColor: 'transparent',
    padding: '5%',
    marginBottom: '2%'
  }

  return (
    <React.Fragment>
      <div style={formStyles}>
        <form onSubmit={props.formSubmissionHandler}>
          <img src="https://img.icons8.com/metro/26/000000/pencil.png" alt='pencil icon' />
            <input
              type='text'
              name='name'
              placeholder='item name' required />
            <input
              type='text'
              name='description'
              placeholder='item description' required />
            <input
              type='number'
              name='quantity'
              placeholder='initial quantity' required />
            <button className="formButton" type='submit'>{props.buttonText}</button>
        </form>
      </div>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;