import React, { useState } from "react";
import InputField from "./InputField";
import "./App.css";
import "./index.css";

const App: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [nameOnCard, setNameOnCard] = useState<string>("");
  const [cardNumber, setCardNumber] = useState<string>("");
  const [expDate, setExpDate] = useState<string>("");
  const [cvc, setCvc] = useState<string>("");
  const [company, setCompany] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [apt, setApt] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [postal, setPostal] = useState<string>("");
  const [isSameAsShipping, setIsSameAsShipping] = useState<boolean>(true);

  return (
    <div>
      <nav className="text-xs py-4 flex justify-between items-center">
        <div className="flex-shrink-0">
          <img src="./mark.svg" alt="Logo" className="h-8 ml-4" />
        </div>

        <ul className="flex justify-center space-x-8   flex-grow">
          <li className="font-semibold">
            Cart
            <span className=" ml-4 text-gray-500 ">&gt;</span>
          </li>
          <li className="text-indigo-700 font-semibold">
            Billing Information <span className="ml-4 text-gray-500">&gt;</span>
          </li>
          <li className="font-semibold">Confirmation</li>
        </ul>
      </nav>
      <hr className="my-4" />
      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Section: Form */}
          <div>
            <h1 className="text-2xl mb-4">Contact Information</h1>
            <form className="space-y-6">
              <InputField
                label="Email address"
                type="email"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
                placeholder="Enter your email"
              />
              <h1 className="text-2xl mb-4">Payment Details</h1>
              <InputField
                label="Name on card"
                type="text"
                value={nameOnCard}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setNameOnCard(e.target.value)
                }
                placeholder="Enter name on the card"
              />
              <InputField
                label="Card number"
                type="text"
                value={cardNumber}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setCardNumber(e.target.value)
                }
                placeholder="Enter your card number"
              />
              <div className="grid grid-cols-2 gap-4">
                <InputField
                  label="Expiration date (MM/YY)"
                  type="text"
                  value={expDate}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setExpDate(e.target.value)
                  }
                  placeholder="MM/YY"
                  className="w-full md:w-full " // Make the Expiration Date box bigger
                />
                <InputField
                  label="CVC"
                  type="text"
                  value={cvc}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setCvc(e.target.value)
                  }
                  placeholder="CVC"
                  className="w-full md:w-1/4" // Make the CVC box smaller
                />
              </div>
              <h1 className="text-2xl mb-4">Shipping Address</h1>

              <InputField
                label="Company"
                type="text"
                value={company}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setCompany(e.target.value)
                }
                placeholder="Enter company name"
              />
              <InputField
                label="Address"
                type="text"
                value={address}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setAddress(e.target.value)
                }
                placeholder="Enter your address"
              />
              <InputField
                label="Apartment, suite, etc."
                type="text"
                value={apt}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setApt(e.target.value)
                }
                placeholder="Apartment, suite, etc."
              />
              <div className="grid grid-cols-3 gap-4">
                <InputField
                  label="City"
                  type="text"
                  value={city}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setCity(e.target.value)
                  }
                  placeholder="City"
                />
                <InputField
                  label="State/Province"
                  type="text"
                  value={state}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setState(e.target.value)
                  }
                  placeholder="State"
                />
                <InputField
                  label="Postal code"
                  type="text"
                  value={postal}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setPostal(e.target.value)
                  }
                  placeholder="Postal code"
                />
              </div>
              <h1 className="text-2xl mb-4">Billing information</h1>

              <div>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-indigo-700"
                    checked={isSameAsShipping}
                    onChange={() => setIsSameAsShipping(!isSameAsShipping)}
                  />
                  <span className="text-gray-700 font-medium">
                    Same as shipping information
                  </span>
                </label>
              </div>

              <hr className="my-4 border-t-2  border-gray-300" />

              <div className="flex items-center justify-between">
                <h3 className="text-gray-500">
                  You won't be charged until the next step.
                </h3>
                <button
                  type="submit"
                  className="bg-indigo-700 text-white py-2 px-4 rounded-lg hover:bg-indigo-700"
                >
                  Continue
                </button>
              </div>
            </form>
          </div>

          {/* Right Section: Order Summary */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h2 className="text-xl mb-4">Order Summary</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <img
                    src="./checkout-page-04-product-01.jpg"
                    className="w-12 h-12 object-cover rounded-md mr-4"
                    alt="Micro Backpack"
                  />
                  <div>
                    <p className="text-sm">Micro Backpack</p>
                    <p className="text-xs text-gray-500">Moss</p>
                    <p className="text-xs text-gray-500">5L</p>
                  </div>
                </div>
                <span className="">$70.00</span>
              </div>
              <hr className="my-4" />

              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <img
                    src="./checkout-page-04-product-02.jpg"
                    className="w-12 h-12 object-cover rounded-md mr-4"
                    alt="Small Stuff Satchel"
                  />
                  <div>
                    <p className="text-sm">Small Stuff Satchel</p>
                    <p className="text-xs text-gray-500">Sand</p>
                    <p className="text-xs text-gray-500">18L</p>
                  </div>
                </div>
                <span className="">$180.00</span>
              </div>
              <hr className="my-4" />

              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <img
                    src="./checkout-page-04-product-03.jpg"
                    className="w-12 h-12 object-cover rounded-md mr-4"
                    alt="Carry Clutch"
                  />
                  <div>
                    <p className="text-sm">Carry Clutch</p>
                    <p className="text-xs text-gray-500">White and Black</p>
                    <p className="text-xs text-gray-500">Small</p>
                  </div>
                </div>
                <span className="">$70.00</span>
              </div>
            </div>

            <hr className="my-4" />

            <div className="flex justify-between">
              <span className="text-gray-500">Subtotal</span>
              <span className=" text-gray-500">$320.00</span>
            </div>
            <br></br>
            <div className="flex justify-between">
              <span className="text-gray-500">Shipping</span>
              <span className=" text-gray-500">$15.00</span>
            </div>
            <br></br>

            <div className="flex justify-between">
              <span className="text-gray-500">Taxes</span>
              <span className=" text-gray-500">$26.80</span>
            </div>
            <br></br>

            <hr className="my-4" />

            <div className="flex justify-between ">
              <span>Total</span>
              <span>$361.80</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
