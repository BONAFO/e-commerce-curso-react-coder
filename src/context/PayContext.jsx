import { createContext, useContext, useState } from "react";

const PayContext = createContext();
export const usePay = () => useContext(PayContext);

export default function PayProvider({ children }) {
  const [payProcessor, setPayProcessor] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [CVV, setCVV] = useState("");
  const [DNI, setDNI] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const clearPay = () => {
    PayProvider("");
    setPayProcessor("");
    setCardNumber("");
    setCVV("");
    setDNI("");
    setFullName("");
    setPhone("");
    setEmail("");
    setAddress("");
  };

  return (
    <>
      <PayContext.Provider
        value={{
          payInfo: {
            payProcessor,
            cardNumber,
            CVV,
            DNI,
            fullName,
            phone,
            email,
            address,
          },
          setPayInfo: {
            setPayProcessor,
            setCardNumber,
            setCVV,
            setDNI,
            setFullName,
            setPhone,
            setEmail,
            setAddress,
          },
          clearPay,
        }}
      >
        {children}
      </PayContext.Provider>
    </>
  );
}
