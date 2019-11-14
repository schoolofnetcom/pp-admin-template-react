import React from 'react';
import { DefaultToast } from 'react-toast-notifications';

// const CustomDefaultToast = ({ children, ...props }) => (
//     <DefaultToast {...props}>
//         <div>
//             <h1>
//                 {children}
//             </h1>
//         </div>
//     </DefaultToast>
// );


const CustomDefaultToast = ({ appearance, children }) => (
    <div style={{ background: `${appearance}` }}>
        <h1>
            {children}
        </h1>
    </div>
);

export default CustomDefaultToast;