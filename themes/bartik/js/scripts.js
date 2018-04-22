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
                        $(contentH2).each(function (index, element) {
                            // index (число) - текущий индекс итерации (цикла)
                            // данное значение является числом
                            // начинается отсчёт с 0 и заканчивается количеству элементов в текущем наборе минус 1
                            // element - содержит DOM-ссылку на текущий элемент

                            console.log('Индекс элемента div: ' + index + '; id элемента = ' + $(element).text());
                        });
                        //$(menuItem).filter('.item_gallery').show();
                        //$('article .field--name-field-tour-photo-gallery').prepend('<a id="anchor_gallery" class="anchor"></a>');
                    }
                });
            }
        }
    }; }) (jQuery, Drupal);
