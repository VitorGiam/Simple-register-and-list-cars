import React from "react";
import Styles from "./Styles";
import { Form, Field } from "react-final-form";
import ApiPostCar from "./Api";

const required = value => (value ? undefined : "Obrigatório");
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const onSubmit = async values => {
  await sleep(300);

  const data = JSON.stringify(values, 0, 2); //debugg

  window.alert(data);
};

const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined);

const mustBeNumber = value => (isNaN(value) ? "Precisa ser número" : undefined);

const mustBeLength = n => value =>
  mustBeNumber(value !== n) ? `Necessário ${n} números` : undefined;

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
          <Field name="carName" validate={required}>
            {({ input, meta }) => (
              <div>
                <label>Nome do carro</label>
                <input {...input} type="text" placeholder="Golf GTI" />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field
            name="carId"
            validate={composeValidators(
              required,
              mustBeNumber,
              mustBeLength(4)
            )}
          >
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
              Submit
            </button>
            <button
              type="button"
              onClick={reset}
              disabled={submitting || pristine}
            >
              Reset
            </button>
          </div>
        </form>
      )}
    />
  </Styles>
);

export default CarRegisterForm;
