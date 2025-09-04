import { Tooltip } from "@mui/material";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import { theme } from "../utils/themes";

const highRiskSpecialties = ["Suicide History/Attempts", "Trauma & PTSD"];
const MAX_VISIBLE_SPECIALTIES = 3;

interface SpecialtyChipsProps {
  specialties: string[];
}

export default function SpecialtyChips({ specialties }: SpecialtyChipsProps) {
  return (
    <>
      {specialties.slice(0, MAX_VISIBLE_SPECIALTIES).map((s, i) => (
        <Tooltip key={i} title={`Specialty: ${s}`} arrow>
          <span
            style={{
              display: "inline-block",
              marginRight: 4,
              padding: "2px 6px",
              backgroundColor: highRiskSpecialties.includes(s)
                ? theme.palette.neutral[500]
                : theme.palette.neutral[400],
              color: highRiskSpecialties.includes(s)
                ? theme.palette.neutral[600]
                : theme.palette.neutral[700],
              borderRadius: 12,
              fontSize: 12,
            }}
          >
            {highRiskSpecialties.includes(s) && (
              <WarningAmberIcon style={{ fontSize: 12, verticalAlign: "middle", marginRight: 2 }} />
            )}
            {s}
          </span>
        </Tooltip>
      ))}

      {specialties.length > MAX_VISIBLE_SPECIALTIES && (
        <Tooltip title={specialties.slice(MAX_VISIBLE_SPECIALTIES).join(", ")} arrow>
          <span
            style={{
              display: "inline-block",
              backgroundColor: "#E0E0E0",
              color: "#616161",
              borderRadius: 12,
              padding: "2px 6px",
              fontSize: 12,
              userSelect: "none",
              cursor: "pointer",
            }}
          >
            +{specialties.length - MAX_VISIBLE_SPECIALTIES}
          </span>
        </Tooltip>
      )}
    </>
  );
}
