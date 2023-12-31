"use client";
import React, { useContext, useEffect, useState } from "react";
import TransparentButton from "../buttons/TransparentButton";
import PrimaryInput from "../Inputs/PrimaryInput";
import { Country, State, City } from "country-state-city";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { isValidPhoneNumber } from "react-phone-number-input";
import { parsePhoneNumber } from "react-phone-number-input";
import Image from "next/image";
import Card1Img from "../../assets/images/card1.png";
import Card2Img from "../../assets/images/card2.png";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/contexts/userContext";
import useAlert from "@/hooks/useAlert";
import { createOrder } from "@/api/order";
import {
  CardElement,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { createPayment, updatePayment } from "@/api/payment";

const CheckoutWrapper = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [data, setdata] = useState(null);

  const [loading, setloading] = useState(true);

  const { setAlert } = useAlert();

  const { cart, setcart, currentUser, paymentIntentId } =
    useContext(AuthContext);

  const [originalTotal, setoriginalTotal] = useState(0);

  const [apiCalled, setapiCalled] = useState(false);

  useEffect(() => {
    if (cart.items.length > 0) {
      let disAm = 0;
      let total = 0;
      cart.items.map((item) => {
        total += item.quantity * item.product.price;
        disAm +=
          item.quantity *
          (item.product.price - item.product.discountedPrice).toFixed(1);
      });
      setoriginalTotal(total);
      setdiscountAmount(disAm);
    }

    setdata(cart);
    setloading(false);
  }, [cart]);

  const router = useRouter();
  // address
  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState(null);
  const [email, setemail] = useState("");
  const [country, setcountry] = useState("ES");

  const [formData, setFormData] = useState({
    username: null,
    country: null,
    state: null,
    city: null,
    address: null,
  });

  const changeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    // if (value) {
    //   setIsValid(false);

    // if (value.length > 0) {
    // if (isValidPhoneNumber(value)) {
    // setIsValid(true);

    // let countryName = parsePhoneNumber(value);
    let countryName = country;
    if (countryName) {
      let mainCountry = Country.getCountryByCode(countryName).isoCode;

      if (mainCountry) {
        let state = State.getStatesOfCountry(countryName);
        let city;
        if (state.length > 0) {
          city = City.getCitiesOfState(countryName, state[0].isoCode);
        }
        setFormData({
          ...formData,
          country: Country.getAllCountries().find((c) => c.isoCode == country)
            .name,
          state: state.length > 0 ? state[0].isoCode : "",
          city: city && city.length > 0 ? city[0].name : "",
        });
      }
      // }
    }
    // }
    // }
  }, [country]);

  const [paymentMethod, setpaymentMethod] = useState("card");

  //remember my info
  const [saveInfo, setsaveInfo] = useState(false);

  const [deliveryMethod, setdeliveryMethod] = useState("pickup");

  const [discountAmount, setdiscountAmount] = useState(0);

  const [deliveryFee, setdeliveryFee] = useState(0);

  const [originalAmount, setoriginalAmount] = useState(cart.total);

  useEffect(() => {
    originalAmount >= 25
      ? setdeliveryFee(0)
      : deliveryMethod == "pickup"
      ? setdeliveryFee(0)
      : setdeliveryFee(4);
  }, [deliveryMethod]);

  const handleCreateOrder = async () => {
    if (!currentUser && !email) {
      return setAlert("Please provide an email address", "danger");
    }
    const data = {
      method: deliveryMethod,
      delivery_charges:
        originalAmount >= 25 ? 0 : deliveryMethod == "online" ? 4 : 0,
    };
    if (deliveryMethod == "online") {
      let flag = true;
      for (const [key, value] of Object.entries(formData)) {
        if (value == null) {
          flag = false;
        }
      }
      if (!flag) {
        return setAlert("Please fill all delivery details", "danger");
      }
      data.name = formData.username;
      data.email = formData.email;
      data.country = formData.country;
      data.region = formData.state;
      data.city = formData.city;
      data.address = formData.address;
      data.number = value;
      data.state = formData.state;
    }
    data.payment_method = paymentMethod;
    if (currentUser) {
      data.user = currentUser._id;
    }
    //cart info
    if (cart.items.length <= 0) {
      return setAlert("Your Cart is Empty", "danger");
    }
    data.total = cart.total;
    data.items = cart.items.map((item) => {
      return {
        quantity: item.quantity,
        id: item.product._id,
        price: item.product.discountedPrice,
      };
    });
    if (currentUser) {
      data.email = currentUser.email;
    } else {
      data.email = email;
    }
    if (paymentMethod == "card") {
      await updatePayment({ amount: cart.total, id: paymentIntentId });

      setapiCalled(true);
      if (elements == null) {
        return;
      }
      const { error: submitError } = await elements.submit();
      if (submitError) {
        return;
      }
      setapiCalled(true);
      await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/orderSuccess`,
        },
        redirect: "if_required",
      });
    }
    createOrder({ data })
      .then((res) => {
        setapiCalled(false);
        localStorage.setItem(
          "deliveryInformation",
          JSON.stringify({ ...data, items: cart.items })
        );
        setcart({ total: 0, items: [] });
        router.push("/orderSuccess");
      })
      .catch((err) => {
        setapiCalled(false);
      });
  };

  const handleMethodChange = (name) => {
    setdeliveryMethod(name);
    setcart({
      ...cart,
      total:
        originalAmount >= 25
          ? cart.total
          : name == "online"
          ? cart.total + 4
          : cart.total - 4,
    });
  };

  return (
    <>
      {loading ? (
        ""
      ) : (
        <div className="flex flex-wrap my-16 justify-center gap-10 md:gap-0">
          {/* <CheckoutForm /> */}
          <div className="w-full md:w-[57%] xl:w-[65%]">
            <div>
              <div className="flex flex-col gap-8">
                {!currentUser && (
                  <div className="flex flex-col gap-4 px-5 py-9 border border-[rgba(251,107,144,0.2)] rounded-lg">
                    <div className="flex flex-col gap-2">
                      <label className="font-semibold text-sm">Email*</label>
                      <PrimaryInput
                        type="email"
                        placeholder="Example@yahoo.com"
                        value={email}
                        changeHandler={(e) => setemail(e.target.value)}
                      />
                    </div>
                  </div>
                )}
                <div className="flex flex-col gap-4 px-5 py-9 border border-[rgba(251,107,144,0.2)] rounded-lg">
                  <p className="text-xl font-bold">Delievery Method</p>
                  <div className="flex gap-2 items-center border-[rgba(251,107,144,0.2)] border shadow-input-2 p-3">
                    <input
                      type="radio"
                      className="!accent-black cursor-pointer"
                      checked={deliveryMethod == "pickup"}
                      onChange={() => handleMethodChange("pickup")}
                    />
                    <label className="font-semibold text-sm">
                      Pickup from Store
                    </label>
                  </div>

                  <div className="flex gap-2 items-center border-[rgba(251,107,144,0.2)] border shadow-input-2 p-3">
                    <input
                      type="radio"
                      className="!accent-black cursor-pointer"
                      checked={deliveryMethod == "online"}
                      onChange={() => handleMethodChange("online")}
                    />
                    <label className="font-semibold text-sm">
                      Online Delivery
                    </label>
                  </div>
                </div>
                {deliveryMethod == "online" && (
                  <div className="flex flex-col gap-4 px-5 py-9 border border-[rgba(251,107,144,0.2)] rounded-lg">
                    <p className="text-xl font-bold">Shipping Information</p>
                    <div className="flex flex-col gap-5">
                      <div className="flex flex-col gap-2">
                        <label className="font-semibold text-sm">
                          Username*
                        </label>
                        <PrimaryInput
                          name={"username"}
                          type="text"
                          placeholder="David John"
                          value={formData.username}
                          changeHandler={changeHandler}
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="font-semibold text-sm">
                          Phone Number*
                        </label>
                        <PrimaryInput
                          type={"number"}
                          placeholder="Enter phone number"
                          className="bg-gray-1 shadow-custom-1 py-2 outline-none px-2  rounded-md phone-input"
                          defaultCountry="US"
                          value={value}
                          changeHandler={(e) => {
                            setValue(e.target.value);
                          }}
                        />
                        {isValid == false ? (
                          <small style={{ color: "red" }}>
                            Enter a valid phone number
                          </small>
                        ) : null}
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="font-semibold text-sm">Address</label>
                        <PrimaryInput
                          type="text"
                          name={"address"}
                          placeholder="Street No 4 Park lane"
                          value={formData.address}
                          changeHandler={changeHandler}
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="font-semibold text-sm">Country</label>
                        <select
                          name="country"
                          className="bg-gray-1 shadow-custom-1 py-2 outline-none px-2  rounded-md"
                          id="country"
                          // disabled
                          value={country}
                          onChange={(e) => {
                            setcountry(e.target.value);
                            changeHandler(e);
                          }}
                        >
                          {Country.getAllCountries().map(
                            (country, val, index) => {
                              return (
                                <option
                                  key={val}
                                  value={country.isoCode}
                                  className="notranslate"
                                >
                                  {country.name}
                                </option>
                              );
                            }
                          )}
                        </select>
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="font-semibold text-sm">State</label>
                        <select
                          name="state"
                          onChange={changeHandler}
                          className="bg-gray-1 shadow-custom-1 py-2 outline-none px-2  rounded-md"
                          id="city"
                        >
                          {State.getStatesOfCountry(country).map(
                            (state, index) => {
                              return (
                                <option
                                  key={index}
                                  value={state.isoCode}
                                  className="notranslate"
                                >
                                  {state.name}
                                </option>
                              );
                            }
                          )}
                          {/* {isValid && value ? (
                            value.length > 0 && isValidPhoneNumber(value) ? (
                              State.getStatesOfCountry(
                                parsePhoneNumber(value).country
                              ).map((state, index) => {
                                return (
                                  <option key={index} value={state.isoCode}>
                                    {state.name}
                                  </option>
                                );
                              })
                            ) : null
                          ) : (
                            <option value={""}>State</option>
                          )} */}
                        </select>
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="font-semibold text-sm">City</label>
                        <select
                          name="city"
                          value={formData.city}
                          onChange={changeHandler}
                          className="bg-gray-1 shadow-custom-1 py-2 outline-none px-2  rounded-md"
                          id="city"
                        >
                          {City.getCitiesOfState(country, formData.state).map(
                            (city, index) => {
                              return (
                                <option
                                  key={index}
                                  value={city.name}
                                  className="notranslate"
                                >
                                  {city.name}
                                </option>
                              );
                            }
                          )}
                          {/* {isValid && value ? (
                            value.length > 0 && isValidPhoneNumber(value) ? (
                              City.getCitiesOfState(
                                parsePhoneNumber(value).country,
                                formData.state
                              ).map((city, index) => {
                                return (
                                  <option key={index} value={city.name}>
                                    {city.name}
                                  </option>
                                );
                              })
                            ) : null
                          ) : (
                            <option value={""}>City</option>
                          )} */}
                        </select>
                      </div>
                    </div>
                  </div>
                )}
                <div className="flex flex-col gap-4 px-5 py-9 border border-[rgba(251,107,144,0.2)] rounded-lg">
                  <p className="text-xl font-bold">Select payment methods</p>
                  <div className="border border-[rgba(251,107,144,0.3)] rounded-lg">
                    <div className="flex items-center justify-between px-5 pb-5">
                      <div className="flex gap-3">
                        <input
                          type="radio"
                          className="!accent-black cursor-pointer"
                          checked={paymentMethod == "card"}
                          onChange={() => setpaymentMethod("card")}
                        />
                        <label>Credit Card</label>
                      </div>
                      <div className="flex gap-3 justify-end">
                        <Image src={Card1Img} />
                        <Image src={Card2Img} />
                      </div>
                    </div>
                    {paymentMethod == "card" && (
                      <>
                        <PaymentElement className="border-none p-5" />
                      </>
                    )}
                  </div>
                </div>
                {/* <div className="flex flex-col gap-4 px-5 py-9 border border-[rgba(251,107,144,0.2)] rounded-lg">
                  <p className="text-lg font-bold">Remember my information</p>
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      className="accent-primary cursor-pointer"
                      checked={saveInfo}
                      onChange={() => setsaveInfo(!saveInfo)}
                    />
                    <label>Save my information for future checkout</label>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          <div className="w-full md:w-[40%] xl:w-[30%] p-5 xl:p-10 rounded-lg shadow-cart-wrapper border border-[rgba(251,107,144,0.2)] h-fit ml-[3%]">
            <div className="flex flex-col gap-3 xl:gap-5">
              <p className="text-xl font-bold">Your Order</p>
              <div>
                <div className="flex flex-col gap-2">
                  {data.items.map((item) => (
                    <div class="flex gap-2 items-center w-full">
                      <img
                        src={item.product.images[0]}
                        className="w-[75px] h-[75px] object-cover"
                      />

                      <div className="flex flex-col justify-center overflow-hidden w-full">
                        <div className="flex justify-between items-center w-full">
                          <p className="font-bold max-w-[120px] sm:max-w-[300px] md:max-w-[150px] lg:max-w-[280px] truncate line-clamp-2 whitespace-normal notranslate">
                            {item.product.name}
                          </p>
                          <p className="notranslate">
                            {item.product.discountedPrice.toFixed(2)}€
                          </p>
                        </div>
                        <p className="text-secondary text-sm truncate whitespace-normal line-clamp-2">
                          {item.product.description}
                        </p>
                        <p className="text-sm notranslate">x{item.quantity}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-between items-center">
                <p className="font-bold">SubTotal</p>
                <p className="font-bold notranslate">
                  {originalTotal.toFixed(2)}€
                </p>
              </div>
              <div className="flex justify-between items-center">
                <p className="font-bold">Discount</p>
                <p className="text-secondary notranslate">
                  €{discountAmount.toFixed(2)}
                </p>
              </div>
              <div className="flex justify-between items-center">
                <p className="font-bold">Delivery fee</p>
                <p className="text-secondary notranslate">
                  {deliveryFee.toFixed(2)}€
                </p>
              </div>
              <div className="flex justify-between items-center text-xl font-bold">
                <p>Grand Total</p>
                <p className="notranslate">{data.total.toFixed(2)}€</p>
              </div>
              <div>
                <TransparentButton
                  disabled={apiCalled}
                  text={"PLACE ORDER"}
                  clickHandler={handleCreateOrder}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CheckoutWrapper;
