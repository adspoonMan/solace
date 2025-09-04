import { useState } from "react";

export interface Advocate {
  firstName: string;
  lastName: string;
  role: string;
  city: string;
  degree: string;
  specialties: string[];
  yearsOfExperience: number;
  phoneNumber: number | string;
}

export function useAdvocateSearch(initialData: Advocate[]) {
  const [advocates] = useState<Advocate[]>(initialData);
  const [filteredAdvocates, setFilteredAdvocates] = useState<Advocate[]>(initialData);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term: string) => {
    // Set the state with the raw input term
    setSearchTerm(term);

    // Trim the term for filtering purposes only
    const trimmedTerm = term.trim();

    if (!trimmedTerm) {
      setFilteredAdvocates(advocates);
      return;
    }

    const lower = trimmedTerm.toLowerCase();
    setFilteredAdvocates(
      advocates.filter(
        (a) => {
          const searchableText = `${a.firstName} ${a.lastName} ${a.role} ${a.city} ${a.degree} ${a.specialties.join(' ')} ${a.yearsOfExperience} ${a.phoneNumber}`.toLowerCase();
          return searchableText.includes(lower);
        }
      )
    );
  };

  const handleReset = () => {
    setFilteredAdvocates(advocates);
    setSearchTerm("");
  };

  return { searchTerm, filteredAdvocates, handleSearch, handleReset, setSearchTerm };
}
