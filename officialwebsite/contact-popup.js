/**
 * Contact Modal Popup Script
 * Handles injection of modal HTML and event listeners using Event Delegation.
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Inject Modal HTML
    const modalHTML = `
    <div id="contactModal" class="modal-overlay">
        <div class="modal-content">
            <button class="close-modal">&times;</button>
            <div class="modal-header">
                <h2>GET ENLISTED</h2>
                <p>Initialize communication channel.</p>
            </div>
            <div class="modal-body">
                <div class="contact-option">
                    <i class="fas fa-phone-alt"></i>
                    <div>
                        <h3>CALL US</h3>
                        <a href="tel:+16824375323">+1 (682) 437-5323</a>
                    </div>
                </div>
                <div class="contact-option">
                    <i class="fas fa-envelope"></i>
                    <div>
                        <h3>EMAIL US</h3>
                        <a href="mailto:info@ideasassembler.com">info@ideasassembler.com</a>
                    </div>
                </div>
                <!-- WhatsApp Option (Optional) -->
                <div class="contact-option">
                    <i class="fab fa-whatsapp"></i>
                    <div>
                        <h3>WHATSAPP</h3>
                        <a href="https://wa.me/16824375323" target="_blank">Chat with us</a>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <p>We typically respond within 24 hours.</p>
            </div>
        </div>
    </div>
    `;

    if (!document.getElementById('contactModal')) {
        document.body.insertAdjacentHTML('beforeend', modalHTML);
    }

    // 2. Event Listeners
    const modal = document.getElementById('contactModal');
    const closeBtn = document.querySelector('.close-modal');

    // 2. Event Delegation for Opening Modal (Fixes dynamic/late binding issues)
    document.addEventListener('click', (e) => {
        // Check if the clicked element or its parent has the trigger class
        const trigger = e.target.closest('.open-contact-modal');
        if (trigger) {
            e.preventDefault();
            modal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        }
    });

    // Close Modal Function
    const closeModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    };

    // Close on X click
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    // Close on Outside click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
});
