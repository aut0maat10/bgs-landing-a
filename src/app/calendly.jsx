import { InlineWidget } from "react-calendly";
import './calendly.css'

export const Calendly = () => {
  return (
    
    <div className="calendly">
      <InlineWidget 
        url="https://calendly.com/robin-pahlman/15-minute-call" 
        styles={{
          minWidth: '320px',
          height: '700px',
        }}
        pageSettings={{
          backgroundColor: '1a103d',
          primaryColor: '58c7f3',
          textColor: 'fff'
        }}
      />
    </div>
  );
}

export default Calendly
