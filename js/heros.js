$(function () {
    $.ajax({
        url:"js/heros.json",
        datatype:"json",
        type:"GET",
        success:function(data){
            $(".heros").empty();
            $.each(data,function(i,obj) {
                $(".heros").append("<div class=\"hero col-sm-3 col-xs-6\">\n" +
                    "        <div class=\"content "+obj.type+"\">\n" +
                    "            <div class=\"title\">\n" +
                    "                <span>"+obj.cost+"</span>" +obj.name+
                    "            </div>\n" +
                    "            <div class=\"pic\" style='background-image: url("+obj.pic+")'></div>\n" +
                    "            <div class=\"skills\">\n" +
                    "                <div class=\"skill\">Ex "+obj.ex[0].name+"：<br>"+obj.ex[0].txt+"</div>\n" +
                    "                <div class=\"skill\">技能 "+obj.skill1[0].cost+"费 "+obj.skill1[0].name+"：<br>"+obj.skill1[0].txt+"</div>\n" +
                    "                <div class=\"skill\">技能 "+obj.skill2[0].cost+"费 "+obj.skill2[0].name+"：<br>"+obj.skill2[0].txt+"</div>\n" +
                    "                <div class=\"skill\">技能 "+obj.skill3[0].cost+"费 "+obj.skill3[0].name+"：<br>"+obj.skill3[0].txt+"</div>\n" +
                    "            </div>\n" +
                    "        </div>\n" +
                    "    </div>")
                if (obj.derivative != "") {
                    $.each(obj.derivative,function (j,o) {
                        $(".hero .skills").eq(i).append("<div class=\"skill\">衍生 "+o.cost+"费 "+o.name+"：<br>"+o.txt+"</div>")
                    })
                }
            });
        }
    })
    
    $("#byCost").click(function () {
        byCost()
    });
    $("#byType").click(function () {
        byType()
    });

    function byCost() {
        $.ajax({
            url:"js/heros.json",
            datatype:"json",
            type:"GET",
            success:function(data){
                $(".heros").empty();
                data.sort(function(hero1, hero2) {
                    if(hero1.cost < hero2.cost){
                        return -1;
                    }else if(hero1.cost > hero2.cost){
                        return 1;
                    }else{
                        return 0;
                    };
                });
                $.each(data,function(i,obj) {
                    $(".heros").append("<div class=\"hero col-sm-3 col-xs-6\">\n" +
                        "        <div class=\"content "+obj.type+"\">\n" +
                        "            <div class=\"title\">\n" +
                        "                <span>"+obj.cost+"</span>" +obj.name+
                        "            </div>\n" +
                        "            <div class=\"pic\" style='background-image: url("+obj.pic+")'></div>\n" +
                        "            <div class=\"skills\">\n" +
                        "                <div class=\"skill\">Ex "+obj.ex[0].name+"：<br>"+obj.ex[0].txt+"</div>\n" +
                        "                <div class=\"skill\">技能 "+obj.skill1[0].cost+"费 "+obj.skill1[0].name+"：<br>"+obj.skill1[0].txt+"</div>\n" +
                        "                <div class=\"skill\">技能 "+obj.skill2[0].cost+"费 "+obj.skill2[0].name+"：<br>"+obj.skill2[0].txt+"</div>\n" +
                        "                <div class=\"skill\">技能 "+obj.skill3[0].cost+"费 "+obj.skill3[0].name+"：<br>"+obj.skill3[0].txt+"</div>\n" +
                        "            </div>\n" +
                        "        </div>\n" +
                        "    </div>")
                    if (obj.derivative != "") {
                        $.each(obj.derivative,function (j,o) {
                            $(".hero .skills").eq(i).append("<div class=\"skill\">衍生 "+o.cost+"费 "+o.name+"：<br>"+o.txt+"</div>")
                        })
                    }
                });
            }
        })
    }
    function byType() {
        $.ajax({
            url:"js/heros.json",
            datatype:"json",
            type:"GET",
            success:function(data){
                $(".heros").empty();
                data.sort(function(hero1, hero2) {
                    if(hero1.type < hero2.type){
                        return -1;
                    }else if(hero1.type > hero2.type){
                        return 1;
                    }else{
                        return 0;
                    };
                });
                $.each(data,function(i,obj) {
                    $(".heros").append("<div class=\"hero col-sm-3 col-xs-6\">\n" +
                        "        <div class=\"content "+obj.type+"\">\n" +
                        "            <div class=\"title\">\n" +
                        "                <span>"+obj.cost+"</span>" +obj.name+
                        "            </div>\n" +
                        "            <div class=\"pic\" style='background-image: url("+obj.pic+")'></div>\n" +
                        "            <div class=\"skills\">\n" +
                        "                <div class=\"skill\">Ex "+obj.ex[0].name+"：<br>"+obj.ex[0].txt+"</div>\n" +
                        "                <div class=\"skill\">技能 "+obj.skill1[0].cost+"费 "+obj.skill1[0].name+"：<br>"+obj.skill1[0].txt+"</div>\n" +
                        "                <div class=\"skill\">技能 "+obj.skill2[0].cost+"费 "+obj.skill2[0].name+"：<br>"+obj.skill2[0].txt+"</div>\n" +
                        "                <div class=\"skill\">技能 "+obj.skill3[0].cost+"费 "+obj.skill3[0].name+"：<br>"+obj.skill3[0].txt+"</div>\n" +
                        "            </div>\n" +
                        "        </div>\n" +
                        "    </div>")
                    if (obj.derivative != "") {
                        $.each(obj.derivative,function (j,o) {
                            $(".hero .skills").eq(i).append("<div class=\"skill\">衍生 "+o.cost+"费 "+o.name+"：<br>"+o.txt+"</div>")
                        })
                    }
                });
            }
        })
    }
});