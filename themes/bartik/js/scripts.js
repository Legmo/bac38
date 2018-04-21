(function ($, Drupal) {
    'use strict';
    Drupal.behaviors.global = {
        attach: function (context,settings) {

            //Service page - right menu
            if ($('body ul.menu-right').length) {
                $('body').once('rightMenu').each(function() {
                    //var menuItem = $('body ul.menu-right li');
                    var contentH2 = $('body ul.menu-right li');
                    //$(menuItem).hide();

                    if ($(contentH2).length) {
                        $(menuItem).filter('.item_gallery').show();
                        $('article .field--name-field-tour-photo-gallery').prepend('<a id="anchor_gallery" class="anchor"></a>');
                    }
                });
            }
        }
    }; }) (jQuery, Drupal);
