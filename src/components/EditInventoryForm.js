import React from 'react';
import ReusableForm from './ReusableForm';
import PropTypes from 'prop-types';

function EditInventoryForm(props) {
  const { inventory } = props;

  function handleEditInventoryFormSubmission(event) {
    event.preventDefault();
    props.onEditInventory({
      names: event.target.names.value,
      location: event.target.location.value,
      issue: event.target.issue.value,
      quantity: parseInt(event.target.quantity.value),
      id: inventory.id
    });
  }

  return (
    <React.Fragment>
      <h1>Update Selected Inventory</h1>
      <ReusableForm
        formSubmissionHandler={handleEditInventoryFormSubmission}
        buttonText='Update Inventory'
      />
    </React.Fragment>
  );
}

EditInventoryForm.propTypes = {
  inventory: PropTypes.object,
  onEditInventory: PropTypes.func
};

export default EditInventoryForm;
