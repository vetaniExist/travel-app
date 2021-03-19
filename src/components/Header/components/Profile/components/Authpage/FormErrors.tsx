import React from "react";

const FormErrors = ({ formErrors }: any) => (<div>
     <div className="formErrors">
         {Object.keys(formErrors).map((fieldName, i) => {
           if (formErrors[fieldName].length > 0) {
             return (
                     <p key={i}>
                         {fieldName} {formErrors[fieldName]}
                     </p>
             );
           }
           return "";
         })}
     </div>
 </div>);

export default FormErrors;
