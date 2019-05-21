import React from "react";
import Filters from "../Filters";
import Deliveries from "../Deliveries";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Home = ({ deliveries, filters, onFilterChange, onDeliveryDelete }) => (
  <>
    <h1 className="title">Listado de deliveries</h1>
    <Link className="button add-new is-link" to="/delivery">
      Crear nuevo delivery
    </Link>
    <Filters filters={filters} onFilterChange={onFilterChange} />
    <Deliveries deliveries={deliveries} onDeliveryDelete={onDeliveryDelete} />
  </>
);

Home.propTypes = {
  deliveries: PropTypes.arrayOf(PropTypes.object).isRequired,
  filters: PropTypes.objectOf(PropTypes.string).isRequired,
  onFilterChange: PropTypes.func.isRequired,
  onDeliveryDelete: PropTypes.func.isRequired
};
export default Home;
