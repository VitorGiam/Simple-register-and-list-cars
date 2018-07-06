const Required = value => (value ? undefined : "Obrigatório");
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const OnSubmit = async values => {
  await sleep(300);
  const data = JSON.stringify(values, 0, 2); //debugg
};

const ComposeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined);

const MustBeNumber = value => (isNaN(value) ? "Precisa ser número" : undefined);

const MustBeLength = value =>
  MustBeNumber(value !== 4) ? `Necessário 4 números` : undefined;

export default (Required,
OnSubmit,
ComposeValidators,
MustBeNumber,
MustBeLength);
