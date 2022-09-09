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
  names: PropTypes.string,
  location: PropTypes.string,
  issue: PropTypes.string,
  quantity: PropTypes.number,
  id: PropTypes.string,
  whenInventoryClicked: PropTypes.func
};

export default Inventory;
