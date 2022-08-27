import React, { Fragment } from 'react';

const NotFound: React.FC = () => {
  
  const styles: any = {
    customClasses: {
      height: "90vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontStyle: "oblique",
      fontSize: "25px",
      fontWeight: "bold",
      textAlign: "center",
      marginBottom: "20px",
      color: "#00b0ff",
    }
  };

  return (
    <Fragment>
      <div style={styles.customClasses}>
        Error, 404 not found page
      </div>
    </Fragment>
  )
}

export default NotFound;