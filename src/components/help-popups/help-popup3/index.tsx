import { FunctionComponent } from "react";
import CrossIcon from "../../../../public/icons/cross-icon";

interface HelpTroubleshootingEmptyProps {
    
}
 
const HelpTroubleshootingEmpty: FunctionComponent<HelpTroubleshootingEmptyProps> = () => {
    return  ( <section className="help-popup-3">
    <div className="upper-orange-header-box">
    <div className="header-title-section">
        <div className="header-title">Ask an expert </div>
        <div className="header-title-section-cross-icon"> <CrossIcon/> </div>
        </div>
        </div>
        </section> );
}
 
export default HelpTroubleshootingEmpty;