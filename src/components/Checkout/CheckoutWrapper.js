"use client";
import React, { useEffect, useState } from "react";
import CheckoutLeft from "@/components/Checkout/CheckoutLeft";
import CheckoutRight from "@/components/Checkout/CheckoutRight";
import Link from "next/link";
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

const CheckoutWrapper = ({ data }) => {
  const router = useRouter();
  // address
  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState(null);

  const [formData, setFormData] = useState({
    username: null,
    email: null,
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
    if (value) {
      setIsValid(false);

      if (value.length > 0) {
        if (isValidPhoneNumber(value)) {
          setIsValid(true);

          let countryName = parsePhoneNumber(value);
          if (countryName) {
            let country = Country.getCountryByCode(countryName.country);
            if (country) {
              let state = State.getStatesOfCountry(countryName.country);
              let city = City.getCitiesOfState(
                countryName.country,
                state[0].isoCode
              );
              setFormData({
                ...formData,
                country: country.name,
                state: state[0].isoCode,
                city: city[0].name,
              });
            }
          }
        }
      }
    }
  }, [value]);

  const [paymentMethod, setpaymentMethod] = useState("cash");

  // payment
  const [cardNo, setcardNo] = useState("");
  const [nameOnCard, setnameOnCard] = useState("");
  const [expiry, setexpiry] = useState("");
  const [cvv, setcvv] = useState("");

  //remember my info
  const [saveInfo, setsaveInfo] = useState(false);

  const [deliveryMethod, setdeliveryMethod] = useState("pickup");

  const handleSubmit = () => {
    localStorage.setItem(
      "deliveryInformation",
      JSON.stringify({
        ...formData,
        value,
        online: deliveryMethod == "pickup" ? false : true,
      })
    );
    router.push("/orderSuccess");
  };

  return (
    <div className="flex flex-wrap my-16 justify-center gap-10 md:gap-0">
      <div className="w-full md:w-[57%] xl:w-[65%]">
        <div>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4 px-5 py-9 border border-[rgba(251,107,144,0.2)] rounded-lg">
              <p className="text-xl font-bold">Delievery Method</p>
              <div className="flex gap-2 items-center border-[rgba(251,107,144,0.2)] border shadow-input-2 p-3">
                <input
                  type="radio"
                  className="!accent-black cursor-pointer"
                  checked={deliveryMethod == "pickup"}
                  onChange={() => setdeliveryMethod("pickup")}
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
                  onChange={() => setdeliveryMethod("online")}
                />
                <label className="font-semibold text-sm">
                  Online Delievery
                </label>
              </div>
            </div>
            {deliveryMethod == "online" && (
              <div className="flex flex-col gap-4 px-5 py-9 border border-[rgba(251,107,144,0.2)] rounded-lg">
                <p className="text-xl font-bold">Shipping Information</p>
                <div className="flex flex-col gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="font-semibold text-sm">Username*</label>
                    <PrimaryInput
                      name={"username"}
                      type="text"
                      placeholder="David John"
                      value={formData.username}
                      changeHandler={changeHandler}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-semibold text-sm">Email*</label>
                    <PrimaryInput
                      name={"email"}
                      type="email"
                      placeholder="Example@yahoo.com"
                      value={formData.email}
                      changeHandler={changeHandler}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-semibold text-sm">
                      Phone Number*
                    </label>
                    <PhoneInput
                      placeholder="Enter phone number"
                      className="bg-gray-1 shadow-custom-1 py-2 outline-none px-2  rounded-md phone-input"
                      defaultCountry="US"
                      value={value}
                      onChange={setValue}
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
                    <label className="font-semibold text-sm">State</label>
                    <select
                      name="state"
                      onChange={changeHandler}
                      className="bg-gray-1 shadow-custom-1 py-2 outline-none px-2  rounded-md"
                      id="city"
                    >
                      {isValid && value ? (
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
                      )}
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
                      {isValid && value ? (
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
                      )}
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-semibold text-sm">Country</label>
                    <select
                      name="country"
                      className="bg-gray-1 shadow-custom-1 py-2 outline-none px-2  rounded-md"
                      id="country"
                      disabled
                      value={formData.country}
                      onChange={changeHandler}
                    >
                      {Country.getAllCountries().map((country, val, index) => {
                        return (
                          <option key={val} value={country.name}>
                            {country.name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
              </div>
            )}
            <div className="flex flex-col gap-4 px-5 py-9 border border-[rgba(251,107,144,0.2)] rounded-lg">
              <p className="text-xl font-bold">Select payment methods</p>
              <div className="border border-[rgba(251,107,144,0.3)] rounded-lg">
                <div className="flex items-center gap-3 p-5">
                  <input
                    type="radio"
                    className="!accent-black cursor-pointer"
                    checked={paymentMethod == "cash"}
                    onChange={() => setpaymentMethod("cash")}
                  />
                  <label>Cash on Delievery</label>
                </div>
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
                  <div className="border-t border-primary p-5">
                    <div className="flex flex-col gap-8">
                      <PrimaryInput
                        type="number"
                        placeholder="Card Number"
                        value={""}
                        changeHandler={() => {}}
                      />
                      <PrimaryInput
                        type="text"
                        placeholder="Name on Card"
                        value={""}
                        changeHandler={() => {}}
                      />
                      <PrimaryInput
                        type="text"
                        placeholder="Expiration date (dd/mm/yy)"
                        value={""}
                        changeHandler={() => {}}
                      />
                      <PrimaryInput
                        type="text"
                        placeholder="CVV"
                        value={""}
                        changeHandler={() => {}}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-4 px-5 py-9 border border-[rgba(251,107,144,0.2)] rounded-lg">
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
            </div>
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
                  <Image src={item.image} className="w-[75px] h-[75px]" />
                  <div className="flex flex-col justify-center overflow-hidden w-full">
                    <div className="flex justify-between items-center w-full">
                      <p className="font-bold max-w-[120px] sm:max-w-[300px] md:max-w-[150px] lg:max-w-[280px] truncate line-clamp-2 whitespace-normal">
                        {item.name}
                      </p>
                      <p>${item.price}</p>
                    </div>
                    <p className="text-secondary text-sm">{item.description}</p>
                    <p className="text-sm">x{item.quantity}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-between items-center">
            <p className="font-bold">SubTotal</p>
            <p className="font-bold">${data.total}</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="font-bold">Discount</p>
            <p className="text-secondary">${data.total - data.finalTotal}</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="font-bold">Delivery fee</p>
            <p className="text-secondary">
              $ {deliveryMethod == "pickup" ? 0 : 15}
            </p>
          </div>
          <div className="flex justify-between items-center text-xl font-bold">
            <p>Grand Total</p>
            <p>${data.finalTotal}</p>
          </div>
          <div>
            <TransparentButton
              text={"PLACE ORDER"}
              clickHandler={() => handleSubmit()}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutWrapper;