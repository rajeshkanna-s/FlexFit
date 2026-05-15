interface SectionLabelProps {
  text: string;
}

const SectionLabel = ({ text }: SectionLabelProps) => <span className="section-label">{text}</span>;

export default SectionLabel;
