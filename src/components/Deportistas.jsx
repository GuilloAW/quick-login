import React from 'react'
import DataTable from "react-data-table-component";
import "styled-components";

export const Desportistas = (props) => {
  const columns=[
    {
      name:"Atleta",
      selector:row=> row.athlete
    }
    ,
    {
      name:"Edad",
      selector:row=> row.age
    }
    ,
    {
      name:"País",
      selector:row=> row.country
    }
    ,
    {
      name:"Año",
      selector:row=> row.year
    }
    ,
    {
      name:"Fecha",
      selector:row=> row.date
    }
    ,
    {
      name:"Deporte",
      selector:row=> row.sport
    }
    ,
    {
      name:"Oro",
      selector:row=> row.gold
    }
    ,
    {
      name:"Plata",
      selector:row=> row.silver
    }
    ,
    {
      name:"Bronce",
      selector:row=> row.bronze
    }
    ,
    {
      name:"Total",
      selector:row=> row.total
    }
  ];
  return (
    <>
    <DataTable data={props.atletas} columns={columns} pagination/>
    </>
  )
}
