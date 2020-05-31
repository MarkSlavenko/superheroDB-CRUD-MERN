import React from 'react';
import "./pagination.css";

const Pagination = (props) => {

    const span_count = 2;
    let buttons = [];
    if (typeof  props.totalPages == "number") {

    }

    return (
        <div className="pagination">
             ... <span>{props.totalPages}</span>
        </div>
    );
};

export default Pagination;