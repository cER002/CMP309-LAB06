function FilterForm({ filterValue, setFilterValue }) {
    return (
        <div>
            <input 
            type="text"
            value={filterValue}
            onChange={(e) => setFilterValue(e.target.value)}
            />
        </div>
    )
}

export default FilterForm