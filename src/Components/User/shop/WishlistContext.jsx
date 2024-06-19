// import React, { createContext, useState, useContext } from 'react';

// // Create a context
// const WishlistContext = createContext();

// // Create a provider component
// export const WishlistProvider = ({ children }) => {
//   const [wishlist, setWishlist] = useState([]);

//   const addToWishlist = (product) => {
//     setWishlist((prevWishlist) => [...prevWishlist, product]);
//   };

//   const removeFromWishlist = (productId) => {
//     setWishlist((prevWishlist) =>
//       prevWishlist.filter((product) => product._id !== productId)
//     );
//   };

//   return (
//     <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
//       {children}
//     </WishlistContext.Provider>
//   );
// };

// // Custom hook to use the wishlist context
// export const useWishlist = () => {
//   return useContext(WishlistContext);
// };
