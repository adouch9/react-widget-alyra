import React from 'react'


const CardFonds = ({ selection }) => {

  //Définir une variable text qui change en fonction de la props selection qui lui change en fonction de la valeur de l'event déclenché dans le selcteur. 
  let text =
    selection === "date" ? "Les plus récentes" :
      selection === "popularity" ? "Les plus populaires" :
        selection === "trending" ? "Top 10 trending" : ""

  return (
    <div className="col-lg-9">
      <section className="row mb-5">
        <h2 className="mb-3">{text} </h2>
      </section>
    </div>
  )
}

export default CardFonds