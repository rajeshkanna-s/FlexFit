interface SectionHeadingProps {
  line1: string;
  line2?: string;
  highlightLine?: 1 | 2;
  centered?: boolean;
}

const SectionHeading = ({ line1, line2, highlightLine, centered }: SectionHeadingProps) => (
  <h2 className={centered ? 'text-center' : ''}>
    <span className={highlightLine === 1 ? 'text-yellow' : ''}>{line1}</span>
    {line2 && (
      <>
        <br />
        <span className={highlightLine === 2 ? 'text-yellow' : ''}>{line2}</span>
      </>
    )}
  </h2>
);

export default SectionHeading;
