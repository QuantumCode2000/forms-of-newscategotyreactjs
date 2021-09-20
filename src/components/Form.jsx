import React from "react";
import "../styles/Form.css";
const Form = ({ setCategory, handleSearch, loading }) => {
  const handleCategory = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div className="form-group">
      <div className="input-news">
        <label htmlFor="category">Category</label>
        <select
          name=""
          id="categoty"
          placeholder="Category"
          onChange={handleCategory}
        >
          <option value="business">Business</option>
          <option value="entertainment">Entertainment</option>
          <option value="general">General</option>
          <option value="health">Health</option>
          <option value="science">Science</option>
          <option value="sports">Sports</option>
          <option value="technology">Technology</option>
        </select>
      </div>

      <button
        className={loading ? "button-searching" : "button-search"}
        onClick={handleSearch}
      >
        {loading ? "Buscandoooo ........." : "Buscar"}
      </button>
    </div>
  );
};

export default Form;
