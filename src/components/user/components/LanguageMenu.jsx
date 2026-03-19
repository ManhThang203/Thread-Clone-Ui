import { useRef } from "react";
import { useTranslation } from "react-i18next";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage, useMobileDetection } from "@/hooks";

import { MoveLeft } from "lucide-react";

function LanguageMenu({
  openLanguageMenu,
  setOpenLanguageMenu,
  hanldeOpenUserMenu,
}) {
  const { t, i18n } = useTranslation();
  const isMobile = useMobileDetection(); // ✨ Dùng custom hook thay vì useState + useEffect
  const triggerRef = useRef(null);

  console.log(i18n.language);
  const { currentLanguage, changeLanguage, availableLanguages } = useLanguage();
  return (
    <DropdownMenu open={openLanguageMenu} onOpenChange={setOpenLanguageMenu}>
      {/* Trigger ảo */}
      <DropdownMenuTrigger asChild>
        <button
          ref={triggerRef}
          className="pointer-events-none absolute flex h-10 w-10 items-center justify-center opacity-0"
          style={
            isMobile
              ? { position: "fixed", left: "16px", top: "20px" }
              : { position: "fixed", left: "30px", top: "calc(100vh - 50px)" }
          }
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align={isMobile ? "start" : "start"}
        side={isMobile ? "bottom" : "bottom"}
        sideOffset={isMobile ? 8 : 8}
        className={`bg-popover border-border z-[9999] rounded-xl border p-2 shadow-lg ${isMobile
          ? "w-[calc(100vw-400px)] max-w-sm origin-top-left"
          : "w-56 origin-top-right"
          }`}
        onCloseAutoFocus={(e) => e.preventDefault()}
      >
        <div className="border-border relative mb-6 flex h-8 items-center justify-center border-b pb-3">
          <button
            onClick={() => {
              hanldeOpenUserMenu();
            }}
            type="button"
            className="absolute top-0 bottom-0 left-0 flex w-10 cursor-pointer items-center justify-center transition-colors duration-200"
          >
            <MoveLeft className="text-foreground h-5 w-5" />
          </button>

          <span className="text-foreground/90 text-md flex-1 text-center font-medium">
            {t("settings.language")}
          </span>
        </div>

        {availableLanguages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            className={`text-foreground rounded-lg p-3 text-[15px] font-medium hover:cursor-pointer ${currentLanguage === lang.code ? "bg-accent text-accent-foreground" : "hover:bg-accent/50"}`}
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
