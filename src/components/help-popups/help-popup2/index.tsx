import { FunctionComponent } from "react";
import CrossIcon from "../../../../public/icons/cross-icon";
import "./style.css"
import BottomGreyLine from "../../../../public/icons/bottom-grey-line";
import QuestionMarkIcon from "../../../../public/icons/questionmark-icon";
import RedAsterisk from "../../../../public/icons/red-asterisk";
interface HelpSMEProps {
    
}
 
const HelpSME: FunctionComponent<HelpSMEProps> = () => {
    return ( <section className="help-popup-2">
    <div className="upper-orange-header-box">
    <div className="header-title-section">
        <div className="header-title">Ask an expert </div>
        <div className="header-title-section-cross-icon"> <CrossIcon/> </div>
        </div>

        <div className="orange-section-subtext-section">
            <div className="orange-section-subtext-upper-text">Our SMEs are not online now. </div>
            <div className="orange-section-subtext-lower-text">Please ask your question, so we’ll revert in next 24 hrs.</div>
        </div>

</div>

<div className="help-popup-lower-section">
<div className="submit-your-question-section">
        <span>Submit your question for SME</span>
        <QuestionMarkIcon/>
        <RedAsterisk/>
    </div>

    <div className="input-box-section">
        <textarea  className="input-box" type="text" id="name" placeholder="Textarea" class="contact-inputfield-mesaage" required></textarea>
        </div>  

        <div className="bottom-grey-line"><BottomGreyLine/></div>
        
        <div className="button-container"><button className="ask-question-button">Ask question</button></div>

    </div>



</section> );
}
 
export default HelpSME;