function Filter({ filter, setFilter }) {
  return (
    <div className="filter-buttons">
      <button onClick={() => setFilter("all")}>All</button>

      <button onClick={() => setFilter("pending")}>Pending</button>

      <button onClick={() => setFilter("completed")}>Completed</button>
    </div>
  );
}

export default Filter;