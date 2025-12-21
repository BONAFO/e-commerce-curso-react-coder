export const payValidationsForm = (formData) => {
  let validator = true;
  if (!(formData.DNI.length === 8)) {
    validator = validator && false;
  }

  return validator;
};

export const payFormSelection = (payInfo) => {
  const fieldsSelected = {};



  return fieldsSelected;
};
