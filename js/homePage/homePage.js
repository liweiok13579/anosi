
$(function () {
    // 拖拽
    darg();
    function darg() {
        var bstop = true;
        $('.content_wrapper div').on('mousedown', function(e) {
            if (bstop) {
                bstop = false;
                var that = this;
                var disx = e.offsetX; 
                var disy = e.offsetY;
                var $clone = $(this).clone(); 
                $clone.addClass('draging').css({ 
                    left: $(this).position().left,
                    top: $(this).position().top
                });
                $('.content_wrapper').append($clone); 
                $(this).addClass('moving').html(''); 
                $('.content_wrapper').on('mousemove', function(e) { 
                    $clone.css({
                        left: e.pageX - $(this).offset().left - disx,
                        top: e.pageY - $(this).offset().top - disy
                    })
                });
                $clone.on('mouseup', function() {
                    $('.content_wrapper').off('mousemove'); 
                    var minIndex = $(that).index(); 
                    var minValue = 1000; 
                    $('.content_wrapper div').not(':last').each(function() { 
                        var smalldistance = Math.sqrt(Math.pow($clone.position().left - $(this).position().left, 2) + Math.pow($clone.position().top - $(this).position().top, 2)); //利用勾股定理获取每一个盒子离克隆出来的盒子的距离
                        if (smalldistance < minValue) { 
                            minValue = smalldistance; 
                            minIndex = $(this).index(); 
                        }
                    });
                    if (minIndex == $(that).index()) { 
                        $clone.animate($(that).position(), 400, function() {
                            $(that).removeClass('moving').html($clone.html()); 
                            $(this).remove(); 
                            bstop=true;
                        });
                    } else {
                        var $minbox = $('.content_wrapper div').eq(minIndex); 
                        var $clone2 = $minbox.clone(); 
                        $clone2.addClass('draging').css({
                            left: $minbox.position().left,
                            top: $minbox.position().top
                        })
                        $('.content_wrapper').append($clone2); 
                        $minbox.addClass('moving').html('');
                        $clone.animate($minbox.position(), 400, function() { 
                            $minbox.removeClass('moving').html($clone.html()); 
                            $clone.remove(); 
                            bstop = true;
                        });
                        $clone2.animate($(that).position(), 400, function() {
                            $(that).removeClass('moving').html($clone2.html());
                            $clone2.remove();
                            bstop = true;
                        });
                    }
                });
            }
            return false;
        });
    }
})