import { Download } from "lucide-react";
import React from "react";

const AnimatedBorderButton = ({children}) => {
  return (
    <>
    <button className="relative bg-transparent border border-border text-foreground hover:border-primary/50 transition-all duration-1000 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabeled:cursor-not-allowed group px-8 py-4 text-lg font-medium rounded-full overflow-visible animated-border animated-border-path">
      <span className=" z-10 flex items-center justify-center gap-2">
        {" "}
        {children}
       
      </span>
    </button>
    </>
  );
};

export default AnimatedBorderButton;
