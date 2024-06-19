import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
const WishlistIconTrue = () => {
    return <FontAwesomeIcon icon={faHeart} style={{ color: 'red',fontSize: '25px'}} />;
  };

  const WishlistIconFalse = () => {
    return <FontAwesomeIcon icon={faHeart} style={{ color: '#b9b9b9',fontSize: '25px'}} />;
  };
  export { WishlistIconTrue, WishlistIconFalse };