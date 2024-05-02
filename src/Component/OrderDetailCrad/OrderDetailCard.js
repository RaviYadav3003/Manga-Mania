import { ToastContainer, toast } from "react-toastify";
import { useData } from "../../Context/DataContext";
import "./orderDetailCard.css";
import { useNavigate } from "react-router";

export function OrderDetailsCard() {
    const navigate = useNavigate();
    const { selectedAddress, setIsLoading, handleWishlistCart, handleClearCart, state: { cart }, originalValue, totalValue } = useData();
    const { name, houseNo, city, state, country, zip } = selectedAddress ?? {};

    const handlePlaceOrder = () => {
        setIsLoading(true);
        setTimeout(() => {
            handleClearCart();
            handleWishlistCart()
            toast.success("Order Placed Successfully!");
            setTimeout(() => {
                navigate("/");
                setIsLoading(false);
                document.documentElement.scrollTop = 0;
            }, 500);
        }, 1000);
    };

    return (
        <div className="order__details__card__container">
            <h3>ORDER DETAILS</h3>

            <div className="order__details__container">
                <div>
                    <strong>Item</strong>
                    <strong>Qty</strong>
                </div>
                {cart.map(({ title, quantity }) => {
                    return (
                        <div>
                            <p>{title}</p>
                            <p>{quantity}</p>
                        </div>
                    );
                })}
            </div>
            <h3>PRICE DETAILS</h3>

            <div className="checkout__price__details__container">
                <div>
                    <p>Price</p>
                    <p>Rs {originalValue.total}</p>
                </div>
                <div>
                    <p>Discount</p>
                    <p>- RS {originalValue.total - totalValue.total}</p>
                </div>
                <div>
                    <p>Delivery Charges</p>
                    <p>Rs Free</p>
                </div>
                <div>
                    <strong>Total Amount</strong>
                    <strong>Rs {totalValue.total}</strong>
                </div>
            </div>
            <div>
                <h3>DELIVER TO</h3>
                <div className="address__container">
                    {selectedAddress ? (
                        <p>{`${name}, ${houseNo}, ${city}, ${state}, ${country}, ${zip}`}</p>
                    ) : (
                        <p>Please select an address</p>
                    )}
                </div>
            </div>
            <button className="place__order__btn" onClick={handlePlaceOrder}>
                Place Order
            </button>
            <ToastContainer />
        </div>
    );
}