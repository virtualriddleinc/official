"use client";

import { useState, useRef, useEffect } from "react";
import { Search, X, FileText, Users, Settings, Globe, Building2, BarChart3, Shield, Zap } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Fuse from "fuse.js";
import { searchData } from "../lib/searchData";

const categories = ["Tümü", ...Array.from(new Set(searchData.map(item => item.category)))];

// CategoryIcon bileşeni
const CategoryIcon = ({ category, className }: { category: string, className?: string }) => {
  const iconMap: { [key: string]: React.ElementType } = {
    'Ürünler': Building2,
    'Çözümler': Settings,
    'Hizmetler': Users,
    'Blog': FileText,
    'Sayfalar': Globe,
    'Analitik': BarChart3,
    'Güvenlik': Shield,
    'Performans': Zap,
  };

  const IconComponent = iconMap[category] || FileText;
  return <IconComponent className={className} />;
};

export default function UniversalSearchBox() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tümü");
  const [results, setResults] = useState<typeof searchData>([]);
  const [isLoading, setIsLoading] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  // Fuzzy search ayarları
  const fuse = new Fuse(searchData, {
    keys: [
      "title",
      "description",
      "tags",
      "category"
    ],
    threshold: 0.35,
    minMatchCharLength: 2,
    ignoreLocation: true
  });

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSearchQuery("");
        setResults([]);
        setHighlightedIndex(-1);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const performSearch = async () => {
      if (!searchQuery.trim()) {
        setResults([]);
        return;
      }
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 200));
      let filtered: typeof searchData = [];
      if (selectedCategory === "Tümü") {
        filtered = fuse.search(searchQuery).map(res => res.item);
      } else {
        filtered = fuse.search(searchQuery).map(res => res.item).filter(item => item.category === selectedCategory);
      }
      setResults(filtered.slice(0, 7));
      setIsLoading(false);
    };
    performSearch();
  }, [searchQuery, selectedCategory]);

  const navigateToSearch = () => {
    if (searchQuery.trim()) {
      setIsOpen(false);
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}&cat=${encodeURIComponent(selectedCategory)}`);
      setSearchQuery(""); // Arama sonrası input'u temizle
      setResults([]);
      setHighlightedIndex(-1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigateToSearch();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsOpen(false);
      setSearchQuery("");
      setResults([]);
      setHighlightedIndex(-1);
    } else if (e.key === "ArrowDown") {
      setHighlightedIndex((prev) => Math.min(prev + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      setHighlightedIndex((prev) => Math.max(prev - 1, 0));
    } else if (e.key === "Enter" && highlightedIndex >= 0 && results[highlightedIndex]) {
      router.push(results[highlightedIndex].url);
      setIsOpen(false);
      setSearchQuery("");
      setResults([]);
      setHighlightedIndex(-1);
    }
  };

  return (
    <div ref={searchRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        aria-label="Site içi arama"
      >
        <Search className="w-5 h-5 text-gray-600 dark:text-gray-300" />
      </button>
      {isOpen && (
        <div className="absolute right-0 top-12 w-[calc(100vw-1rem)] sm:w-80 md:w-96 lg:w-[28rem] xl:w-[32rem] max-w-[calc(100vw-1rem)] bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-2 sm:p-3 md:p-4 z-50">
          <form onSubmit={handleSubmit} className="relative">
            <div className="flex flex-col gap-2 mb-2">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-2 py-1.5 sm:py-2 rounded-md border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-xs sm:text-sm text-gray-900 dark:text-white"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
              
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Arama yapın..."
                  className="w-full px-3 py-2 sm:py-2.5 text-xs sm:text-sm border border-gray-200 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  <Search className="w-3 h-3 sm:w-4 sm:h-4" />
                </button>
              </div>
            </div>
            
            <div className="max-h-32 sm:max-h-40 md:max-h-48 lg:max-h-56 overflow-y-auto">
              {searchQuery && (
                <div className="space-y-1">
                  {results.slice(0, 3).map((result, index) => (
                    <Link
                      key={index}
                      href={result.url}
                      className="block p-2 sm:p-2.5 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                    >
                      <div className="flex items-start space-x-2 sm:space-x-3">
                        <CategoryIcon category={result.category} className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                        <div className="min-w-0 flex-1">
                          <p className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white truncate">
                            {result.title}
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2">
                            {result.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                  {results.length > 3 && (
                    <Link
                      href={`/search?q=${encodeURIComponent(searchQuery)}`}
                      className="block p-2 sm:p-2.5 text-xs sm:text-sm text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-md transition-colors"
                    >
                      Tüm sonuçları gör ({results.length})
                    </Link>
                  )}
                </div>
              )}
            </div>
          </form>
        </div>
      )}
    </div>
  );
} 