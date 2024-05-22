import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

const Table = ({ cols, rows }) => {
  const updatedCols = cols.slice(0, -2).concat(cols.slice(-1));

  return (
    <DataGrid
      checkboxSelection
      rows={rows}
      columns={updatedCols}
      slots={{ toolbar: GridToolbar }}
      sx={{ overflowX: "scroll" }}
    />
  );
};

export default Table;
