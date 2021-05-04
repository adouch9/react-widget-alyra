import React from 'react'


const SelectFont = ({ setSelection }) => {


  return (
    <div>
      <label className="fw-bold mb-2" htmlFor="sort">Afficher des polices</label>
      <select id="sort" className="form-select mb-4" onChange={(e) => setSelection(e.target.value)}>
        <option value="date">Les plus récentes</option>
        <option value="popularity">Les plus populaires</option>
        <option value="trending">Top 10 trending</option>
      </select>
    </div>
  )
}

export default SelectFont


