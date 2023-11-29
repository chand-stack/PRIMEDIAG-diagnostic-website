import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const CheckOut = ({ amount }) => {
  const { user } = useContext(AuthContext);
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("error", error);
    }
    if (paymentMethod) {
      console.log("paymentMethod", paymentMethod);
    }

    const { paymentIntent, error: isError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            email: user.email || "anonymous",
            name: user.displayName || "anonymous",
          },
        },
      }
    );
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className=" p-3 rounded-xl">
        <CardElement
          className=" rounded-xl text-white p-4 bg-white"
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button type="submit" className="btn mx-auto flex justify-center mt-5">
          Pay ${amount}
        </button>
      </form>
    </div>
  );
};

export default CheckOut;
