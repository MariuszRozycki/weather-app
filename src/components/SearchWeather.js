const SearchWeather = (props) => {
  return (
    <div className="searchWeather">
      <form>
        <label htmlFor="searchWeather">Search: </label>
        <input
          type="text"
          id="searchWeather"
          placeholder="Type searched localization"
          onChange={(e) => props.filterWeather(e.target.value)}
        />
      </form>
    </div>
  );
};

export default SearchWeather;
