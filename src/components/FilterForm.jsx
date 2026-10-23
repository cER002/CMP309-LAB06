function FilterForm({ filterValue, setFilterValue }) {
    return (
        <div className="filter-container">
            <input 
            type="text"
            className="filter-input"
            value={filterValue}
            onChange={(e) => setFilterValue(e.target.value)}
            />
        </div>
    )
}

export default FilterForm