import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HomeFourMain from '../pages/HomeFourMain';
import HotelGridMain from '../pages/HotelGridMain';
import HotelGridTwoMain from '../pages/HotelGridTwoMain';
import HotelListingMain from '../pages/HotelListingMain';
import TourGridOneMain from '../pages/TourGridOneMain';
import TourDetailsOneMain from '../pages/TourDetailsOneMain';
import TourDetailsTwoMain from '../pages/TourDetailsTwoMain';
import CartMain from '../pages/CartMain';
import WishlistMain from '../pages/WishlistMain';
import CheckoutMain from '../pages/CheckoutMain';;
import LogInMain from '../pages/LogInMain';
import RegisterMain from '../pages/RegisterMain';
import ErrorMain from '../pages/ErrorMain';

const AppNavigation = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeFourMain />} />
        <Route path="/home-four" element={<HomeFourMain />} />
        <Route path="/hotel-grid" element={<HotelGridMain />} />
        <Route path="/tour-grid-1" element={<HotelGridTwoMain />} />
        <Route path="/tour-grid-2" element={<TourGridOneMain />} />
        <Route path="/map-listing" element={<HotelListingMain />} />
        <Route path="/tour-details" element={<TourDetailsOneMain />} />
        <Route path="/tour-details-2" element={<TourDetailsTwoMain />} />

        <Route path="/cart" element={<CartMain />} />
        <Route path="/wishlist" element={<WishlistMain />} />
        <Route path="/checkout" element={<CheckoutMain />} />
        <Route path="/login" element={<LogInMain />} />
        <Route path="/register" element={<RegisterMain />} />
        <Route path="*" element={<ErrorMain />} />
      </Routes>
    </Router>
  );
};

export default AppNavigation;
