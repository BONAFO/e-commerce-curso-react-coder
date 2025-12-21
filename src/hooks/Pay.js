import { useCart } from "../context/CartContext";
import { usePay } from "../context/PayContext";
import { payFormSelection, payValidationsForm } from "../functions/PayValidations";

export const useSetPayInfo = () => {
  const { setPayInfo } = usePay();
  const {
    setPayProcessor,
    setCardNumber,
    setCVV,
    setDNI,
    setFullName,
    setPhone,
    setEmail,
    setAddress,
    setPayMethod,
  } = setPayInfo;

  return {
    setPayProcessor,
    setCardNumber,
    setCVV,
    setDNI,
    setFullName,
    setPhone,
    setEmail,
    setAddress,
    setPayMethod,
  };
};

export const usePayInfo = () => {
  const { payInfo } = usePay();

  const {
    payProcessor,
    cardNumber,
    CVV,
    DNI,
    fullName,
    phone,
    email,
    address,
    payMethod,
    paymentMethod,
  } = payInfo;

  return {
    payProcessor,
    cardNumber,
    CVV,
    DNI,
    fullName,
    phone,
    email,
    address,
    payMethod,
    paymentMethod,
  };
};

export const useCardInputHook = () => {
  const { payProcessor } = usePayInfo();

  const { setCardNumber, setPayProcessor } = useSetPayInfo();

  const handleCardChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    value = value.replace(/(.{4})/g, "$1 ").trim();
    setCardNumber(value);

    const raw = value.replace(/\s/g, "");
    if (/^4/.test(raw)) setPayProcessor("visa");
    else if (/^5[1-5]/.test(raw)) setPayProcessor("mastercard");
    else if (/^3[47]/.test(raw)) setPayProcessor("amex");
    else setPayProcessor("");
  };

  const logos = {
    visa: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Old_Visa_Logo.svg/1200px-Old_Visa_Logo.svg.png",
    mastercard:
      "https://cdn.iconscout.com/icon/free/png-256/free-mastercard-logo-icon-svg-download-png-2944982.png",
    amex: "https://uridan.shop/wp-content/plugins/woo-stripe-payment/assets/img/cards/amex.svg",
  };

  const cvvLength = payProcessor === "amex" ? 4 : 3;

  return {
    handleCardChange,
    logos,
    cvvLength,
  };
};

export const usePaySubmit = () => {
  const { payInfo } = usePay();
  const { cart } = useCart();

  return (e) => {
    e.preventDefault();
    const validator = payValidationsForm(payInfo);
    if(validator){
      console.log("GUARDANDO!")
      // console.log(payInfo);
      
      
      

      const sell ={
        products: cart.map(pro => {return {id: pro.id, }}),
        finalImport : cart.reduce((to, item) => to + item.price, 0),
        ...payFormSelection(payInfo)
      };
      
      console.log(sell);
      
      
    }else{
      throw Error("Informacion en el form invalida")
    }
    
  };
};
