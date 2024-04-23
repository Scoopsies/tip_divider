import { useState } from "react"
import BartenderList from "./BartenderList"
import AddBartender from "./AddBartender"
import TotalTipsInput from "./TotalTips"

type Bartenders = {
  name: string,
  hours: number
}[]

function App() {
  const [bartenders, setBartenders] = useState<Bartenders>([])
  const [nameField, setNameField] = useState('')
  const [totalHours, setTotalHours] = useState(0)
  const [totalTips, setTotalTips] = useState(0)

  return (
    <>
      <h1>Tip Divider</h1>
      <div>{`Total Hours: ${totalHours}`}</div>

      <BartenderList 
        bartenders={bartenders}
        setBartenders={setBartenders}
        setTotalHours={setTotalHours}
      />
      
      <AddBartender
        nameField={nameField}
        setNameField={setNameField}
        setBartenders={setBartenders}
        bartenders={bartenders}
      />

      <TotalTipsInput 
      totalTips={totalTips}
      setTotalTips={setTotalTips}
      />
    </>
  )
}

export default App
