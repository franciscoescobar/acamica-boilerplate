import React from "react";
import { Link } from "react-router-dom";
const Delivery = ({ delivery, onDeliveryDelete }) => {
  return (
    <tbody>
      <tr>
        <td className="center-td-th">{delivery.nombre}</td>
        <td className="center-td-th">{delivery.direccion}</td>
        <td className="center-td-th">{delivery.telefono}</td>
        <td className="center-td-th">
          <Link
            className="button icon-button is-warning"
            to={{ pathname: `/delivery`, search: `?id=${delivery.id}` }}
          >
            <i className="icon fas fa-edit" />
          </Link>
          <button
            className="button icon-button is-danger is-outlined"
            onClick={() => {
              if (window.confirm("Are you sure you wish to delete this item?"))
                onDeliveryDelete(delivery.id);
            }}
          >
            <i className="icon fas fa-trash-alt" />
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default Delivery;
