"use client";
import { Table, TableHead, TableBody, TableRow, TableCell, TableContainer, Paper } from "@mui/material";
import AdvocateRow from "./AdvocateRow";
import { Advocate } from "../hooks/useAdvocateSearch";

interface AdvocatesTableProps {
  advocates: Advocate[];
  columns: { id: keyof Advocate; label: string; width: number; sticky?: boolean }[];
}

export default function AdvocatesTable({ advocates, columns }: AdvocatesTableProps) {
  return (
    <TableContainer component={Paper}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            {columns.map((col) => (
              <TableCell
                key={col.id}
                sx={{
                  width: col.width,
                  minWidth: col.width,
                  position: col.sticky ? "sticky" : "relative",
                  left: col.sticky ? 0 : undefined,
                  background: col.sticky ? "#fff" : undefined,
                  fontWeight: "bold",
                  userSelect: "none",
                  zIndex: col.sticky ? 2 : 1,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap'
                }}
              >
                {col.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {advocates.map((advocate, idx) => (
            <AdvocateRow key={idx} advocate={advocate} columns={columns} rowIndex={idx} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
