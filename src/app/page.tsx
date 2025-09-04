"use client";

import { advocateData } from "@/db/seed/advocates";
import { useAdvocateSearch, Advocate } from "./hooks/useAdvocateSearch";
import SearchBar from "./components/SearchBar";
import AdvocatesTable from "./components/AdvocatesTable";

export default function Home() {
  const { searchTerm, filteredAdvocates, handleSearch, handleReset, setSearchTerm } =
    useAdvocateSearch(advocateData);

  const columns: { id: keyof Advocate; label: string; width: number; sticky?: boolean }[] = [
    { id: "firstName", label: "First Name", width: 150, sticky: true },
    { id: "lastName", label: "Last Name", width: 150 },
    { id: "role", label: "Role", width: 150 },
    { id: "city", label: "City", width: 120 },
    { id: "degree", label: "Degree", width: 150 },
    { id: "specialties", label: "Specialties", width: 300 },
    { id: "yearsOfExperience", label: "Years of Exp.", width: 120 },
    { id: "phoneNumber", label: "Phone Number", width: 150 },
  ];

  return (
    <main className="p-6 min-h-screen font-sans bg-gradient-to-b from-[#d5e5db] to-[#ffffff] relative">
      <div className="max-w-7xl mx-auto space-y-8 relative z-10">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h1 className="text-2xl font-semibold mb-4 font-cormorant-garamond text-[#4a8069]">Solace Advocates</h1>
          <SearchBar
            searchTerm={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            onReset={handleReset}
            onClear={() => setSearchTerm("")}
          />

          {searchTerm && filteredAdvocates.length === 0 && (
            <p className="text-sm text-red-500 mb-4">No results found.</p>
          )}

          <AdvocatesTable advocates={filteredAdvocates} columns={columns} />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[150px] bg-white rounded-t-[50%]"></div>
    </main>
  );
}
