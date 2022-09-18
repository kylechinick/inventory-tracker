import React from 'react';
import PropTypes from 'prop-types';

function Inventory(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenInventoryClicked(props.id)}>
        <h3>
          {props.location} - {props.names}
        </h3>
        <p>
          <em>{props.issue}</em>
        </p>
        <p>
          Quantity:
          <em>{props.quantity}</em>
        </p>
        <hr />
      </div>
    </React.Fragment>
  );
}

Inventory.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  id: PropTypes.string,
  whenInventoryClicked: PropTypes.func
};

export default Inventory;
