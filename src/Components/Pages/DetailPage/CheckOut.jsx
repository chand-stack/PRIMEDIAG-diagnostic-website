import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import usePublicAxios from "../../../useAxios/usePublicAxios";
import Swal from "sweetalert2";

const CheckOut = ({ amount, testDetail, refetch }) => {
  const axios = usePublicAxios();
  const { user } = useContext(AuthContext);
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");
  useEffect(() => {
    axios
      .post("/create-payment-intent", { price: amount })
      .then((res) => {
        setClientSecret(res.data.clientSecret);
      })
      .catch((error) => {});
  }, [amount, axios]);
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
      // console.log("error", error);
    }
    if (paymentMethod) {
      // console.log("paymentMethod", paymentMethod);
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
    if (isError) {
      // console.log(isError);
    } else {
      // console.log(paymentIntent);
      if (paymentIntent.status == "succeeded") {
        const reservation = {
          testName: testDetail.name,
          details: testDetail.details,
          email: user.email,
          price: amount,
          transactionId: paymentIntent.id,
          date: testDetail.date,
          status: "pending",
        };
        const response = await axios.post("/reservation", reservation);
        if (response.data.status === "success") {
          Swal.fire({
            title: "Payment successful! ",
            text: "Thank you for choosing us",
            icon: "success",
          });
          const res = await axios.patch(`/service/${testDetail?._id}`, {
            slot: testDetail.slot - 1,
          });
          if (res.data.status === "success") {
            refetch();
          }
        }
      }
    }
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
        <button
          id="appliedBtn"
          type="submit"
          className="btn mx-auto flex justify-center mt-5"
        >
          Pay ${amount}
        </button>
      </form>
    </div>
  );
};

export default CheckOut;
