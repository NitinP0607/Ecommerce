
import React, { useContext, useEffect, useRef, useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, Link, useLocation } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { toast } from "react-toastify";

const Navbar = () => {
  const location = useLocation();
  const isCollectionPage = location.pathname === "/collection";

  const [visible, setVisible] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  const profileRef = useRef(null);

  const {
    setShowSearch,
    getCartCount,
    token,
    navigate,
    setToken,
    setCartItems,
  } = useContext(ShopContext);

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
    setProfileMenuOpen(false);
    setVisible(false);
    navigate("/login");
    toast.success("User logout successfully");
  };

  // Close profile dropdown when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target)
      ) {
        setProfileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    };
  }, []);

  // Close menus when changing pages or logging out
  useEffect(() => {
    setProfileMenuOpen(false);
    setVisible(false);
  }, [location.pathname, token]);

  const openProfilePage = () => {
    setProfileMenuOpen(false);
    setVisible(false);
    navigate("/profile");
  };

  const openOrdersPage = () => {
    setProfileMenuOpen(false);
    setVisible(false);
    navigate("/orders");
  };

  return (
    <div className="relative z-40 flex items-center justify-between py-5 font-medium">
      {/* Logo */}
      <Link to="/">
        <img src={assets.logo} className="w-40" alt="Logo" />
      </Link>

      {/* Desktop Navigation */}
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="w-1/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink
          to="/collection"
          className="flex flex-col items-center gap-1"
        >
          <p>COLLECTION</p>
          <hr className="w-1/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className="w-1/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="w-1/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      {/* Right-side Icons */}
      <div className="flex items-center gap-5">
        {/* Search Icon: Only on Collection Page */}
        {isCollectionPage && (
          <button
            type="button"
            onClick={() => setShowSearch(true)}
            aria-label="Search products"
          >
            <img
              src={assets.search_icon}
              alt="Search"
              className="w-5 cursor-pointer"
            />
          </button>
        )}

        {/* Profile Icon and Click Dropdown */}
        <div className="relative" ref={profileRef}>
          <button
            type="button"
            onClick={() => {
              if (!token) {
                navigate("/login");
                return;
              }

              setProfileMenuOpen((prev) => !prev);
            }}
            className="flex items-center justify-center"
            aria-label="Open profile menu"
            aria-expanded={profileMenuOpen}
          >
            <img
              src={assets.profile_icon}
              className="w-5 cursor-pointer"
              alt="Profile"
            />
          </button>

          {/* Profile Dropdown */}
          {token && profileMenuOpen && (
            <div className="absolute z-50 right-0 top-full pt-3 w-40">
              <div className="flex flex-col gap-3 py-3 px-5 bg-white border border-gray-200 shadow-lg text-gray-600 rounded">
                <button
                  type="button"
                  onClick={openProfilePage}
                  className="text-left cursor-pointer hover:text-black"
                >
                  My Profile
                </button>

                <button
                  type="button"
                  onClick={openOrdersPage}
                  className="text-left cursor-pointer hover:text-black"
                >
                  Orders
                </button>

                <button
                  type="button"
                  onClick={logout}
                  className="text-left cursor-pointer hover:text-black"
                >
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Cart */}
        <Link to="/cart" className="relative">
          <img
            src={assets.cart_icon}
            className="w-5 cursor-pointer"
            alt="Cart"
          />

          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>

        {/* Mobile Menu Icon */}
        <button
          type="button"
          onClick={() => setVisible(true)}
          className="sm:hidden"
          aria-label="Open navigation menu"
        >
          <img
            src={assets.menu_icon}
            className="w-5 cursor-pointer"
            alt="Menu"
          />
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 z-[60] bg-white transition-transform duration-300 ${
          visible ? "translate-x-0" : "translate-x-full pointer-events-none"
        }`}
      >
        <div className="flex flex-col text-gray-600 pt-5 px-5">
          {/* Back Button */}
          <button
            type="button"
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer text-left"
          >
            <img
              className="h-4 rotate-180"
              src={assets.dropdown_icon}
              alt=""
            />
            <p>GO BACK</p>
          </button>

          <NavLink
            onClick={() => setVisible(false)}
            className="py-3 pl-6 border-b border-gray-100"
            to="/"
          >
            HOME
          </NavLink>

          <NavLink
            onClick={() => setVisible(false)}
            className="py-3 pl-6 border-b border-gray-100"
            to="/collection"
          >
            COLLECTION
          </NavLink>

          <NavLink
            onClick={() => setVisible(false)}
            className="py-3 pl-6 border-b border-gray-100"
            to="/about"
          >
            ABOUT
          </NavLink>

          <NavLink
            onClick={() => setVisible(false)}
            className="py-3 pl-6 border-b border-gray-100"
            to="/contact"
          >
            CONTACT
          </NavLink>

          {/* Mobile Account Options */}
          <div className="mt-4 flex flex-col">
            {token ? (
              <>
                <button
                  type="button"
                  onClick={openProfilePage}
                  className="text-left py-3 pl-6 border-b border-gray-100"
                >
                  MY PROFILE
                </button>

                <button
                  type="button"
                  onClick={openOrdersPage}
                  className="text-left py-3 pl-6 border-b border-gray-100"
                >
                  MY ORDERS
                </button>

                <button
                  type="button"
                  onClick={logout}
                  className="text-left py-3 pl-6 border-b border-gray-100"
                >
                  LOGOUT
                </button>
              </>
            ) : (
              <button
                type="button"
                onClick={() => {
                  setVisible(false);
                  navigate("/login");
                }}
                className="text-left py-3 pl-6 border-b border-gray-100"
              >
                LOGIN
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
