"use client";
import React, { useEffect, useState } from "react";
import PrimaryInput from "../Inputs/PrimaryInput";
import { Country, State, City } from "country-state-city";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { isValidPhoneNumber } from "react-phone-number-input";
import { parsePhoneNumber } from "react-phone-number-input";
import Image from "next/image";
import Card1Img from "../../assets/images/card1.png";
import Card2Img from "../../assets/images/card2.png";

const CheckoutLeft = ({ deliveryMethod, setdeliveryMethod }) => {
  useEffect(() => {
    // if (saveInfo) {
    //   localStorage.setItem(
    //     "deliveryInfo",
    //     JSON.stringify({ ...formData, phone: value })
    //   );
    // }
  }, [saveInfo]);

  return (
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
            <label className="font-semibold text-sm">Pickup from Store</label>
          </div>
          <div className="flex gap-2 items-center border-[rgba(251,107,144,0.2)] border shadow-input-2 p-3">
            <input
              type="radio"
              className="!accent-black cursor-pointer"
              checked={deliveryMethod == "online"}
              onChange={() => setdeliveryMethod("online")}
            />
            <label className="font-semibold text-sm">Online Delievery</label>
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
                  value={""}
                  changeHandler={() => {}}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-semibold text-sm">Email*</label>
                <PrimaryInput
                  name={"email"}
                  type="email"
                  placeholder="Example@yahoo.com"
                  value={""}
                  changeHandler={() => {}}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-semibold text-sm">Phone Number*</label>
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
                  value={""}
                  changeHandler={() => {}}
                />
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
          {/* {saveInfo && (
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-2">
                <label className="font-semibold text-sm">Password</label>
                <PrimaryInput
                  type="password"
                  placeholder="******"
                  value={""}
                  changeHandler={() => {}}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-semibold text-sm">
                  Confirm Password
                </label>
                <PrimaryInput
                  type="password"
                  placeholder="******"
                  value={""}
                  changeHandler={() => {}}
                />
              </div>
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default CheckoutLeft;
