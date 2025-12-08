"use client";
import React from "react";
import Image from "next/image";
import customerCentricIcon from "../public/assets/images/about/effortless collaboration.svg";
import dataIntegrityIcon from "../public/assets/images/about/automate workflows.svg";
import complianceIcon from "../public/assets/images/about/rce.png";

// Define the props for CoreValueItem
type CoreValueItemProps = {
  iconSrc: any;
  title: string;
  description: string;
};

// Define CoreValueItem outside the main component and wrap it with React.memo()
const CoreValueItem: React.FC<CoreValueItemProps> = React.memo(({ iconSrc, title, description }) => {
  return (
    <div className="col-lg-4 col-md-4">
      <div className="text-center section-space--mb_10">
        <Image className="img-icon img-fluid" src={iconSrc} alt={title} />
        <h4 className="icon-text">{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
});

// Set display name to fix ESLint issue
CoreValueItem.displayName = "CoreValueItem";

// Main CorevalueItem component
export default function CorevalueItem() {
  return (
    <div className="row section-space--ptb_60">
      <CoreValueItem
        iconSrc={customerCentricIcon}
        title="Effortless Collaboration"
        description="Maintain all your research data on one secure, accessible platform — making it easier to record, organize, analyze, execute, and share experiments & data, no matter where you are."
      />
      <CoreValueItem
        iconSrc={dataIntegrityIcon}
        title="Automate Workflows"
        description="Centralize disparate data sources with configurable workflows to eliminate time-consuming tasks, prevent data loss, and reduce manual errors and costs."
      />
      <CoreValueItem
        iconSrc={complianceIcon}
        title="Regulatory Compliance"
        description="Prepare your lab for audits and ensure compliance without disrupting operations — adhere to regulatory standards, including 21 CFR Part 11, EudraLex Annex 11, ALCOA Data Integrity, GLP & so"
      />
    </div>
  );
}
