/**
 * Responsive Navbar Script
 * Handles the hamburger menu toggle on mobile devices.
 */

document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');

    // Create Hamburger Icon
    const hamburger = document.createElement('div');
    hamburger.className = 'hamburger-menu';
    hamburger.innerHTML = '<i class="fas fa-bars"></i>';

    // Insert Hamburger before the logo or inside navbar
    const logoContainer = document.querySelector('.logo-container');
    if (navbar && logoContainer) {
        navbar.insertBefore(hamburger, logoContainer.nextSibling);
    }

    // Toggle Menu
    const navPillBox = document.querySelector('.nav-pill-box');

    if (hamburger && navPillBox) {
        hamburger.addEventListener('click', () => {
            navPillBox.classList.toggle('active');
            hamburger.innerHTML = navPillBox.classList.contains('active')
                ? '<i class="fas fa-times"></i>'
                : '<i class="fas fa-bars"></i>';
        });
    }

    // Mobile Dropdown Logic - SIMPLIFIED
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const trigger = dropdown.querySelector('.nav-item');

        if (trigger) {
            trigger.addEventListener('click', (e) => {
                // On mobile (768px or less), toggle dropdown
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    e.stopPropagation();

                    // Close all other dropdowns
                    dropdowns.forEach(d => {
                        if (d !== dropdown) {
                            d.classList.remove('active');
                        }
                    });

                    // Toggle this dropdown
                    dropdown.classList.toggle('active');
                }
            });
        }
    });

    // Close all dropdowns when clicking outside
    // Close all dropdowns when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.dropdown') && window.innerWidth <= 768) {
            dropdowns.forEach(d => d.classList.remove('active'));
        }
    });

    // Nested Dropdown Logic (Mobile) - Robust
    document.addEventListener('click', (e) => {
        const nestedTrigger = e.target.closest('.nested-trigger');
        if (nestedTrigger && window.innerWidth <= 1024) {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation(); // Critical to stop menu from closing

            const parent = nestedTrigger.closest('.nested-dropdown');
            if (parent) {
                // Toggle active state
                parent.classList.toggle('active');
            }
        }
    });

    // Close menu when clicking dropdown items (actual links)
    // EXCLUDING nested triggers so they don't close the menu
    document.querySelectorAll('.dropdown-item:not(.nested-trigger)').forEach(link => {
        link.addEventListener('click', () => {
            if (navPillBox) navPillBox.classList.remove('active');
            if (hamburger) hamburger.innerHTML = '<i class="fas fa-bars"></i>';
            dropdowns.forEach(d => d.classList.remove('active'));
        });
    });
});
