"use client";

import { useRouter, usePathname } from "next/navigation";
import { Locale } from "@/lib/i18n-config";
import { motion } from "framer-motion";

const languages = [
  { code: "pt" as Locale, name: "Português", flag: "/br-flag.png" },
  { code: "en" as Locale, name: "English", flag: "/en-flag.png" },
  { code: "es" as Locale, name: "Español", flag: "/es-flag.png" },
];

export default function LanguageSelector() {
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (newLocale: Locale) => {
    const currentPath = pathname.replace(/^\/(pt|en|es)/, "");
    router.push(`/${newLocale}${currentPath}`);
  };

  const getCurrentLanguage = () => {
    const match = pathname.match(/^\/(pt|en|es)/);
    return match ? (match[1] as Locale) : "pt";
  };

  const currentLang = getCurrentLanguage();

  return (
    <div className="fixed top-6 right-6 z-50 flex gap-2">
      {languages.map((lang) => (
        <motion.button
          key={lang.code}
          onClick={() => handleLanguageChange(lang.code)}
          className={`px-3 py-2 rounded-lg backdrop-blur-md transition-all duration-300 ${
            currentLang === lang.code
              ? "bg-indigo-500/20 border border-indigo-400/50 text-white"
              : "bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white"
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          title={lang.name}
        >
          <img 
            src={lang.flag} 
            alt={lang.name}
            className="w-10 h-10 object-cover rounded"
          />
        </motion.button>
      ))}
    </div>
  );
}
