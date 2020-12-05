import React from "react";
import Table from "react-bootstrap/Table";

interface IProps {
  head: any[];
  rows: (React.ReactElement | String)[][];
}

export const GeneralTable: React.FC<IProps> = ({ head, rows }) => {
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          {head.map((x, i) => (
            <th scope="col" key={i}>
              {x}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((x, i) => (
          <tr key={`tr-${i}`}>
            <th>{x[0]}</th>
            {x.map((_, i) =>
              i !== 0 ? <td key={`td=${i}`}>{x[i]}</td> : null
            )}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
