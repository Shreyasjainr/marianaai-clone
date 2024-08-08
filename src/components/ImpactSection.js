import React from "react";
import "./ImpactSection.css"; 

const ImpactSection = () => {
  return (
    <div className="section-content stt">
      <div className="stats">
        <div className="padding-vertical-xlarge">
          <div className="margin-bottom-medium">
            <p className="surtitle marianablue center sd">The Boost All Providers Need</p>
            <h2 className="heading">Impact of CARE by MarianaAI</h2>
          </div>
        </div>
        <div className="div-block-94">
          <img 
            src="https://cdn.prod.website-files.com/6529141f1a0ce7d8914cc79a/653d227a827717b4f610aed7_impact.svg" 
            loading="lazy" 
            alt="MarianaAI's Impact - Saves up to 30% time and returns $500K+ per physician annually" 
            className="image-14"
          />
        </div>
      </div>
      <div className="title-wrapper-large das">
        <div className="div-block-82">
          <a href="https://app.marianaai.com/" className="button-primary-arrow w-inline-block">
            <div className="text-block-7">Get Started For Free</div>
            <img 
              src="https://cdn.prod.website-files.com/6529141f1a0ce7d8914cc79a/652922ee1c309ba460d3cf8d_Left%2C%20Arrow.svg" 
              loading="lazy" 
              alt="" 
              className="white-arrow"
            />
          </a>
          <a href="https://calendly.com/marianaai-success/15-minutes-marianaai-demo?month=2023-10" 
            className="button-light-secondary w-inline-block"
          >
            <div className="text-block-8">Talk To Our Team</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ImpactSection;
