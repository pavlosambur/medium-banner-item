interface OddsFieldProps {
  odd: number;
  market: string;
}

const OddsField: React.FC<OddsFieldProps> = ({ odd, market }) => {
  return (
    <div className="flex h-[56px] w-full flex-col items-center justify-center rounded-md bg-[var(--background-oddsfield)]">
      <div className="flex">
        <span className="text-[16px] leading-[20px] font-medium">{odd}</span>
      </div>
      <div className="flex">
        <span className="text-[10px] leading-[14px] uppercase">{market}</span>
      </div>
    </div>
  );
};

export default OddsField;
