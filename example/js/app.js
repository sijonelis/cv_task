(function ($) {
    'use strict';

    // Prevent clicks for links of categories without items
    $('[data-items-count="0"]').on({
        click: function (event) {
            event.preventDefault();
            event.stopPropagation();
        }
    });

    // Add item to cart button click event
    $('.btn-add-to-cart').on({
        click: function (event) {
            event.preventDefault();
            var el = $(this),
                message = el.parent().find('.product-title').text() + ' is added into cart!',
                oldText = el.text(),
                t;

            // Change content of button
            el.html('<i class="glyphicon glyphicon-thumbs-up"></i> ' + message);

            t = setTimeout(function () {
                // Reset content of button
                el.text(oldText);
                clearTimeout(t);
            }, 1500);
        }
    });
})(jQuery);
