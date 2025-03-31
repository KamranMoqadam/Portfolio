/**
 * script.js
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

document.addEventListener('DOMContentLoaded', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.style.display = 'none';
    }
});

const menuBtn = document.getElementById('menu-btn');
const menuIcon = document.getElementById('menu-icon');
const overlay = document.getElementById('overlay');
const mobileMenu = document.getElementById('mobile-menu');
const menuLinks = document.querySelectorAll('.menu-link');
const sections = document.querySelectorAll('.section');

menuBtn.addEventListener('click', () => {
    if (menuIcon.classList.contains('fa-bars-staggered')) {
        menuIcon.classList.remove('fa-bars-staggered');
        menuIcon.classList.add('fa-times');
        overlay.classList.remove('hidden');
        mobileMenu.classList.remove('-translate-x-full');
        setTimeout(() => overlay.classList.add('opacity-90'), 10);
    } else {
        menuIcon.classList.remove('fa-times');
        menuIcon.classList.add('fa-bars-staggered');
        overlay.classList.remove('opacity-90');
        mobileMenu.classList.add('-translate-x-full');
        setTimeout(() => overlay.classList.add('hidden'), 300);
    }
});

overlay.addEventListener('click', () => {
    menuIcon.classList.remove('fa-times');
    menuIcon.classList.add('fa-bars-staggered');
    overlay.classList.remove('opacity-90');
    mobileMenu.classList.add('-translate-x-full');
    setTimeout(() => overlay.classList.add('hidden'), 300);
});
menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        // Remove active styles from all links
        document.querySelectorAll('.menu-link').forEach(l => l.classList.remove('text-blue-500', 'font-bold'));

        // Add active styles to clicked link
        document.querySelectorAll(`.menu-link[href='${link.getAttribute('href')}']`).forEach(l => l.classList.add('text-blue-500', 'font-bold'));

        // Hide all sections
        sections.forEach(section => section.classList.add('hidden'));

        // Show the selected section
        const targetId = link.getAttribute('href').substring(1);
        document.getElementById(targetId).classList.remove('hidden');

        // Close menu after selecting a section
        if (window.innerWidth < 1024) {
            menuIcon.classList.remove('fa-times');
            menuIcon.classList.add('fa-bars-staggered');
            overlay.classList.remove('opacity-90');
            mobileMenu.classList.add('-translate-x-full');
            setTimeout(() => overlay.classList.add('hidden'), 300);
        }
    });
});

const cursor = document.querySelector('.cursor');
const  cursorinner = document.querySelector('.cursor2');
const sidebar = document.getElementById("sidebar");
const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
const speedFactor = 1;
document.addEventListener('mousemove', function(e){
    cursor.style.transform = `translate3d(calc(${e.clientX * speedFactor}px - 50%), calc(${e.clientY* speedFactor}px - 50%), 0)`
});

document.addEventListener('mousemove', function(e){
    cursorinner.style.left = e.clientX * speedFactor + 'px';
    cursorinner.style.top = e.clientY  * speedFactor+ 'px';
});

sidebar.addEventListener("mouseenter", () => {
    if (!isDarkMode) {
        cursor.classList.remove('border-black');
        cursorinner.classList.remove('bg-black');
        cursor.classList.add("border-white");
        cursorinner.classList.add("bg-white");
    }
});

sidebar.addEventListener("mouseleave", () => {
    if (!isDarkMode) {
        cursor.classList.remove("border-white");
        cursorinner.classList.remove("bg-white");
        cursor.classList.add('border-black');
        cursorinner.classList.add('bg-black');
    }
});

document.addEventListener('mousedown', function(){
    cursor.classList.add('click');
    cursorinner.classList.add('cursorinnerhover')
});

document.addEventListener('mouseup', function(){
    cursor.classList.remove('click')
    cursorinner.classList.remove('cursorinnerhover')
});

document.querySelectorAll("a").forEach(link => {
    link.addEventListener("mouseover", () => {
        cursor.dataset.hover = "true";
    });
    link.addEventListener("mouseleave", () => {
        delete cursor.dataset.hover;
    });
})

const typingText = document.querySelector('.typing-text');

if (typingText) {
    const texts = [' Web Developer  ', ' Data Scientist  ', ' Data Analysis  ', ' Machine Learning  ', ' Deep Learning  ', ' Artificial Intelligence (AI)  ', '  Sentiment Analysis  ', '  Software Development  ', '  Computer Vision  '];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentText = texts[textIndex];

        typingText.textContent = currentText.substring(0, charIndex);

        if (!isDeleting) {
            charIndex++;
        } else {
            charIndex--;
        }

        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(type, 2000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            setTimeout(type, 1000);
        } else {
            setTimeout(type, isDeleting ? 50 : 100);
        }
    }

    type();
}

const scroll_sections = document.querySelectorAll('.section');
const scroll_buttons = document.querySelectorAll('.scroll-to-top');

window.addEventListener('scroll', () => {
    scroll_sections.forEach((section, index) => {
        if (window.scrollY > section.offsetTop) {
            scroll_buttons[index].classList.remove('hidden');
        } else {
            scroll_buttons[index].classList.add('hidden');
        }
    });
});

scroll_buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        scroll_sections[index].scrollIntoView({ behavior: 'smooth' });
    });
});
function downloadFile() {
    const link = document.createElement('a');
    link.href = 'src/assets/docs/Kamran_Moqadam_Resume.pdf';
    link.download = 'Kamran_Moqadam_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}