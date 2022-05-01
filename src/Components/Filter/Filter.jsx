import { useFilter } from "../../Context/filterContext";

export function Filter({ labels }) {
  const { filter, filterDispatch } = useFilter();
  console.log("label", filter.labelFilter);
  return (
    <button className="btn btn-secondary filter-btn" id="sort-and-filter">
      Sort & Filter <i className="fas fa-caret-down filter-icon"></i>
      <section className="sort-and-filter">
        <p
          className="clear-all"
          onClick={(e) =>
            filterDispatch({
              type: "CLEAR",
            })
          }
        >
          Clear All
        </p>
        <label htmlFor="sort-by-date" className="filter-label">
          Sort by Date
        </label>
        <div className="label-input-section">
          <input
            type="radio"
            name="sort-by-date"
            id="latest"
            value={"latest"}
            checked={filter.sortByDate === "latest" ? true : false}
            onChange={(e) =>
              filterDispatch({
                type: "SORT",
                payload: e.target.value,
              })
            }
          />
          <label htmlFor="latest" className="filter-label">
            Latest Date
          </label>
        </div>
        <div className="label-input-section">
          <input
            type="radio"
            name="sort-by-date"
            id="oldest"
            value={"oldest"}
            onChange={(e) =>
              filterDispatch({
                type: "SORT",
                payload: e.target.value,
              })
            }
            checked={filter.sortByDate === "oldest" ? true : false}
          />
          <label htmlFor="oldest" className="filter-label">
            Oldest Date
          </label>
        </div>

        <label htmlFor="priority" className="filter-label">
          Priority
        </label>

        <div className="label-input-section">
          <input
            type="radio"
            name="priority"
            id="high-priority"
            value={"High"}
            onChange={(e) =>
              filterDispatch({
                type: "PRIORITY_HIGH",
                payload: e.target.value,
              })
            }
            checked={filter.priorityFilter === "High" ? true : false}
          />
          <label htmlFor="high-priority" className="filter-label">
            High priority
          </label>
        </div>
        <div className="label-input-section">
          <input
            type="radio"
            name="priority"
            id="med-priority"
            value={"Medium"}
            onChange={(e) =>
              filterDispatch({
                type: "PRIORITY_MED",
                payload: e.target.value,
              })
            }
            checked={filter.priorityFilter === "Medium" ? true : false}
          />
          <label htmlFor="med-priority" className="filter-label">
            Medium priority
          </label>
        </div>
        <div className="label-input-section">
          <input
            type="radio"
            name="priority"
            id="low-priority"
            value={"Low"}
            onChange={(e) =>
              filterDispatch({
                type: "PRIORITY_LOW",
                payload: e.target.value,
              })
            }
            checked={filter.priorityFilter === "Low" ? true : false}
          />
          <label htmlFor="low-priority" className="filter-label">
            Low priority
          </label>
        </div>

        <label htmlFor="labels" className="filter-label">
          Labels
        </label>

        <div className="label-input-section">
          <input
            type="checkbox"
            name="priority"
            id="AllLabel"
            onChange={(e) =>
              filterDispatch({
                type: "LABEL_SELECT_ALL",
              })
            }
          />
          <label htmlFor="AllLabel" className="filter-label">
            Select All
          </label>
        </div>
        {labels &&
          labels.map((label) => (
            <div className="label-input-section">
              <input
                type="checkbox"
                name="priority"
                id={label}
                value={label}
                onChange={(e) =>
                  filterDispatch({
                    type: "LABEL",
                    payload: e.target.value,
                  })
                }
                checked={filter.labelFilter.includes(label)}
              />
              <label htmlFor={label} className="filter-label">
                {label}
              </label>
            </div>
          ))}
      </section>
    </button>
  );
}
