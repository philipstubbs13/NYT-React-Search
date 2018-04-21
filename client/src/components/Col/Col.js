// Import React 
import React from "react";

// Define column component (layout)
const Col = props => {
    const size = props.size.split(" ").map(size => "col-" + size).join(" ");
    return <div className={size} {...props} />;
};

// Export column.
export default Col;
