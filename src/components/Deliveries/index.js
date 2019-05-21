import React from "react";
import Delivery from "../Delivery";
import PropTypes from "prop-types";
const Deliveries = ({ deliveries, onDeliveryDelete }) => {
  const handleDeliveryDelete = deliveryId => {
    const newDeliveries = deliveries.filter(deliv => deliv.id !== deliveryId);
    onDeliveryDelete(newDeliveries);
  };
  return (
    <table className="table" align="center">
      <colgroup span="4" className="columns" />
      <thead>
        <tr>
          <th className="center-td-th">Nombre</th>
          <th className="center-td-th">Direccion</th>
          <th className="center-td-th">Telefono</th>
          <th className="center-td-th" />
        </tr>
      </thead>
      {deliveries.map(delivery => {
        return (
          <Delivery
            onDeliveryDelete={handleDeliveryDelete}
            delivery={delivery}
            key={delivery.telefono}
          />
        );
      })}
    </table>
  );
};
Deliveries.propTypes = {
  deliveries: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDeliveryDelete: PropTypes.func.isRequired
};
export default Deliveries;
