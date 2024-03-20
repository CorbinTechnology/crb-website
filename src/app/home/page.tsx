import { FunctionComponent } from "react";
import HelpTroubleshooting from "@/components/help-popups/help-popup1";
import HelpSME from "@/components/help-popups/help-popup2";

interface HomePageProps {
    
}
 
const HomePage: FunctionComponent<HomePageProps> = () => {

    
    return ( <main>
        
        hello
        {/* <HelpTroubleshooting/> */}
        <HelpSME/>
       
    </main> );
}
 
export default HomePage;