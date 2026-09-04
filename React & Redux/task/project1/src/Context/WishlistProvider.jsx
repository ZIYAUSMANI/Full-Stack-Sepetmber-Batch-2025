        import { useReducer } from 'react';
        import { WishlistContext } from './Context';
        import { WishlistReducer } from '../Reducer/WishlistReducer';

        const WishlistProvider = ({ children }) => {

            const [wishlistState, wishlistDispatch] = useReducer(WishlistReducer, { userID: 1, wishlistItems: [] });

            return (
                <WishlistContext.Provider
                    value={{ wishlistState, wishlistDispatch }}
                >
                    {children}
                </WishlistContext.Provider>
            );
        };

        export default WishlistProvider;