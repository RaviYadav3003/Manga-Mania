import { Icon } from "@iconify/react";
import { useData } from "../../Context/DataContext";
import "./orderUpdateModal.css";
import { CartUpdateCard } from "../CartUpdateCard/CartUpdateCard";

export function OrderUpdateModal({ setOrderUpdateModal }) {
    const { state } = useData();

    return (
        <section
            className="order__update__container"
            onClick={(e) =>
                e.target.tagName === "SECTION" && setOrderUpdateModal(false)
            }
        >
            <div
                className="modal__close__icon__container"
                onClick={() => setOrderUpdateModal(false)}
            >
                <Icon icon="mingcute:close-fill" color="white" height={24} />
            </div>
            <div className="order__update__products__container">
                {state.cart?.map((product) => {
                    return <CartUpdateCard key={product._id} product={product} />;
                })}
            </div>
        </section>
    );
}
