(function ($, Drupal) {
    'use strict';
    Drupal.behaviors.global = {
        attach: function (context,settings) {

            //Service page - right menu genertion
            if ($('#sidebar-second ul.menu-right').length) {
                $('body').once('rightMenu').each(function() {
                    var menuItem = $('#sidebar-second ul.menu-right');
                    var contentH2 = $('body article .node__content h2');
                    //$(menuItem).hide();

                    if ($(contentH2).length) {
                        $(contentH2).each(function (index, element) {
                            //console.log('Индекс элемента h2: ' + index + '; id элемента = ' + $(element).text());
                            $(element).prepend('<span class="anchor" style="position: absolute; top: -20px; left: 0; width: 0; height: 1px" id="anchor-'+index+'">&nbsp;</span>');
                            $(menuItem).append('<li class="item"><a href="#anchor-'+index+'">'+$(element).text().trim()+'</a></li>');
                        });
                        //$(menuItem).filter('.item_gallery').show();
                        //$('article .field--name-field-tour-photo-gallery').prepend('<a id="anchor_gallery" class="anchor"></a>');
                    }
                    $('#sidebar-second').addClass('visible');
                });
            }

            //Service page - right menu moving (for tablet & mobile)
            if (($('#sidebar-second ul.menu-right').length) && ($(window).width() < 991)) {
                console.log('Yes!');

                //$(buttonWrap).once('Wrapper2').wrap('<div class="bottom-block">');
                $('#sidebar-second').detach().addClass('visible mobile').prependTo('#main #block-bartik-content');
            }

            //Smooth scroll for right menu on Service page
            $(function(){
                $("#block-bokovoemenunastranicesospiskomuslug a[href^='#']").click(function(){
                    var _href = $(this).attr("href");
                    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
                    return false;
                });
            });
        }
    }; }) (jQuery, Drupal);
