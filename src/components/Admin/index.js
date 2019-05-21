import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
const Admin = props => {
  const { deliveries, onSubmitChange, delivery: mockDelivery } = props;
  const [idem, setIdem] = useState(false);
  const [delivery, setDelivery] = useState(mockDelivery);

  useEffect(() => {
    const params = new URLSearchParams(document.location.search);
    const urlId = params.get("id");
    if (urlId !== undefined) {
      const editDelivery = deliveries.filter(delivery => delivery.id === urlId);
      setDelivery(editDelivery[0]);
    }
  }, [deliveries]);

  const handleOnSubmit = event => {
    event.preventDefault();
    console.log(delivery);
    onSubmitChange(delivery);
    props.history.push(`${ROUTES.HOME}`);
  };

  const handleOnInputChange = event => {
    setDelivery({ ...delivery, [event.target.name]: event.target.value });
  };

  const handleOnCheckChange = () => {
    setIdem(!idem);
  };

  return (
    <form className="admin-form" onSubmit={handleOnSubmit}>
      <div className="field">
        <h2 className="subtitle first-title">Datos Administrativos</h2>
        <div className="field is-horizontal">
          <label className="label">Nombre</label>
          <div className="control">
            <input
              name="nombre"
              className="input is-small"
              type="text"
              placeholder="Nombre"
              maxLength="50"
              required
              value={delivery ? delivery.nombre : ""}
              onChange={handleOnInputChange}
            />
          </div>
        </div>

        <div className="field is-horizontal">
          <label className="label">Telefono</label>
          <div className="control">
            <input
              name="telefono"
              className="input is-small"
              type="tel"
              placeholder="264*******"
              maxLength="50"
              required
              onChange={handleOnInputChange}
              value={delivery ? delivery.telefono : ""}
            />
          </div>
        </div>

        <div className="field is-horizontal">
          <label className="label">Descripcion</label>
          <div className="control">
            <textarea
              name="descripcion"
              className="textarea is-small"
              placeholder="Textarea"
              maxLength="1000"
              rows="3"
              cols="100"
              required
              onChange={handleOnInputChange}
              value={delivery ? delivery.descripcion : ""}
            />
          </div>
        </div>

        <div className="field is-horizontal">
          <label className="label">Especialidades</label>
          <div className="control">
            <textarea
              name="especialidades"
              className="textarea is-small"
              placeholder="Textarea"
              rows="2"
              cols="100"
              maxLength="500"
              onChange={handleOnInputChange}
              value={delivery ? delivery.especialidades : ""}
            />
          </div>
        </div>

        <div className="field is-horizontal">
          <label className="label">Direccion</label>
          <div className="control">
            <input
              name="direccion"
              className="input is-small"
              type="text"
              placeholder="Av. Libertador 3212"
              maxLength="200"
              required
              onChange={handleOnInputChange}
              value={delivery ? delivery.direccion : ""}
            />
          </div>
        </div>

        <div className="field is-horizontal">
          <label className="label">Horario de atencion</label>
          <div className="control has-icons-right">
            <input
              name="desde"
              className="input is-small"
              type="time"
              placeholder="8:00"
              required
              value={delivery ? delivery.desde : ""}
              onChange={handleOnInputChange}
            />
            <span className="icon is-small is-right">
              <i className="fas fa-clock" />
            </span>
          </div>
          <div className="control has-icons-right">
            <input
              name="hasta"
              className="input is-small"
              type="time"
              placeholder="20:00"
              required
              value={delivery ? delivery.hasta : ""}
              onChange={handleOnInputChange}
            />
            <span className="icon is-small is-right">
              <i className="fas fa-clock" />
            </span>
          </div>
        </div>
      </div>
      <div className="field columns">
        <div className="column">
          <h2 className="subtitle">Contacto administrativo</h2>
          <div className="field is-horizontal">
            <label className="label">Nombre</label>
            <div className="control">
              <input
                name="nombreAdministrativo"
                className="input"
                type="text"
                placeholder="Nombre"
                maxLength="200"
                required
                value={delivery ? delivery.nombreAdministrativo : ""}
                onChange={handleOnInputChange}
              />
            </div>
          </div>

          <div className="field is-horizontal">
            <label className="label">Apellido</label>
            <div className="control">
              <input
                name="apellidoAdministrativo"
                className="input"
                type="text"
                placeholder="Nombre"
                maxLength="200"
                required
                value={delivery ? delivery.apellidoAdministrativo : ""}
                onChange={handleOnInputChange}
              />
            </div>
          </div>

          <div className="field is-horizontal">
            <label className="label">Telefono</label>
            <div className="control">
              <input
                name="telefonoAdministrativo"
                className="input "
                type="tel"
                placeholder="264*******"
                maxLength="100"
                required
                value={delivery ? delivery.telefonoAdministrativo : ""}
                onChange={handleOnInputChange}
              />
            </div>
          </div>
          <div className="field is-horizontal">
            <label className="label">Email</label>
            <div className="control ">
              <input
                name="emailAdministrativo"
                className="input is-danger"
                type="email"
                placeholder="Email input"
                required
                maxLength="100"
                value={delivery ? delivery.emailAdministrativo : ""}
                onChange={handleOnInputChange}
              />
            </div>
          </div>
        </div>
        <div className="column">
          <h2 className="subtitle last-title">Contacto comercial</h2>
          <div className="checkbox">
            <input
              type="checkbox"
              onChange={handleOnCheckChange}
              value={delivery ? delivery.checkbox : false}
            />
            <label className="idem">Idem contacto administrativo</label>
          </div>

          <div className="field is-horizontal">
            <label className="label">Nombre</label>
            <div className="control">
              <input
                name="nombreComercial"
                className="input"
                type="text"
                placeholder="Nombre"
                maxLength="200"
                required
                value={
                  delivery
                    ? delivery && idem
                      ? delivery.nombreAdministrativo
                      : delivery.nombreComercial
                    : ""
                }
                onChange={handleOnInputChange}
              />
            </div>
          </div>

          <div className="field is-horizontal">
            <label className="label">Apellido</label>
            <div className="control">
              <input
                name="apellidoComercial"
                className="input"
                type="text"
                placeholder="Nombre"
                maxLength="200"
                required
                value={
                  delivery
                    ? delivery && idem
                      ? delivery.apellidoAdministrativo
                      : delivery.apellidoComercial
                    : ""
                }
                onChange={handleOnInputChange}
              />
            </div>
          </div>

          <div className="field is-horizontal">
            <label className="label">Telefono</label>
            <div className="control">
              <input
                name="telefonoComercial"
                className="input "
                type="tel"
                placeholder="264*******"
                maxLength="100"
                required
                value={
                  delivery
                    ? delivery && idem
                      ? delivery.telefonoAdministrativo
                      : delivery.telefonoComercial
                    : ""
                }
                onChange={handleOnInputChange}
              />
            </div>
          </div>

          <div className="field is-horizontal">
            <label className="label">Email</label>
            <div className="control ">
              <input
                name="emailComercial"
                className="input is-danger"
                type="email"
                placeholder="Email input"
                required
                maxLength="100"
                value={
                  delivery
                    ? delivery && idem
                      ? delivery.emailAdministrativo
                      : delivery.emailComercial
                    : ""
                }
                onChange={handleOnInputChange}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="field is-grouped">
        <div className="control">
          <button className="button is-link" type="submit">
            Submit
          </button>
        </div>
        <div className="control">
          <Link className="button is-text" to={ROUTES.HOME}>
            Cancel
          </Link>
        </div>
      </div>
    </form>
  );
};
export default withRouter(Admin);
