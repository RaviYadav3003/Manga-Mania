import "./orderChange.css";
import { OrderUpdateModal } from "../OrderUpdateModal/OrderUpdateModal";
import { useState } from "react";
import { useData } from "../../Context/DataContext";

export function OrderChange() {
    const { state: { cart } } = useData();
    const [orderUpdateModal, setOrderUpdateModal] = useState(false);

    return (
        <div className="order__change__container">
            <div className="order__change__details">
                <h3>Order Summary</h3>
                <p>{`${cart.length} Item`}</p>
            </div>

            <button
                className="order__change__btn"
                onClick={() => setOrderUpdateModal(true)}
            >
                Update
            </button>

            {orderUpdateModal && (
                <OrderUpdateModal setOrderUpdateModal={setOrderUpdateModal} />
            )}
        </div>
    );
}