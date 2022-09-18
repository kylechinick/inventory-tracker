import React from 'react';
import PropTypes from 'prop-types';

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input type='text' name='names' placeholder='Pair Names' />
        <input type='text' name='location' placeholder='Location' />
        <textarea name='issue' placeholder='Describe your issue.' />
        <input type='number' name='quantity' placeholder='130' required />
        <button className='secondary-button' type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;
