(function() {
    var point;
    var pointb;
    var pointc;
    var skillpoint;
    var innerbox = $('#box .innerbox');
    var gif = $('#box .two .two_right .gift video');
    /* gif.attr('src', './img/2.gif'); */
    var boxheight = 867;
    click();
    skillclick();

    var a = $('#box .two .two_left .skillbox .brief');
    var mask = $('#box .two .two_left .skillbox .skillmask');
    var videomask = $('#box .two .two_right .giftmask');

    function click() {
        pointc = 0;
        pointb = 0;
        point = 0;
        var bullet = $('#box .list li');
        for (var i = 0; i < bullet.length; i++) {
            (function(j) {
                bullet[j].onclick = function() {
                    point = j;
                    twoleftmove(point);
                    tworightmove(point);
                    onerightmove(point);
                    oneleftmove(point);
                    threemove(point);
                    innerbox.animate({
                        top: boxheight * -1 * point
                    }, 1200);
                    for (var i = 0; i < bullet.length; i++) {
                        bullet[i].className = '';
                    }
                    bullet[j].className = 'focus';

                }
            })(i)

        }

    }

    function skillclick() {
        skillpoint = 0;
        var button = $('#box .two .two_left .skillbox .skill li img');
        var li = $('#box .two .two_left .skillbox .skill li');
        for (var i = 0; i < button.length; i++) {
            (function(j) {
                button[j].onclick = function() {
                    skillpoint = 0;
                    for (var i = 0; i < button.length; i++) {
                        li[i].className = '';
                    }
                    li[j].className = 'focus';
                    if (j === 1) {
                        a.text('形成一个气流之墙，可以阻挡敌方的所有远程普攻、飞行道具、自动寻敌技能，持续4秒。');
                        gif.attr('src', './img/2.mp4');
                    }
                    if (j === 2) {
                        a.text('向目标敌人突进，造成60/70/80/90/100(+0.2额外AD)(+0.6AP)魔法伤害。每次施法都会使你的下一次突进的基础伤害提升25%，最多提升至50%。【踏前斩】在10/9/8/7/6秒内无法对相同敌人重复施放。如果在突进的过程中施放斩钢闪，那么斩钢闪就会呈环状出剑。重复施放间隔：10/9/8/7/6');
                        gif.attr('src', './img/3.mp4');
                    }
                    if (j === 3) {
                        a.text('闪烁到一个被击飞的敌方英雄身边，造成200/350/500(+1.5)物理伤害，并压制范围内的所有被击飞的敌人在空中多停留1秒。获得满额的剑意值，并重置斩钢闪的旋风烈斩层数。在接下来的15秒里，亚索会进入绝息状态，亚索在该状态下获得50%的护甲穿透加成——这个效果能够无视目标的来自装备、增益、符文和天赋的护甲值。');
                        gif.attr('src', './img/4.mp4');
                    }
                    if (j === 0) {
                        a.text("向前出剑，造成20/45/70/95/120（+1AD）物理伤害。在命中时，斩钢闪会获得一层旋风烈斩效果，持续6秒。在积攒2层旋风烈斩效果后，钢闪会形成一阵能够击飞敌人的旋风。斩钢闪被视为普通攻击：它可以暴击，造成160%的伤害，附带攻击特效，并且它的冷却时间和施法时间都会从攻击速度上获得收益。如果在突进的过程中施放斩钢闪，那么斩钢闪就会呈环状出剑。");
                        gif.attr('src', './img/1.mp4');
                    }
                }
            })(i)

        }
    }

    function onerightmove(point) {
        if (point === 1 || point === 2) {


            var twoleft = $('.innerbox .one_right .mask');
            (function() {
                twoleft.animate({
                    left: -150,
                    top: 0
                }, 700)
            })()

        } else if (point === 0) {
            var twoleft = $('.innerbox .one_right .mask');
            (function() {
                twoleft.animate({
                    left: -1100,
                    top: -500
                }, 1200)
            })()
        }
    }

    function oneleftmove(point) {
        if (point === 0) {
            for (var i = 3; i > 0; i--) {

                (function(j) {
                    var oneleft = $('.innerbox .one .text .maskline li:nth-child(' + j + ')');
                    setTimeout(function() {
                        oneleft.animate({
                            width: 0
                        }, 600)
                    }, 800 + i * -200)
                })(i)

            }
        } else if (point === 1 || point === 2) {
            for (var i = 3; i > 0; i--) {
                (function(j) {
                    var oneleft = $('.innerbox .one .text .maskline li:nth-child(' + j + ')');
                    setTimeout(function() {
                        oneleft.animate({
                            width: 500
                        }, 300)
                    }, 800 + i * -200)
                })(i)
            }
        }
    }

    function twoleftmove(point) {

        if (point === 1) {
            for (var i = 0; i < 11; i++) {

                //alert(twoleft);
                (function(j) {
                    var twoleft = $('.two .skillmask li:nth-child(' + j + ')');
                    setTimeout(function() {
                        twoleft.animate({
                            top: -500
                        }, 500)
                    }, 10 + i * 50)
                })(i)

            }
            setTimeout(function() {
                mask.css('zIndex', '-1');
            }, 1000)
            pointb = point;

        } else if ((point === 0 || point === 2) && (pointb === 0 || pointb === 2)) {
            mask.css('zIndex', '1');
            for (var i = 0; i < 11; i++) {

                //alert(twoleft);
                (function(j) {
                    var twoleft = $('.two .skillmask li:nth-child(' + j + ')');
                    setTimeout(function() {
                        twoleft.animate({
                            top: -500
                        }, 300)
                    }, 10 + i * 50)
                })(i)

            }
            setTimeout(function() {
                for (var i = 0; i < 11; i++) {


                    (function(j) {
                        var twoleft = $('.two .skillmask li:nth-child(' + j + ')');
                        setTimeout(function() {
                            twoleft.animate({
                                top: 0
                            }, 500)
                        }, 10 + i * 50)
                    })(i)

                }
            }, 500)
            pointb = point;
        } else if ((point === 0 || point === 2)) {
            mask.css('zIndex', '1');
            for (var i = 0; i < 11; i++) {


                (function(j) {
                    var twoleft = $('.two .skillmask li:nth-child(' + j + ')');
                    setTimeout(function() {
                        twoleft.animate({
                            top: 0
                        }, 400)
                    }, 10 + i * 50)
                })(i)

            }
            pointb = point;
        }

    }

    function tworightmove(point) {
        if (point === 1) {
            for (var i = 0; i < 11; i++) {

                //alert(twoleft);
                (function(j) {
                    var tworight = $('.two .two_right .giftmask li:nth-child(' + j + ')');
                    setTimeout(function() {
                        tworight.animate({
                            top: 700
                        }, 400)
                    }, 10 + i * 50)
                })(i)
                setTimeout(function() {
                    videomask.css('zIndex', '-1');
                }, 1000);
                pointb = point;
            }

            pointc = point;
        } else if ((point === 0 || point === 2) && (pointc === 0 || pointc === 2)) {
            for (var i = 0; i < 11; i++) {
                (function(j) {
                    var tworight = $('.two .two_right .giftmask li:nth-child(' + j + ')');
                    setTimeout(function() {
                        tworight.animate({
                            top: 700
                        }, 400)
                    }, 10 + i * 50)
                })(i)

            }
            setTimeout(function() {
                for (var i = 0; i < 11; i++) {


                    (function(j) {
                        var tworight = $('.two .two_right .giftmask li:nth-child(' + j + ')');
                        setTimeout(function() {
                            tworight.animate({
                                top: 0
                            }, 400)
                        }, 10 + i * 50)
                    })(i)

                }
            }, 600)
            setTimeout(function() {
                videomask.css('zIndex', '1');
            }, 10);
            pointc = point;
        } else if ((point === 0 || point === 2) && pointc === 1) {
            for (var i = 0; i < 11; i++) {
                (function(j) {
                    var tworight = $('.two .two_right .giftmask li:nth-child(' + j + ')');
                    setTimeout(function() {
                        tworight.animate({
                            top: 0
                        }, 500)
                    }, 10 + i * 50)
                })(i)

            }
            setTimeout(function() {
                videomask.css('zIndex', '1');
            }, 10);
            pointc = point;
        }
    }

    function threemove(point) {
        if (point === 2) {

            for (var i = 0; i < 5; i++) {
                (function(j) {
                    var three = $('#box .innerbox .three div:nth-child(' + j + ')');
                    setTimeout(function() {
                        three.animate({
                            top: 0
                        }, 800)
                    }, 10 + j * 200)
                })(i);

            }
        } else if (point === 1 || point === 0) {
            for (var i = 1; i < 5; i++) {
                (function(j) {
                    var three = $('#box .innerbox .three div:nth-child(' + j + ')');
                    setTimeout(function() {
                        three.animate({
                            top: 600
                        }, 400)
                    }, 10 + j * 100)
                })(i);

            }
        }
    }


})()