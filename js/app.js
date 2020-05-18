// Animate a hamburger navigation
function navSlideIn() {
    const burger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        // Slide nav links in
        nav.classList.toggle('nav-active');

        // Animate burger
        burger.classList.toggle('burger-active');
    });
}

// AJAX submit the contact form and display success/error message
function contactFormSubmit() {
    $('#contact-submit').on('click', function (event) {
        event.preventDefault();

        const name = $('#name').val();
        const email = $('#email').val();
        const subject = $('#subject').val();
        const message = $('#message').val();
        const status = $('.form-status');
        const form = $('#contact-form')

        // validation left as an exercise for the reader

        $.ajax({
            url: 'https://formspree.io/xknqnlor',
            method: 'POST',
            data: {
                name: name,
                _replyto: email,
                email: email,
                _subject: subject,
                message: message,
            },
            dataType: 'json',
            success: function () {
                status.text(
                    "Message recieved! We'll get back to you as soon as we can."
                );
                status.addClass("active");
            },
            error: function () {
                status.text('Opps! Something went wrong. Try again later.');
                status.addClass("active");
            },
        });
    });
}

function app() {
    navSlideIn();
    contactFormSubmit();
}

app();
