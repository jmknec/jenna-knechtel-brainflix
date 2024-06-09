import "./Search.scss";

function Search() {
  const submitHandler = (e) => {
    e.preventDefault();
    e.target.searchField.value = "";
  };

  return (
    <search className="search">
      <form className="search__form" onSubmit={submitHandler}>
        <input
          className="search__input"
          type="search"
          name="searchField"
          id="search"
          placeholder="Search"
        />
      </form>
    </search>
  );
}

export default Search;
