import { TextField, InputAdornment, IconButton, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import React from "react";
import { theme } from "../utils/themes";

interface SearchBarProps {
  searchTerm: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onReset: () => void;
  onClear: () => void;
}

export default function SearchBar({ searchTerm, onChange, onReset, onClear }: SearchBarProps) {
  const hoverBackgroundImage = theme.components?.MuiButton?.styleOverrides?.contained?.toLocaleString() as string | undefined;
  
  return (
    <div className="flex flex-col sm:flex-row gap-2 mb-4">
      <TextField
        placeholder="Search by name, city, or specialty..."
        label="Search for an advocate..."
        variant="outlined"
        size="medium"
        fullWidth
        value={searchTerm}
        onChange={onChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon color="action" />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              {searchTerm && (
                <IconButton onClick={onClear}>
                  <ClearIcon />
                </IconButton>
              )}
            </InputAdornment>
          ),
        }}
      />
      <Button
        variant="contained"
        onClick={onReset}
        title="Reset Search"
        sx={{
          backgroundColor: theme.palette.primary.main,
          "&:hover": {
            backgroundImage: hoverBackgroundImage ?? 'none',
          },
          minWidth: '56px',
          height: '56px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          p: 0,
        }}
      >
        <RestartAltIcon />
      </Button>
    </div>
  );
}
