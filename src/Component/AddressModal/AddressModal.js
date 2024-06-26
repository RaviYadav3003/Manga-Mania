import { Icon } from "@iconify/react";
import "./addressModal.css";
import { useEffect, useState } from "react";
import { useData } from "../../Context/DataContext";
import { ToastContainer, toast } from "react-toastify";

export function AddressModal({ setShowAddressModal, mode, previousAddress }) {
    const { addresses, dispatch } = useData();
    const [address, setAddress] = useState({
        name: "",
        houseNo: "",
        city: "",
        state: "",
        country: "",
        zip: "",
        phoneNo: "",
    });
    const dummyAddress = {
        id: addresses.length + 1,
        name: "Ravi Yadav",
        houseNo: "Mahatma phule nagar",
        city: "Mumbai",
        state: "Maharashtra",
        country: "India",
        zip: "421502",
        phoneNo: "8830331416",
    };

    console.log(dummyAddress);

    useEffect(() => {
        if (mode === "add") {
            setAddress({ ...address, id: addresses.length + 1 });
        }
        if (mode === "update") {
            setAddress({ ...previousAddress });
        }
    }, []);

    const handleAddressAddOrUpdate = () => {
        if (
            address.name.trim().length === 0 ||
            address.houseNo.trim().length === 0 ||
            address.city.trim().length === 0 ||
            address.state.trim().length === 0 ||
            address.country.trim().length === 0 ||
            address.zip.trim().length === 0 ||
            address.phoneNo.trim().length === 0
        ) {
            toast.error("Input fields cannot be empty!");
        } else {
            mode === "add"
                ? dispatch({ type: "ADD_ADDRESS", payload: address })
                : dispatch({ type: "UPDATE_ADDRESS", payload: address });
            setShowAddressModal(false);
        }
    };

    return (
        <div>
            <section
                className="address__modal__container"
                onClick={(e) =>
                    e.target.tagName === "SECTION" && setShowAddressModal(false)
                }
            >
                <div
                    className="modal__close__icon__container"
                    onClick={() => setShowAddressModal(false)}
                >
                    <Icon icon="mingcute:close-fill" color="white" height={24} />
                </div>
                <div className="modal__address__container">
                    <header className="address__form__heading">Add Address</header>

                    <div className="address__form__container">
                        <fieldset>
                            <legend>Name</legend>
                            <input
                                type="text"
                                placeholder="Ravi Yadav"
                                value={address.name}
                                onChange={(e) =>
                                    setAddress({ ...address, name: e.target.value })
                                }
                            />
                        </fieldset>
                        <fieldset>
                            <legend>House No</legend>
                            <input
                                type="text"
                                placeholder="Mahatma phule nagar"
                                value={address.houseNo}
                                onChange={(e) =>
                                    setAddress({ ...address, houseNo: e.target.value })
                                }
                            />
                        </fieldset>
                        <fieldset>
                            <legend>City</legend>
                            <input
                                type="text"
                                placeholder="Mumbai"
                                value={address.city}
                                onChange={(e) =>
                                    setAddress({ ...address, city: e.target.value })
                                }
                            />
                        </fieldset>
                        <fieldset>
                            <legend>State</legend>
                            <input
                                type="text"
                                placeholder="Maharashtra"
                                value={address.state}
                                onChange={(e) =>
                                    setAddress({ ...address, state: e.target.value })
                                }
                            />
                        </fieldset>
                        <fieldset>
                            <legend>Country</legend>
                            <input
                                type="text"
                                placeholder="India"
                                value={address.country}
                                onChange={(e) =>
                                    setAddress({ ...address, country: e.target.value })
                                }
                            />
                        </fieldset>
                        <fieldset>
                            <legend>Zip-code</legend>
                            <input
                                type="text"
                                placeholder="421502"
                                value={address.zip}
                                onChange={(e) =>
                                    setAddress({ ...address, zip: e.target.value })
                                }
                            />
                        </fieldset>
                        <fieldset>
                            <legend>Phone No</legend>
                            <input
                                type="text"
                                placeholder="+91-8830331416"
                                value={address.phoneNo}
                                onChange={(e) =>
                                    setAddress({ ...address, phoneNo: e.target.value })
                                }
                            />
                        </fieldset>

                        <div className="address__btn__container">
                            <button
                                className="add__address__btn"
                                onClick={handleAddressAddOrUpdate}
                            >
                                {mode === "add" ? "Add Address" : "Update Address"}
                            </button>

                            <button
                                className="dummy__address__btn"
                                onClick={() => setAddress(dummyAddress)}
                            >
                                Dummy Address
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <ToastContainer />
        </div>
    );
}