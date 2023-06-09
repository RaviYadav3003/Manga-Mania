

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
                ...state, cart: [...state.cart, action.payload],
            }
        case "PRICE_BY_RANGE":
            return {
                ...state, filters: { ...state.filters, price: action.payload }
            }
        case "FILTER_BY_CATEGORIES":
            return {
                ...state, filters: { ...state.filters, selectedCategories: state.filters.selectedCategories.includes(action.payload) ? state.filters.selectedCategories.filter((category) => category !== action.payload) : [...state.filters.selectedCategories, action.payload], }
            }

        case "STAR_RATING_FILTER":
            return { ...state, filters: { ...state.filters, rating: action.payload } }

        case "SORT_BY_PRICE":
            return { ...state, filters: { ...state.filters, sort: action.payload } }
        case "CLEAR_FILTER_ALL":
            return {
                ...state, filters: {
                    searchValue: null,
                    sort: null,
                    selectedCategories: [],
                    rating: null,
                    price: null,
                }
            }
        default:
            return state
    }
}