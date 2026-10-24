
import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);

  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relevant');

  // Category filter
  const toggleCategory = (e) => {
    const value = e.target.value;

    setCategory((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  // Subcategory filter
  const toggleSubCategory = (e) => {
    const value = e.target.value;

    setSubCategory((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  // Search, filters and sorting
  useEffect(() => {
    let productsCopy = [...products];

    // Search by product name
    if (showSearch && search.trim()) {
      productsCopy = productsCopy.filter((item) =>
        item.name?.toLowerCase().includes(search.trim().toLowerCase())
      );
    }

    // Filter by category: Men, Women, Kids
    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.some(
          (value) =>
            value.toLowerCase() ===
            String(item.category ?? '').trim().toLowerCase()
        )
      );
    }

    // Filter by subcategory: Topwear, Bottomwear, Winterwear
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) => {
        const productSubCategory = String(
          item.subcategory ?? ''
        ).trim().toLowerCase();

        return subCategory.some(
          (value) => value.toLowerCase() === productSubCategory
        );
      });
    }

    // Sort products by price
    if (sortType === 'low-high') {
      productsCopy.sort(
        (a, b) => Number(a.price) - Number(b.price)
      );
    } else if (sortType === 'high-low') {
      productsCopy.sort(
        (a, b) => Number(b.price) - Number(a.price)
      );
    }

    setFilterProducts(productsCopy);
  }, [
    products,
    category,
    subCategory,
    search,
    showSearch,
    sortType,
  ]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">

      {/* Filter Options */}
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          FILTERS
          <img
            className={`h-3 sm:hidden ${
              showFilter ? 'rotate-90' : ''
            }`}
            src={assets.dropdown_icon}
            alt=""
          />
        </p>

        {/* Category Filter */}
        <div
          className={`border border-gray-300 pl-5 py-6 mt-6 ${
            showFilter ? '' : 'hidden'
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">
            CATEGORIES
          </p>

          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            {['Men', 'Women', 'Kids'].map((value) => (
              <label
                key={value}
                className="flex gap-2 cursor-pointer"
              >
                <input
                  type="checkbox"
                  className="w-3"
                  value={value}
                  checked={category.includes(value)}
                  onChange={toggleCategory}
                />
                {value}
              </label>
            ))}
          </div>
        </div>

        {/* Subcategory Filter */}
        <div
          className={`border border-gray-300 pl-5 py-6 my-5 ${
            showFilter ? '' : 'hidden'
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">TYPE</p>

          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            {['Topwear', 'Bottomwear', 'Winterwear'].map(
              (value) => (
                <label
                  key={value}
                  className="flex gap-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    className="w-3"
                    value={value}
                    checked={subCategory.includes(value)}
                    onChange={toggleSubCategory}
                  />
                  {value}
                </label>
              )
            )}
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="flex-1">
        <div className="flex justify-between items-center text-base mb-4">
          <Title text1="ALL" text2="COLLECTIONS" />

          {/* Product Sorting */}
          <select
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
            className="border-2 border-gray-300 text-sm px-2 py-2"
            aria-label="Sort products"
          >
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.map((item) => (
            <ProductItem
              key={item._id}
              name={item.name}
              id={item._id}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>

        {/* Empty State */}
        {filterProducts.length === 0 && (
          <p className="text-gray-500 text-sm py-10">
            No products found. Try changing your filters.
          </p>
        )}
      </div>
    </div>
  );
};

export default Collection;
