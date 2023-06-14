const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);
const zipRegex = new RegExp(/^[0-9]{5}(?:-[0-9]{3})?$/);

function getDefaultStringValidation(fieldName: string): object {
  return {
    required_error: `${fieldName} is required`,
    invalid_type_error: `${fieldName} must be a strig`,
  };
}

export { phoneRegex, zipRegex, getDefaultStringValidation };
