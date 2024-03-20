import { FunctionComponent } from "react";

interface GreyLineProps {
    
}
 
const GreyLine: FunctionComponent<GreyLineProps> = () => {
    return ( 
        <svg xmlns="http://www.w3.org/2000/svg" width="350" height="2" viewBox="0 0 350 2" fill="none">
<path d="M0 1H350" stroke="#B0B0B0"/>
</svg>
     );
}
 
export default GreyLine;