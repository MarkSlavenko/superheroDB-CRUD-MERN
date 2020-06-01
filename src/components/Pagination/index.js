import React from 'react';
import "./pagination.css";

const Pagination = (props) => {

    const span_count = 2;
    let buttons = [];
    let totalInCurRange = false;
    if (typeof  props.totalPages == "number") {
        for (let i = props.currentPage - span_count; i <= props.currentPage + span_count; i++) {
            if (i > 0 && i <= props.totalPages) {
                if (i === props.totalPages) {
                    totalInCurRange = true;
                }
                if (i!== props.currentPage) {
                    buttons.push(<span key={`pagination${i}`} className="page" onClick={() => props.changePage(i)}>{i}</span>)
                } else {
                    buttons.push(<span key={`pagination${i}`} className="page current" onClick={() => props.changePage(i)}>{i}</span>)
                }
            }
        }
    }

    return (
        <div className="pagination">
            {props.currentPage !== 1 ?
                <span>
                    <span className="page page-btn" onClick={() => props.changePage(1)}>{"<<"}</span>
                    <span className="page page-btn" onClick={() => props.changePage(props.currentPage -1)}>{"<"}</span>
                </span> : ""}
            {buttons}
            {!totalInCurRange ?
                <span>...<span className="page" onClick={() => props.changePage(props.totalPages)}>{props.totalPages}</span></span>
                : ""}
            {props.currentPage !== props.totalPages ?
                <span className="page page-btn" onClick={() => props.changePage(props.currentPage + 1)}>{">"}</span>
            : ""}
        </div>
    );
};

export default Pagination;