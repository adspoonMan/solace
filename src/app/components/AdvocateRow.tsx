"use client";
import { TableRow, TableCell } from "@mui/material";
import SpecialtyChips from "./SpecialtyChips";
import { formatPhoneNumber } from "../utils/formatPhoneNumber";
import { Advocate } from "../hooks/useAdvocateSearch";

interface AdvocateRowProps {
  advocate: Advocate;
  columns: { id: keyof Advocate; width: number; sticky?: boolean }[];
  rowIndex: number;
}

const EVEN_ROW_COLOR = "#f9fafb";
const ODD_ROW_COLOR = "#f3f4f6";
const HOVER_COLOR = "#dbeafe";

export default function AdvocateRow({ advocate, columns, rowIndex }: AdvocateRowProps) {
  const rowColor = rowIndex % 2 === 0 ? EVEN_ROW_COLOR : ODD_ROW_COLOR;

  return (
    <TableRow
      sx={{
        backgroundColor: rowColor,
        "&:hover": { backgroundColor: HOVER_COLOR },
        transition: "background-color 0.2s",
      }}
    >
      {columns.map((col) => {
        const value = advocate[col.id];
        return (
          <TableCell
            key={col.id}
            sx={{
              width: col.width,
              minWidth: col.width,
              position: col.sticky ? "sticky" : "relative",
              left: col.sticky ? 0 : undefined,
              fontWeight: col.sticky ? "bold" : undefined,
              zIndex: col.sticky ? 2 : 1,
              verticalAlign: "top", // Aligns content to the top
              paddingTop: "16px", // Adds top padding to the cell
              ...(col.id === "specialties" && {
                // Allow chips to wrap
                whiteSpace: "normal",
              }),
            }}
          >
            {col.id === "specialties" && Array.isArray(value) ? (
              <SpecialtyChips specialties={value} />
            ) : col.id === "phoneNumber" ? (
              <span style={{ fontFamily: "monospace" }}>
                {formatPhoneNumber(value as string | number)}
              </span>
            ) : (
              value
            )}
          </TableCell>
        );
      })}
    </TableRow>
  );
}
