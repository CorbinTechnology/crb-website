import { FunctionComponent } from "react";
import CrossIcon from "../../../../public/icons/cross-icon";
import "./style.css"
import GreyLine from "../../../../public/icons/grey-line";
import QuestionMarkIcon from "../../../../public/icons/questionmark-icon";
import BottomGreyLine from "../../../../public/icons/bottom-grey-line";
import AddIcon from "../../../../public/icons/add-icon";
import RedAsterisk from "../../../../public/icons/red-asterisk";

interface HelpTroubleshootingProps {
   
    
}
 
const HelpTroubleshooting: FunctionComponent<HelpTroubleshootingProps> = () => {

    
    return ( <section className="help-popup-1">
        <div className="upper-orange-header-box">
        <div className="header-title-section">
            <div className="header-title">Troubleshooting FAQs </div>
            <div className="header-title-section-cross-icon"> <CrossIcon/> </div>
            </div>

            <div className="find-your-query-section">
                <div className="find-your-query-upper-text">CRB have detailed FAQs section. </div>
                <div className="find-your-query-lower-text">Find your query in the extensive set of answers here:</div>
            </div>

      
    <div className="search-faq-section">
    <input className="search-faq-input-box" type="text" id="name"  placeholder=  "Search in FAQs" class="contact-inputfield"></input>
    </div>


    <div className="help-popup-lower-section">
        <div className="or-section">
            <GreyLine/>
            <div className="or-text">OR</div>
        </div>

        <div className="submit-your-question-section">
            <span>Submit your question</span>
            <QuestionMarkIcon/>
            <RedAsterisk/>
        </div>

        <div className="input-box-section">
        <textarea  className="input-box" type="text" id="name" placeholder="Textarea" class="contact-inputfield-mesaage" required></textarea>
        </div>

        <div className="upload-screenshot-section">
            <span>Upload screenshot</span>   </div>

            <label for="upload-img" class="upload-container">
  <span class="upload-icon"><AddIcon/></span>
  <span class="upload-text">Upload</span>
</label>
<input id="upload-img" type="file" class="upload-input" placeholder="Upload"></input>
  <div className="bottom-grey-line"><BottomGreyLine/></div>

    </div>

        </div>

    </section> );
}
 
export default HelpTroubleshooting;
