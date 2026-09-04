export const WishlistReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case "Add_To_Wishlist":

            return {
                ...state,
                wishlistItems: [
                    ...state.wishlistItems,
                    {
                        id: payload.id,
                        title: payload.title,
                        price: payload.price,
                        thumbnail: payload.thumbnail,
                    },
                ],
            };

        case "Remove_From_Wishlist":
            return {
                ...state,
                wishlistItems: state.wishlistItems.filter((product) => product.id !== payload),
            };
        default:
            return state;
    }
};