type Props = {
  bartenders: { name: string; hours: number }[];
  setTotalHours: React.Dispatch<React.SetStateAction<number>>;
  setBartenders: React.Dispatch<React.SetStateAction<{ name: string; hours: number }[]>>;
};

const BartenderList = ({ bartenders, setTotalHours, setBartenders }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newBartenders = bartenders.map((bartender, i) =>
      i === index ? { ...bartender, hours: parseFloat(e.target.value) } : bartender
    );
    setBartenders(newBartenders);

    const newTotalHours = newBartenders.reduce((totalHours, bartender) => totalHours + bartender.hours, 0);
    setTotalHours(newTotalHours);
  };

  return (
    <div className="bartenderList">
      {bartenders.map((bartender, index) => (
        <div key={index}>
          {`${index + 1}. ${bartender.name} `}
          <input
            type="number"
            value={bartender.hours}
            onChange={(e) => handleChange(e, index)}
          />
        </div>
      ))}
    </div>
  );
};

export default BartenderList;