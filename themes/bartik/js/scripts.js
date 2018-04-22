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
                            //console.log('Индекс элемента h2: ' + index + '; id элемента = ' + $(element).text());
                            $(element).prepend('<span class="anchor" style="position: absolute; top: -20px; left: 0; width: 0; height: 1px" id="anchor-'+index+'">&nbsp;</span>');
                            $(menuItem).append('<li class="item"><a href="#anchor-'+index+'">'+$(element).text().trim()+'</a></li>');
                        });
                        //$(menuItem).filter('.item_gallery').show();
                        //$('article .field--name-field-tour-photo-gallery').prepend('<a id="anchor_gallery" class="anchor"></a>');
                    }
                });
            }
        }
    }; }) (jQuery, Drupal);
