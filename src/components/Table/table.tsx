import React from "react";
import Table from "react-bootstrap/Table";

interface IProps {
  head: any[];
  rows: (React.ReactElement | String)[][];
}

export const GeneralTable: React.FC<IProps> = ({ head, rows }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          {head.map((x) => (
            <th scope="col">{x}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((x) => (
          <tr>
            <th>{x[0]}</th>
            {x.map((_, i) => (i !== 0 ? <td>{x[i]}</td> : null))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
