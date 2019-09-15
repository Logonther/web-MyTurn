$(function () {
    $("#draw1").click(function () {
        $(".cards").empty();
        draw1()
    });
    $("#draw5").click(function () {
        $(".cards").empty();
        draw5()
    });
    console.log($(".card").width());
    $(".card").css("height",$(".card").width()*1.5);

    var african = [];
    var european = [];

    init()

    function draw1() {
        var card = undefined;
        var roll_no = roll100();
        if (roll_no <= 75) {
            card = african[rollcard(african)];
            if (card.rare == "copper") {
                console.log("不暴击"+card.name+"*3");
                inin(card,card.name+"×3");
            }else{
                console.log("不暴击"+card.name+"*1");
                inin(card,card.name+"×1");
            }
        }else if (roll_no > 75 && roll_no <= 95) {
            card = european[rollcard(european)]
            if (card.rare == "copper") {
                console.log("小暴击"+card.name+"*12");
                inin(card,card.name+"×12");
            }else if (card.rare == "silver") {
                console.log("小暴击"+card.name+"*4");
                inin(card,card.name+"×4");
            }else{
                console.log("小暴击"+card.name+"*1");
                inin(card,card.name+"×1");
            }
        }else{
            card = european[rollcard(european)]
            if (card.rare == "copper") {
                console.log("大暴击"+card.name+"*36");
                inin(card,card.name+"×36");
            }else if (card.rare == "silver") {
                console.log("大暴击"+card.name+"*12");
                inin(card,card.name+"×12");
            }else{
                console.log("大暴击"+card.name+"*3");
                inin(card,card.name+"×3");
            }
        }
        return roll_no;
    };

    function draw5() {
        var card = undefined
        var luck = 0;
        for (var i = 0;i<4;i++){
            var roll_res = draw1();
            if (roll_res>75) {
                luck++;
            }
        }
        if (luck){
            draw1();
        }else{
            var roll_no = Math.floor(Math.random()*25+76)
            if (roll_no > 75 && roll_no <= 95) {
                card = european[rollcard(european)]
                if (card.rare == "copper") {
                    console.log("小暴击"+card.name+"*12");
                    inin(card);
                }else if (card.rare == "silver") {
                    console.log("小暴击"+card.name+"*4");
                    inin(card);
                }else{
                    console.log("小暴击"+card.name+"*1");
                    inin(card);
                }
            }else{
                card = european[rollcard(european)]
                if (card.rare == "copper") {
                    console.log("大暴击"+card.name+"*36");
                    inin(card);
                }else if (card.rare == "silver") {
                    console.log("大暴击"+card.name+"*12");
                    inin(card);
                }else{
                    console.log("大暴击"+card.name+"*3");
                    inin(card);
                }
            }
        }
    }

    function inin(card,txt) {
        $(".cards").append("<div class=\"card col-sm-2 col-xs-6\">\n" +
            "        <img src='image/cardback.jpg'>\n" +
            "        <div class=\"cardfront\" style='background-image: url("+card.pic+")'>\n" +
            "            <div class=\"title "+card.type+"\">\n" +
            "                <span>"+card.cost+"</span>"+card.name+"\n" +
            "            </div>\n" +
            "        </div>\n" +
            "        <div class='txt'><div class='rare "+card.rare+"'></div>"+txt+"</div>\n" +
            "    </div>")
        $(".card").css("height",$(".card").width()*1.5).click(function () {
            $(this).find('img').css("transform","rotateY(180deg)");
            $(this).find('.cardfront').css("transform","rotateY(360deg)");
            var $that = $(this)
            setTimeout(function () {
                $that.find('.txt').css("opacity","1");
            },500)

        }).find(".txt").css("margin-top",$(".card").width()*1.5);
    }

    function rollcard(cards) {
        return Math.floor(Math.random()*cards.length)
    }

    function roll100() {
        return Math.floor(Math.random()*100+1)
    };

    function init() {
        $.ajax({
            url:"js/heros.json",
            datatype:"json",
            type:"GET",
            success:function(data){
                $.each(data,function(i,obj) {
                    if (obj.rare == "gold") {
                        european.push(obj);
                    }else{
                        european.push(obj);
                        african.push(obj);
                    }
                });
            }
        })
        $.ajax({
            url:"js/equipment.json",
            datatype:"json",
            type:"GET",
            success:function(data){
                $.each(data,function(i,obj) {
                    if (obj.rare == "gold") {
                        european.push(obj);
                    }else{
                        european.push(obj);
                        african.push(obj);
                    }
                });
                console.log(european);
                console.log(african);
            }
        })
    }
})