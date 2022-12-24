import React from "react";

function MenuList({data}) {
  return (
    data.map(element => {
      return(<option key={element.abbreviation} value={element.abbreviation}>{element.name}</option>)
    })
  );
}

export default MenuList;
