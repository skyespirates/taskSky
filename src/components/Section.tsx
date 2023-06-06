import { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  title?: string;
};

const Section = ({ children, title = "Hello Brother" }: SectionProps) => {
  return (
    <>
      <div>{title}</div>
      <h4>{children}</h4>
    </>
  );
};

export default Section;
