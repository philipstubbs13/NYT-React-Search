// Import React
import React from "react";

// Define component for container (layout/grid component)
const Container = props =>
  <div className={`container${props.fluid ? "-fluid" : ""}`} {...props} />;

// export the Container component.
export default Container;

