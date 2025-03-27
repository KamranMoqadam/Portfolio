/**
 * main.js
 * This script provides functionality to disable certain browser features
 * to prevent users from accessing the source code, copying content,
 * or interacting with the page in ways that are typically unwanted.
 */

/**
 * Disable the context menu that appears on right-click
 * This prevents users from using the context menu to interact with the page.
 */
document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
});

/**
 * Prevent copy, cut, and paste operations
 * This ensures users cannot copy, cut, or paste content on the page.
 */
document.addEventListener('copy', (e) => {
    e.preventDefault();
});

document.addEventListener('cut', (e) => {
    e.preventDefault();
});

document.addEventListener('paste', (e) => {
    e.preventDefault();
});

/**
 * Prevent text selection to avoid users selecting and copying text
 * This is achieved by disabling the selection start event.
 */
document.addEventListener('selectstart', (e) => {
    e.preventDefault();
});

/**
 * Disable specific keyboard shortcuts commonly used for accessing developer tools
 * and viewing source code. This includes handling various key codes for accurate matching.
 * - F12: Opens developer tools
 * - Ctrl+U: View source code
 * - Ctrl+S: Save page
 * - Ctrl+Shift+I: Opens developer tools (alternative shortcut)
 * - Ctrl+Shift+J: Opens console (alternative shortcut)
 * - Ctrl+Shift+C: Opens inspect element
 * - Ctrl+P: Print page
 */
document.addEventListener('keydown', (e) => {
    // List of disallowed keyboard shortcuts with their associated key codes and required key combinations
    const disallowedShortcuts = [
        { code: 'F12', ctrlKey: false, shiftKey: false },
        { code: 'KeyU', ctrlKey: true, shiftKey: false },
        { code: 'KeyS', ctrlKey: true, shiftKey: false },
        { code: 'KeyI', ctrlKey: true, shiftKey: true },
        { code: 'KeyJ', ctrlKey: true, shiftKey: true },
        { code: 'KeyC', ctrlKey: true, shiftKey: true },
        { code: 'KeyX', ctrlKey: true, shiftKey: true },
        { code: 'KeyP', ctrlKey: true, shiftKey: false }
    ];

    /**
     * Check if a keyboard shortcut is disallowed based on key code and modifiers
     * @param {Object} shortcut - Shortcut object with code and modifier keys
     * @param {KeyboardEvent} event - Keyboard event object
     * @returns {boolean} - True if the shortcut matches, false otherwise
     */
    const isDisallowedShortcut = (shortcut, event) => {
        return (
            (shortcut.code === event.code) &&
            (shortcut.ctrlKey === event.ctrlKey) &&
            (shortcut.shiftKey === event.shiftKey)
        );
    };

    // Iterate through disallowed shortcuts and prevent default behavior if matched
    disallowedShortcuts.forEach(shortcut => {
        if (isDisallowedShortcut(shortcut, e)) {
            e.preventDefault();
        }
    });
});
