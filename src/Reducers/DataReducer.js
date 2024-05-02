export const initialState = {
    filters: {
        searchValue: null,
        sort: null,
        selectedCategories: [],
        rating: null,
        price: null,
    },
    categories: [],
    products: [],
    cart: [],
    wishlist: [],
    addresses: [],
    selectedAddress: null,
};

export const dataReducer = (state, action) => {

    switch (action.type) {
        case "INITIALIZE_CATEGORIES":
            return { ...state, categories: action.payload };

        case "INITIALIZE_PRODUCTS":
            return {
                ...state,
                products: action.payload,
            };
        case "SERCH_PRODUCT":
            return {
                ...state, filters: { ...state.filters, searchValue: action.payload }
            }
        case "ADD_TO_WISHLIST":
            return {
                ...state, wishlist: state.wishlist.includes(action.payload) ? state.wishlist.filter((item) => item !== action.payload) : [...state.wishlist, action.payload],
            }
        case "REMOVE_FROM_CART":
            return {
                ...state, cart: state.cart.includes(action.payload) ? state.cart.filter((item) => item !== action.payload) : [...state.cart, action.payload],
            }
        case "REMOVE_FROM_WISHLIST":
            return {
                ...state, wishlist: state.wishlist.includes(action.payload) ? state.wishlist.filter((item) => item !== action.payload) : [...state.wishlist, action.payload],
            }
        case "ADD_TO_CART":
            return {
                ...state, cart: [...state.cart, { ...action.payload, quantity: 1 }],
            }
        case "PRICE_BY_RANGE":
            return {
                ...state, filters: { ...state.filters, price: action.payload }
            }
        case "INCREASE_QUANTITY":
            return {
                ...state,
                cart: state.cart.map(item => item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item)
            };
        case "DECREASE_QUANTITY":
            return {
                ...state,
                cart: state.cart.map(item => item.id === action.payload ? { ...item, quantity: Math.max(item.quantity - 1, 0) } : item)
            };
        case "FILTER_BY_CATEGORIES":
            return {
                ...state, filters: { ...state.filters, selectedCategories: state.filters.selectedCategories.includes(action.payload) ? state.filters.selectedCategories.filter((category) => category !== action.payload) : [...state.filters.selectedCategories, action.payload], }
            }

        case "STAR_RATING_FILTER":
            return { ...state, filters: { ...state.filters, rating: action.payload } }

        case "SORT_BY_PRICE":
            return { ...state, filters: { ...state.filters, sort: action.payload } }
        case "CLEAR_CART":
            return { ...state, cart: action.payload };
        case "CLEAR_WISHLIST":
            return { ...state, wishlist: action.payload };
        case "CLEAR_FILTER_ALL":
            return {
                ...state, filters: {
                    searchValue: null,
                    sort: null,
                    selectedCategories: [],
                    rating: null,
                    price: 600,
                }
            }

        case "SET_DEFAULT_ADDRESS":
            return { ...state, addresses: [action.payload] };
        case "ADD_ADDRESS":
            return { ...state, addresses: [...state.addresses, action.payload] };
        case "DELETE_ADDRESS": {
            const deletedAddress = action.payload;

            const newAddresses = state.addresses.filter(
                ({ id }) => id !== deletedAddress.id
            );

            return { ...state, addresses: newAddresses };
        }
        case "UPDATE_ADDRESS": {
            const updatedAddress = action.payload;

            const newAddresses = state.addresses.map((address) => {
                if (address.id === updatedAddress.id) {
                    address = { ...updatedAddress };
                }
                return address;
            });

            return { ...state, addresses: newAddresses };
        }
        case "SET_SELECTED_ADDRESS":
            return { ...state, selectedAddress: action.payload };
        default:
            return state
    }
}