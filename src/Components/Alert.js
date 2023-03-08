import React from "react";

export default function Alert(props) {

    const typeCapitalize = (type) => {
        const lower = type.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        <div style={{ height: '50px' }}>
            {/* cummulative layout shift */}
      { 
          props.alert && <div className={`alert alert-${props.alert.type}`} role="alert">
              <strong>{typeCapitalize(props.alert.type)}</strong>: {props.alert.msg}
          </div>
            }
  </div>
  );
}
