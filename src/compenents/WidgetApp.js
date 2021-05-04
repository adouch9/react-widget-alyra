import React from 'react'
import PoliceSizer from './Forms/PoliceSizer'
import SelectFont from './Forms/SelectFont'
import TextArea from './Forms/TextArea'
import CardFonds from './CardFonds'
import { useState, useEffect } from "react"

const WidgetApp = (fonts) => {

  let [selection, setSelection] = useState("date")


  return (
    <div>
      <SelectFont selection={selection} setSelection={setSelection} />

      <TextArea />

      <PoliceSizer />


      <CardFonds
      fonts={fonts}
      selection={selection}

      />

    </div>
  )
}

export default WidgetApp