import React from 'react';
import PropTypes from 'prop-types';

function InventoryDetail(props) {
  const { inventory } = props;
  return (
    <React.Fragment>
      <h1>Inventory Detail</h1>
      <h3>
        {inventory.location} - {inventory.names}
      </h3>
      <p>
        <em>{inventory.issue}</em>
      </p>
      <p>
        Quantity:
        <em>{inventory.quantity}</em>
      </p>
      <button onClick={() => props.onClickingSell(inventory.quantity)}>
        Sell 1 Unit
      </button>
      <button onClick={props.onClickingEdit}>Update Inventory</button>
      <button onClick={() => props.onClickingDelete(inventory.id)}>
        Close Inventory
      </button>
    </React.Fragment>
  );
}

InventoryDetail.propTypes = {
  inventory: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default InventoryDetail;
