type Props = {
    setTotalTips: React.Dispatch<React.SetStateAction<number>>,
    totalTips: number
}

const TotalTipsInput = ({setTotalTips, totalTips}: Props) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTotalTips(parseInt(e.target.value))
      }


    return(
        <div>
        <div>Total Tips</div>
        <input
        type="number"
        value={totalTips}
        onChange={handleChange}
        />
      </div>
    )
}

export default TotalTipsInput;