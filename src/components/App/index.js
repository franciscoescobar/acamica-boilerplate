import React, { useReducer, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Admin from "../Admin";
import Home from "../Home";
import "./index.css";
import * as ROUTES from "../../constants/routes";
import mockDeliveries from "../../mock/deliveries";
import mockDelivery from "../../mock/delivery";
import uniqId from "uniqid";

const App = () => {
  const [state, setState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      deliveries: mockDeliveries,
      delivery: mockDelivery,
      filters: {
        nombre: "",
        direccion: ""
      },
      filteredDeliveries: []
    }
  );
  const { deliveries, filters, filteredDeliveries, delivery } = state;
  const handleSubmitChange = newDelivery => {
    if (newDelivery.id !== undefined) {
      const editDeliveryIndex = deliveries.findIndex(
        delivery => delivery.id === newDelivery.id
      );
      console.log(editDeliveryIndex);
      const newDeliveries = deliveries;
      newDeliveries[editDeliveryIndex] = newDelivery;
      console.log(newDeliveries);
      setState({
        deliveries: newDeliveries,
        filteredDeliveries: newDeliveries
      });
    } else {
      const addNewDelivery = newDelivery;
      addNewDelivery.id = uniqId();
      setState({
        deliveries: [...deliveries, addNewDelivery],
        filteredDeliveries: [...deliveries, addNewDelivery]
      });
    }
  };
  const handleFiltersChange = newFilters => {
    setState({ filters: newFilters });
  };
  const handleDeliveryDelete = newDeliveries => {
    setState({ deliveries: newDeliveries, filteredDeliveries: newDeliveries });
  };
  useEffect(() => {
    const deliveriesFilteredByName = deliveries.filter(delivery =>
      delivery.nombre.includes(filters.nombre)
    );
    const deliveriesFiltered = deliveriesFilteredByName.filter(delivery =>
      delivery.direccion.includes(filters.direccion)
    );
    setState({ filteredDeliveries: deliveriesFiltered });
  }, [filters, deliveries]);
  return (
    <Router>
      <Route
        exact
        path={ROUTES.HOME}
        render={() => (
          <Home
            deliveries={filteredDeliveries}
            filters={filters}
            onFilterChange={handleFiltersChange}
            onDeliveryDelete={handleDeliveryDelete}
          />
        )}
      />
      <Route
        path={ROUTES.ADMIN}
        render={() => (
          <Admin
            deliveries={filteredDeliveries}
            delivery={delivery}
            onSubmitChange={handleSubmitChange}
          />
        )}
      />
    </Router>
  );
};

export default App;
