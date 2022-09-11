import React from 'react'
import DataTable, { createTheme } from 'react-data-table-component';

export const Deportistas = (props) => {
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


// createTheme creates a new theme named solarized that overrides the build in dark theme
createTheme('custom', {
  text: {
    primary: "var(--blue-ligth)",
    secondary: "var(--white)",
  },
  background: {
    default: "var(--blue-dark)",
  },
  context: {
    background: 'var(--blue-ligth)',
    text: 'var(--blue-ligth)',
  },
  divider: {
    default: 'var(--blue-ligth)',
  },
  action: {
    button: 'var(--blue-ligth)',
    hover: 'var(--blue-ligth)',
    disabled: 'var(--blue-ligth)',
  },
}, 'dark');
  return (
    <>
    <div className="boxContent">
      <h2 className="col-w">Deportistas</h2>
      <DataTable data={props.atletas} columns={columns} pagination theme="custom"/>
    </div>
    </>
  )
}
