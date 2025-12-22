export const payValidationsForm = (formData) => {
  let validator = true;
  if (!(formData.DNI.length === 8)) {
    validator = validator && false;
  }

  return validator;
};

export const payFormSelection = (payInfo) => {
  const fieldsSelected = {};

  switch (payInfo.payMethod) {
    case 1:
    case 2:
      fieldsSelected.payProcessor = payInfo.payProcessor;
      fieldsSelected.cardNumber = payInfo.cardNumber.slice(
        payInfo.cardNumber.length - 4
      );

    case 3:
    case 4:
      fieldsSelected.dni = payInfo.DNI;
      fieldsSelected.fullName = payInfo.fullName;
      fieldsSelected.phone = payInfo.phone;
      fieldsSelected.email = payInfo.email;
      fieldsSelected.address = payInfo.address;
      fieldsSelected.payMethod = payInfo.payMethod;

      break;

    default:
      break;
  }

  return fieldsSelected;
};
