import { useState } from "react";

export const useTabs = (initialTab = 0, allTabs = []) => {
    if (!allTabs || !Array.isArray(allTabs)) return;

    const [currentIndex, setCurrentIndex] = useState(initialTab);
    return {
        currentItem: allTabs[currentIndex],
        changeItem: setCurrentIndex,
    };
};