function toggleLanguage() {
    const currentPath = window.location.pathname; // e.g., "/English/landing-page/index.html"
    let newPath;

    // Check if the path starts with "/English/"
    if (/^\/English\//i.test(currentPath)) {
        newPath = currentPath.replace(/^\/English\//i, "/Hindi/");
    }
    // Otherwise, check if it starts with "/Hindi/"
    else if (/^\/Hindi\//i.test(currentPath)) {
        newPath = currentPath.replace(/^\/Hindi\//i, "/English/");
    } else {
        console.warn(
            "No language folder found in the URL. The page remains unchanged."
        );
        return;
    }

    console.log("Toggling language from", currentPath, "to", newPath);
    window.location.href = newPath;
}
