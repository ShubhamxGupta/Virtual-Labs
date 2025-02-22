function toggleLanguage() {
    let currentPath = window.location.pathname;
    console.log("Current Path:", currentPath);

    if (window.location.protocol === "file:") {
        currentPath = currentPath.replace(/^\/?[A-Za-z]:/, "");
        console.log("Adjusted Path for file protocol:", currentPath);
    }

    const langRegex = /^\/(english|hindi)\//i;

    const match = currentPath.match(langRegex);

    if (!match) {
        console.warn("No recognized language folder found in URL. Please ensure the URL starts with '/English/' or '/Hindi/'.");
        return;
    }

    let newLang = (match[1].toLowerCase() === "english") ? "Hindi" : "English";
    const newPath = currentPath.replace(langRegex, "/" + newLang + "/");

    console.log("Redirecting to:", newPath);
    window.location.href = newPath;
}
