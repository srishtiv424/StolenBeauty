import React, { useContext, useEffect, useState } from "react";
import { RiArrowDropRightLine } from "react-icons/ri";
import Title from "../components/Title";
import { shopContext } from "../context/stolen";
import ProductItem from "../components/ProductItem";
import Search from "../components/Search";

function Collection() {
  const { products, search, setSearch } = useContext(shopContext);
  const [filterProducts, setFilterProducts] = useState([]);
  const [showFilter, setShowFilter] = useState(true);
  const [category, setCategory] = useState([]);
  const [option, setOption] = useState("relavant");

  const toggleButton = (e) => {
    const value = e.target.value;
    setCategory((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const sortProducts = (productsToSort, sortOption) => {
    const sortedProducts = [...productsToSort];
    if (sortOption === "low-high") {
      return sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption === "high-low") {
      return sortedProducts.sort((a, b) => b.price - a.price);
    }
    return sortedProducts;
  };

  const searchProducts = (productsToSearch, pr) => {
    const lowerSearch = productsToSearch.toLowerCase();
    let dummy = pr.filter(
      (product) =>
        product.title.toLowerCase().includes(lowerSearch) ||
        product.category.toLowerCase().includes(lowerSearch) ||
        product.tags.some((tag) => tag.toLowerCase().includes(lowerSearch))
    );
    return dummy;
  };

  const handleSortChange = (e) => {
    const newOption = e.target.value;
    setOption(newOption);
    setFilterProducts((prev) => sortProducts(prev, newOption));
  };

  useEffect(() => {
    let filtered = products;
    if (category.length !== 0) {
      filtered = products.filter((product) =>
        category.includes(product.category)
      );
    }
    // setFilterProducts(filtered);
    filtered = searchProducts(search, filtered);
    filtered = sortProducts(filtered, option);

    setFilterProducts(filtered);
  }, [category, products, option, search]);

  return (
    <>
      <Search />
      <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
        <div className="min-w-60">
          <p
            onClick={() => setShowFilter((prev) => !prev)}
            className="my-2 text-xl flex items-center cursor-pointer gap-2"
          >
            FILTER{" "}
            <RiArrowDropRightLine
              className={`h-3 sm:hidden ${
                showFilter ? "rotate-90" : ""
              } w-7 h-7`}
            />
          </p>
          <div
            className={`border border-gray-300 pl-5 py-3 mt-6 ${
              showFilter ? "" : "hidden"
            }`}
          >
            <p className="mb-3 text-sm font-medium">CATEGORIES</p>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
              {[
                { label: "Skin Care", value: "skin-care" },
                { label: "Fragrance", value: "fragrances" },
                { label: "Beauty", value: "beauty" },
                { label: "Jewellery", value: "womens-jewellery" },
                { label: "Watches", value: "womens-watches" },
              ].map((cat) => (
                <p className="flex gap-2" key={cat.value}>
                  <input
                    className="w-3"
                    type="checkbox"
                    value={cat.value}
                    onChange={toggleButton}
                  />{" "}
                  {cat.label}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex justify-between text-base sm:text-2xl mb-4">
            <Title text1={"ALL"} text2={"COLLECTIONS"} />
            <select
              className="border-2 border-gray-300 text-sm px-2"
              onChange={handleSortChange}
              value={option}
            >
              <option value="relavant">Sort by: Relevant</option>
              <option value="low-high">Sort by: Low to High</option>
              <option value="high-low">Sort by: High to Low</option>
            </select>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
            {filterProducts.map((item, idx) => (
              <ProductItem
                key={idx}
                name={item.title}
                price={item.price}
                id={item.id}
                image={item.images}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Collection;
