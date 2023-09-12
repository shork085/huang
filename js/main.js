var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");

var people = document.getElementById("people");
var mango = document.getElementById("mango");

var bg = document.getElementById("bg");
var info = document.getElementById("info");

window.onload=function(){
    people.style.animationPlayState="paused";
}


function appear(){
    mango.style.opacity=1;
    mango.style.transitionDuration="1.5s";
    mango.style.transitionProperty="opacity";
}
function disappear(){
    mango.style.opacity=0;
    mango.style.transitionDuration="1.5s";
    mango.style.transitionProperty="opacity";
}

function prepared(){
    people.style.animation="pmove 3.5s steps(1)";
    if(people.style.animationPlayState=="paused"){
        people.style.animationPlayState="running";
    }
    people.addEventListener('animationend',function(){
        appear();
    })
}

// function done(){
//     if(people.style.animationPlayState=="running"){
//         people.style.animationPlayState="paused";
//     }
//     disappear();
// }


box1.onmouseover = function(){
    appear();
}
box1.onmouseout = function(){
    disappear();
}
box2.onmouseover = function(){
    appear();
}
box2.onmouseout = function(){
    disappear();
}

function run1(){
    mango.style.transition="all 0.5s cubic-bezier(0,0,0,0)";
    mango.style.transform="translateX(250px)";
    var inner = document.getElementById("m");
    inner.style.transform="translateY(250px)";
}

function run2(){
    mango.style.transition="all 0.5s cubic-bezier(0,0,0,0)";
    mango.style.transform="translateX(700px)";
    var inner = document.getElementById("m");
    inner.style.transform="translateY(250px)";
}



box1.onclick = function(){
    
    disappear();
    prepared();
    setTimeout(function(){
        run1();
    },5000);
    setTimeout(function(){
        show();
    },6000);
}

box2.onclick = function(){
    
    disappear();
    prepared();
    setTimeout(function(){
        run2();
    },5000);
    setTimeout(function(){
        show();
    },6000);
}



var c = document.getElementById("close");
c.onclick = function(){
    bg.style.display="none";
    info.style.display="none";
    disappear();
    mango.style.transition="none";
    mango.style.transform="none";
    var inner = document.getElementById("m");
    inner.style.transform="none";
    people.style.animation="none";
}


var p1="<p>2018年3月，黄文秀主动来到百色最偏远的乐业县新化镇百坭村担任第一书记。在她到任之初，百坭村交通不便、产业不强、脱贫任重，472户2067人中，还有103户473人未脱贫，贫困发生率为22.88%。</p>"+

"<p>初来乍到，乡亲们对这位年轻的“女娃娃”并不信任，都说她是来村里“镀镀金”的。为了取得乡亲们的信任，黄文秀直接住到村里，翻山越岭、进村入户访贫问苦，手绘“民情地图”，学说方言，帮着大伙儿扫院子、干农活。渐渐地，大家从心底里接受了她，专心跟她搞发展。"+

"</p><p>不到一年的时间，百坭村103户贫困户顺利脱贫88户，贫困发生率降至2.71%，村集体经济项目收入翻倍。黄文秀还协调完成了1.5公里的道路硬化，新建蓄水池4座，完成两个屯47盏路灯的亮化工作。"+

"</p><p>这位扶贫路上的“女战士”曾在自己的驻村日记中到：“扶贫之路就像一条长征路，无论多么艰难，都会坚定不移走下去。”</p>";

var p2="<p>黄文秀（1989年4月—2019年6月），女，壮族，中共党员，生前系广西壮族自治区百色市市委宣传部副科长、派驻乐业县百坭村党组织第一书记。2019年6月17日，黄文秀因公牺牲，年仅30岁。"+
"2019年7月1日，中国共产党中央宣传部追授黄文秀“时代楷模”称号。</p>"+"<p>1989年4月，黄文秀出生在广西壮族自治区百色市田阳县。据她父亲黄忠杰回忆，他们家之前住在贫瘠的大山深处，在党和政府的帮助下搬出大山，获得了新耕地。"+
"因此，父亲经常教育她要记得这份恩情，并在自己有能力时涌泉相报。回馈社会的种子自此在黄文秀心中扎根。"+
"她在入党申请书中如此写道：“一个人要活得有意义，生存得有价值，就不能光为自己而活，要用自己的力量为国家、为民族、为社会做出贡献。”</p>";

var p3="<p>2019年6月16日晚，黄文秀从百色返回百坭途中突遇山洪，不幸牺牲。遇难当天，黄文秀正在家里照顾刚做完肝癌手术的父亲。不料天气骤变。她担心暴雨会引发山洪，威胁村民的生命财产安全，便顾不上陪伴病床上的父亲，想连夜赶回百坭指导防灾工作。“天气预报说晚上有暴雨，现在开车回村里不安全，明早再回吧？”面对父亲的挽留，黄文秀坚持说：“正因为有暴雨更得赶回去，怕村里受灾，我马上得走了。”"+
"未曾想，这竟成为黄文秀与父亲最后的对话。在回程路上，面对恶劣的行车环境，黄文秀仍不忘实时关注百坭灾情，指导村干部做好防洪工作。当晚11点，雨势越来越大，通往百坭的道路已被山洪淹没。“我被困住了，两头都走不了。”这是黄文秀与家人最后的联络。在进退两难之际，她像当初奔赴扶贫战场一样，毅然选择了百坭群众。然而这一次，百坭人民却再没有等来黄文秀。17日凌晨1点，黄文秀失联。"+
"18日中午，搜救人员在河道下游发现了黄文秀的遗体。她将最美的韶华留在了扶贫路上。</p>";

var p4="<p>文秀不忘初心、牢记使命，勇于担当甘于奉献的先进事迹在社会上引起强烈反响，央视新闻、新华社、《人民日报》、《光明日报》、《中国教育报》等数十家媒体、报纸、公众号报道了黄文秀的先进事迹。2019年6月21日，全国妇联追授黄文秀全国“三八红旗手”称号，2019年6月23日，广西壮族自治区党委宣传部追授黄文秀“八桂楷模”称号，2019年6月24日，广西壮族自治区委员会追授黄文秀同志“自治区优秀共产党员”称号，"+
"2019年6月28日，人力资源社会保障部、国务院扶贫办决定，追授黄文秀同志“全国脱贫攻坚模范”称号，2019年7月1日，中宣部向全社会宣传发布黄文秀的先进事迹，追授她“时代楷模”称号，2019年7月2日，共青团中央、全国青联追授黄文秀同志“中国青年五四奖章”。</p>"+
"<p>2019年7月1日中共中央总书记、国家主席、中央军委主席习近平对黄文秀同志先进事迹作出重要指示。习近平强调，黄文秀同志研究生毕业后，放弃大城市的工作机会，毅然回到家乡，在脱贫攻坚第一线倾情投入、奉献自我，用美好青春诠释了共产党人的初心使命，谱写了新时代的青春之歌。广大党员干部和青年同志要以黄文秀同志为榜样，不忘初心、牢记使命，勇于担当、甘于奉献，在新时代的长征路上做出新的更大贡献。</p>";

var p=[p1,p2,p3,p4];

function randomSen(min,max){
    var num = max-min+1;
    return Math.floor(Math.random()*num+min);
}

function show(){
    bg.style.display="block";
    info.style.display="block";
    document.getElementById("content").innerHTML=p[randomSen(0,p.length-1)];
}