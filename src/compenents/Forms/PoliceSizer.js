import React from 'react'

const PoliceSizer = () => {
  return (
    <>
      <label className="form-label fw-bold mb-3" htmlFor="range">La taille police</label>
      <input type="range" className="form-range" id="range" min="8" max="48" step="1" defaultValue="20" />
    </>
  )
}

export default PoliceSizer


