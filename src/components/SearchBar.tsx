import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const SearchBar = () => {
  const bodyParts = ["Heart", "Lungs", "Stomach", "Head", "Eyes"];

  return (
    <div className="w-full max-w-2xl">
      {/* Search Input */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
        <Input
          placeholder="Search"
          className="pl-10 h-12 bg-secondary border-border text-foreground placeholder:text-muted-foreground rounded-xl"
        />
      </div>

      {/* Body Parts Filter */}
      <div className="flex flex-wrap gap-3">
        {bodyParts.map((part) => (
          <Button
            key={part}
            variant="secondary"
            size="sm"
            className="rounded-full px-4 py-2 text-sm bg-secondary hover:bg-accent border border-border transition-all duration-200"
          >
            {part}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;