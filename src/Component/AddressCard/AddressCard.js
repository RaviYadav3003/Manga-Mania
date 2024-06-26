import { useState } from "react";
import { useData } from "../../Context/DataContext";
import "./addressCard.css";
import { AddressModal } from "../AddressModal/AddressModal";

export function AddressCard({ address }) {
    const { name, houseNo, city, state, country, zip, phoneNo } = address;
    const [showAddressModal, setShowAddressModal] = useState(false);
    const { selectedAddress, dispatch } = useData();

    return (
        <div className="address__card__container">
            <label className="address__label">
                <input
                    type="radio"
                    name="address__radio"
                    checked={selectedAddress?.id === address.id}
                    onChange={() =>
                        dispatch({ type: "SET_SELECTED_ADDRESS", payload: address })
                    }
                />
                <div className="address__details">
                    <h3>{name}</h3>
                    <p>{houseNo}</p>
                    <p>
                        {city}, {state}
                    </p>
                    <p>{zip}</p>
                    <p>{country}</p>
                    <p>+91 - {phoneNo}</p>
                    <div className="btns__container">
                        <button
                            className="update__btn"
                            onClick={() => setShowAddressModal(true)}
                        >
                            Update
                        </button>
                        <button
                            className="remove__btn"
                            onClick={(e) =>
                                dispatch({ type: "DELETE_ADDRESS", payload: address })
                            }
                        >
                            Remove
                        </button>
                        {showAddressModal && (
                            <AddressModal
                                setShowAddressModal={setShowAddressModal}
                                mode="update"
                                previousAddress={address}
                            />
                        )}
                    </div>
                </div>
            </label>
        </div>
    );
}