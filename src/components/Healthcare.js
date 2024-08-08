import React from "react";
import "./Healthcare.css";

const Healthcare = () => {
  return (
    <div className="section-content pro">
      <div className="container">
        <div className="w-layout-grid section-header ds">
          <div
            id="w-node-ddca6a57-0710-09b3-8413-9f5d883e0bcc-914cc8da"
            className="content-wrapper"
          >
            <div className="margin-bottom-medium">
              <p className="surtitle marianablue sad rseadvscaxz">
                Tailored CARE for your Organization
              </p>
              <h2 className="heading">Built for the diversity in Healthcare</h2>
            </div>
          </div>
        </div>

        <div className="features-grid">
          <div className="w-layout-grid profiles">
            <div className="card-feature profile">
              <img
                src="https://cdn.prod.website-files.com/6529141f1a0ce7d8914cc79a/653c9381c4c19f51ebd77de6_org.svg"
                loading="lazy"
                alt="All Organizations"
                className="feature-thumbnail"
              />
              <div className="feature-content profile">
                <div className="feature-heading">All Organizations</div>
                <p className="body-16">
                  Built for all sizes - practices, hospitals, ACOs, etc.
                </p>
              </div>
            </div>
            <div className="card-feature profile">
              <img
                src="https://cdn.prod.website-files.com/6529141f1a0ce7d8914cc79a/653c938fdc6017a49af73085_speciality.svg"
                loading="lazy"
                alt="20+ Specialities"
                className="feature-thumbnail"
              />
              <div className="feature-content profile">
                <div className="feature-heading">20+ Specialities</div>
                <p className="body-16">
                  Handles the tiniest of nuances for a range of specialities
                </p>
              </div>
            </div>
            <div className="card-feature profile">
              <img
                src="https://cdn.prod.website-files.com/6529141f1a0ce7d8914cc79a/653c938f3b2ad1cc7fbb9de5_workflow.svg"
                loading="lazy"
                alt="5+ Workflows"
                className="feature-thumbnail"
              />
              <div className="feature-content profile">
                <div className="feature-heading">5+ Workflows</div>
                <p className="body-16">
                  Empowers a diverse range of workflows across different settings
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Healthcare;
