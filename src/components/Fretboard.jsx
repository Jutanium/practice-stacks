import React from "react";

function Fretboard ({frets, stroke = "black"}) {

  const lengths = {
    fret: 10,
    height: 100
  }
  lengths.width = lengths.fret * frets;

  const viewBox = `0 0 ${lengths.width} ${lengths.height}`

  const fretLines = Array.from(new Array(frets), (el, i) => 
    <line 
      x1={i * lengths.fret} x2={i * lengths.fret} y1={0} y2={lengths.height}
      stroke={stroke}
    ></line>
  ); 
  return (
    <svg className="w-full h-full" viewBox={viewBox}>
      {fretLines}
    </svg>
  )
}

export default Fretboard;
