import React from "react";
import axios from "axios";
import Styles from "./Styles";
import { Form, Field } from "react-final-form";

const required = value => (value ? undefined : "Obrigatório");

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const onSubmit = async values => {
  const data = JSON.stringify(values, 0, 4);

  await sleep(300);

  axios
    .post("/cars", data)

    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    });
};

const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined);

const mustBeNumber = value => (isNaN(value) ? "Precisa ser número" : undefined);

const mustBeLength = n => value =>
  mustBeNumber && value !== n ? `Necessário ${n} números` : undefined;

const CarRegisterForm = () => (
  <Styles>
    <Form
      onSubmit={onSubmit}
      render={({
        handleSubmit,
        reset,
        submitting,
        pristine,
        validating,
        values
      }) => (
        <form onSubmit={handleSubmit}>
          <Field name="name" validate={required}>
            {({ input, meta }) => (
              <div>
                <label>Nome do carro</label>
                <input {...input} type="text" placeholder="Golf GTI" />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field
            name="year"
            validate={composeValidators(required, mustBeNumber)}
            {({ input, meta }) => (
              <div>
                <label>Ano do carro</label>
                <input {...input} type="text" placeholder="2018" />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <div className="buttons">
            <button type="submit" disabled={submitting || pristine}>
              salvar
            </button>
            <button
              type="button"
              onClick={reset}
              disabled={submitting || pristine}
            >
              limpar
            </button>
          </div>
        </form>
      )}
    />
  </Styles>
);

export default CarRegisterForm;
