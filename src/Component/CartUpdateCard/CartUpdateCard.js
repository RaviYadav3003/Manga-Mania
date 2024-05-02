import "./CartUpdateCard.css";
import { ToastContainer } from "react-toastify";
import { useData } from "../../Context/DataContext";

export function CartUpdateCard({ product }) {
    const { state, handleRemoveCart, handleAddToWishlist, removeFromWhislist, increaseQuantity, decreaseQuantity } = useData();
    console.log(product)
    const { id, title, author, price, img, quantity } = product
    return (<>

        <div className="CartUpdated-listing">
            <div>
                <img src={img} alt="Books will render" />
            </div>

            <div className="CartUpdated-side">
                <div className="CartUpdated-title">
                    <span><b>{title}</b></span>
                </div>
                <div className="CartUpdated-author">
                    <span >{author} </span>
                </div>
                <div className="CartUpdated-price">
                    <span>₹{price} /-</span>
                </div>

                <div className='CartUpdated-quantity'>
                    <button onClick={() => decreaseQuantity(id)} disabled={quantity <= 1} class="material-symbols-outlined">
                        remove
                    </button>
                    <span>{quantity}</span>
                    <button onClick={() => increaseQuantity(id)} class="material-symbols-outlined">
                        add
                    </button>
                </div>
                <div className='CartUpdated-wishlist'>
                    {state.wishlist?.some((data) => data.id === id) ? (
                        <button className="CartUpdated-wishlist-button" onClick={() => removeFromWhislist(product)}>
                            remove from wishlist
                        </button>
                    ) : (
                        <button className="CartUpdated-wishlist-button" onClick={() => handleAddToWishlist(product)}>
                            add to wishlist
                        </button>
                    )}
                </div>
                <div className="CartUpdated-remove-button">
                    <button onClick={() => handleRemoveCart(product)}>Remove from cart</button>
                </div>
            </div>


        </div>
        <ToastContainer />


    </>
    );
}