import React from "react";
import Filters from "../Filters";
import Deliveries from "../Deliveries";
import { Link } from "react-router-dom";
const Home = ({ deliveries, filters, onFilterChange, onDeliveryDelete }) => (
  <>
    <h1 className="title">Listado de deliveries</h1>
    <Link className="button" to="/delivery">
      Crear nuevo delivery
    </Link>
    <Filters filters={filters} onFilterChange={onFilterChange} />
    <Deliveries deliveries={deliveries} onDeliveryDelete={onDeliveryDelete} />
  </>
);

export default Home;
