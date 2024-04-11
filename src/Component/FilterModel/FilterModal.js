import React from 'react'
import { Filter } from '../Filter/Filter';
import "./filterModal.css"
function FilterModal({ setIsShowFilter }) {
    return (
        <section
            className="filters-modal-container"
            onClick={(e) => e.target.tagName === "SECTION" && setIsShowFilter(false)}
        >
            <div
                className="modal-close-icon"
                onClick={() => setIsShowFilter(false)}
            >
                <span class="material-symbols-outlined">
                    close
                </span>
            </div>
            <div className="modal-filters">
                <Filter />
            </div>
        </section>
    );
}

export default FilterModal