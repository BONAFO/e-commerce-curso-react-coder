import CardForm from "../components/Pay/CardForm";
import DirectPay from "../components/Pay/DirectPay";
import TransferForm from "../components/Pay/TransferForm";
import { useCart } from "../context/CartContext";
import { usePay } from "../context/PayContext";
import {
  payFormSelection,
  payValidationsForm,
} from "../functions/PayValidations";

import service, { MODE } from "../db/services";
import { routes } from "../router/router";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const { saveSell, getOrder, getProductsByID } = service[MODE];

export const payMethods = [
  { id: 1, text: "Tarjeta de Débito", compo: <CardForm cardType={"debito"} /> },
  {
    id: 2,
    text: "Tarjeta de Crédito",
    compo: <CardForm cardType={"credito"} />,
  },
  { id: 3, text: "Efectivo", compo: <DirectPay /> },
  { id: 4, text: "Transferencia Bancaria", compo: <TransferForm /> },
];

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
  const [spinner, setSpinner] = useState(false);

  return {
    handleSubmit: async (e) => {
      e.preventDefault();
      const validator = payValidationsForm(payInfo);
      if (validator) {
        const sell = {
          products: cart.map((pro) => {
            return { id: pro.id, quantity: pro.quantity };
            console.log(1);
          }),
          finalImport: cart.reduce((to, item) => to + item.tprice, 0),
          ...payFormSelection(payInfo),
        };
        const newStock = [];

        cart.map((pro) => {
          newStock.push({ id: pro.id, stock: pro.stock - pro.quantity });
        });

        setSpinner(true);
        const response = await saveSell(sell, newStock);

        window.location.href = routes.newOrder.replace(
          ":orderID",
          response.data
        );
      } else {
        throw Error("Informacion en el form invalida");
      }
    },
    spinner,
  };
};

export const useBillHook = () => {
  const { cart, setCart } = useCart();

  const handleRemoveOne = (productID) => {
    setCart((prev) => {
      const updated = [...prev];
      const index = updated.findIndex((item) => item.id === productID);
      if (index !== -1) {
        const item = updated[index];
        if (item.quantity > 1) {
          updated[index] = {
            ...item,
            quantity: item.quantity - 1,
            tprice: item.price * (item.quantity - 1),
          };
        } else {
          updated.splice(index, 1);
        }
      }
      return updated;
    });
  };

  const handleRemoveStack = (productID) => {
    setCart((prev) => prev.filter((item) => item.id !== productID));
  };

  const handleEmptyCart = () => {
    setCart([]);
  };

  const total = cart.reduce((to, item) => to + item.tprice, 0);

  return {
    cart,
    setCart,
    handleRemoveOne,
    handleRemoveStack,
    handleEmptyCart,
    total,
  };
};

export const useShowOrderHook = ({ isDepend = false }) => {
  const { orderID } = useParams();

  const [oderInfo, setOrderInfo] = useState(null);
  const [spinner, setSpinner] = useState(true);

  const handleError = (response) => {
    setSpinner(false);
    throw Error(response);
  };
  const handleSuccess = (response) => {
    setSpinner(false);
    setOrderInfo(response);
  };

  useEffect(() => {
    getOrder(orderID)
      .then(async (orderResponse) => {
        const myorder = orderResponse.data;

        const payMethodFound = payMethods.filter(
          (pm) => pm.id === orderResponse.data.payMethod
        )[0];
        myorder["payMethod"] = {
          id: payMethodFound.id,
          text: payMethodFound.text,
        };

        const productsData = [];
        for (let i = 0; i < myorder.products.length; i++) {
          const productID = myorder.products[i].id;
          const response = await getProductsByID(productID);
          response.data[0]["quantity"] = myorder.products[i]["quantity"];
          productsData.push(response.data[0]);
        }

        myorder.products = productsData;

        handleSuccess(myorder);
      })
      .catch((err) => handleError(err));
  }, [
    typeof isDepend == "boolean"
      ? isDepend === false
        ? undefined
        : id
      : isDepend,
  ]);

  return { oderInfo, setOrderInfo, spinner, setSpinner };
};
