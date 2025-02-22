function toggleLanguage() {
    const currentPath = window.location.pathname; 
    
    const langRegex = /^\/(english|hindi|en|hi)\//i;
    const match = currentPath.match(langRegex);
    
    if (!match) {
      console.warn("No recognized language folder found in URL. The page remains unchanged.");
      return;
    }
    
    const currentLang = match[1].toLowerCase();
    let newLang;
    if (currentLang === "english" || currentLang === "en") {
      newLang = "Hindi"; 
    } else if (currentLang === "hindi" || currentLang === "hi") {
      newLang = "English";
    } else {
      console.warn("Language folder not recognized.");
      return;
    }
    
    const newPath = currentPath.replace(langRegex, `/${newLang}/`);
    console.log(`Redirecting from ${currentPath} to ${newPath}`);
    window.location.href = newPath;
  }
  