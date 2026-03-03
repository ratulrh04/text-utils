
const Alert = (props) => {
    return (

        <div style={{height:'80px'}}>
           {  props.alert && <div>
             <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                 <span>{props.alert.msg}</span>
            </div>
                 </div>}
     </div>
      
    );
};

export default Alert;