import { useTranslation } from "react-i18next";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/hooks";

import { MoveLeft } from "lucide-react";

function LanguageMenu({
  openLanguageMenu,
  setOpenLanguageMenu,
  hanldeOpenUserMenu,
}) {
  const { t, i18n } = useTranslation();
  console.log(i18n.language);
  const { currentLanguage, changeLanguage, availableLanguages } = useLanguage();
  return (
    <DropdownMenu open={openLanguageMenu} onOpenChange={setOpenLanguageMenu}>
      {/* Trigger ảo, không hiển thị */}
      <DropdownMenuTrigger />
      <DropdownMenuContent
        align="end"
        className="bg-popover border-border relative -right-6 bottom-10 w-56 origin-bottom-left rounded-xl p-2"
      >
        <div className="relative mb-6 flex h-8 items-center justify-center">
          <button
            onClick={() => {
              hanldeOpenUserMenu();
            }}
            type="button"
            className="absolute top-0 bottom-0 left-0 flex w-10 cursor-pointer items-center justify-center transition-colors duration-200"
          >
            <MoveLeft className="h-5 w-5" />
          </button>

          <span className="text-foreground/90 text-md flex-1 text-center font-medium">
            {t("settings.language")}
          </span>
        </div>

        {availableLanguages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            className={`my-2 text-[15px] font-medium hover:cursor-pointer ${currentLanguage === lang.code ? "bg-accent" : ""}`}
            onSelect={(e) => {
              e.preventDefault();
              changeLanguage(lang.code);
            }}
          >
            <span>{lang.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
export default LanguageMenu;
