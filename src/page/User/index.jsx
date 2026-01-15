import { useTranslation } from "react-i18next";

import ChangeLanguage from "@/components/user/ChangeLanguage";
function User() {
  const { t } = useTranslation("translation");

  return (
    <div className="bg-background flex min-h-screen flex-col items-center justify-center">
      <div className="absolute top-6 right-6">
        <ChangeLanguage />
      </div>

      <div className="text-center">
        <h1 className="text-foreground mb-4 text-4xl font-bold">
          {t("translation:welcome.title")}
        </h1>
        <p className="text-muted-foreground mb-8 text-xl">
          {t("translation:welcome.description")}
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-6 py-3 font-medium transition-colors">
            {t("translation:auth.login")}
          </button>
          <button className="border-border bg-card text-foreground hover:bg-muted rounded-lg border px-6 py-3 font-medium transition-colors">
            {t("translation:auth.register")}
          </button>
        </div>
      </div>
    </div>
  );
}

export default User;
