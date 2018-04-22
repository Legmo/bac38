(function ($, Drupal) {
    'use strict';
    Drupal.behaviors.global = {
        attach: function (context,settings) {

            //Service page - right menu
            if ($('body ul.menu-right').length) {
                $('body').once('rightMenu').each(function() {
                    var menuItem = $('body ul.menu-right');
                    var contentH2 = $('body article .node__content h2');
                    //$(menuItem).hide();

                    console.log('Start');
                    if ($(contentH2).length) {
                        $(contentH2).each(function (index, element) {
                            // index (число) - текущий индекс итерации (цикла)
                            // данное значение является числом
                            // начинается отсчёт с 0 и заканчивается количеству элементов в текущем наборе минус 1
                            // element - содержит DOM-ссылку на текущий элемент

                            console.log('Индекс элемента h2: ' + index + '; id элемента = ' + $(element).text());
                            $(element).prepend('<a class="anchor" href="anchor-'+index+'">&nbsp;</a>');
                            $(menuItem).append('<li class="item"><a href="#anchor-'+index+'">'+$(element).text()+'</a></li>');
                        });
                        //$(menuItem).filter('.item_gallery').show();
                        //$('article .field--name-field-tour-photo-gallery').prepend('<a id="anchor_gallery" class="anchor"></a>');
                    }
                });
            }
        }
    }; }) (jQuery, Drupal);
