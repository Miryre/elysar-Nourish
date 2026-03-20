const Navbar = () => {
  return (
    <nav className="navbar-custom">
      <div className="navbar-inner">
        <a className="navbar-brand" href="#">nourish.</a>

        <div className="date-nav">
          <button className="date-btn">←</button>
          <span>Today</span>
          <button className="date-btn">→</button>
        </div>

        <button
          type="button"
          className="add-btn"
          data-bs-toggle="modal"
          data-bs-target="#addMealModal"
        >
          + Add meal
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
