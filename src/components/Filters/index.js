import React from "react";
import PropTypes from "prop-types";
const Filters = ({ onFilterChange, filters }) => {
  const handleFilters = event => {
    const newFilters = { ...filters, [event.target.name]: event.target.value };
    onFilterChange(newFilters);
  };
  return (
    <div className="field is-horizontal filters">
      <label className="label nombre">Nombre</label>
      <input
        className="input"
        type="text"
        placeholder="Fanaticos del asado"
        name="nombre"
        onChange={handleFilters}
        value={filters.nombre}
      />
      <label className="label">Direccion</label>
      <input
        className="input"
        type="text"
        placeholder="Av. Libertador 1231"
        name="direccion"
        onChange={handleFilters}
        value={filters.direccion}
      />
    </div>
  );
};
Filters.propTypes = {
  filters: PropTypes.shape({
    nombre: PropTypes.string.isRequired,
    direccion: PropTypes.string.isRequired
  }).isRequired,
  onFilterChange: PropTypes.func.isRequired
};
export default Filters;
