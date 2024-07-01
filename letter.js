let heart = document.querySelector('.heart')
let card = document.querySelector('.card')
let box = document.querySelector('#box')
heart.addEventListener('click',function(){
    card.setAttribute("style","opacity:0");
    let x = document.createElement("audio");
     x.setAttribute("src", "qlx.mp3");
     x.setAttribute("autoplay","autoplay");

// 打字效果
let i =0
let str = '思来想去还是给你说一些话，虽然本来做这个网页是准备写别的文案的，不过计划总是赶不上变化
从认识到现在也过去一个多月了，中途也出现过不少的波折，我也知道大部分都是我的问题，失望也是逐渐积累的，不过正如我之前。所说的话，我并不能保证，给你达到多少的预期。其实我也知道，就像你之前那样沟通那样，你比较在意过程。而我对于这个没有结果的这样一个过程可能也存在了一定的矛盾的心理。
其实我的想法也在慢慢的改变，就像当初并没有这个想法一样，到现在的可能在聊天之中会比较亲密，甚至来说这是第一次这样和女孩子亲密。其实到现在我也仅仅能保证的就是能够在游戏中陪你玩，虽然虽然现在你有新的朋友，可能也不太需要，而我讨女孩子的欢心比较差，不像你的一些朋友，说话比较好玩，然后又能逗你开心，对于逆水寒这个游戏来说，我之前的话都仅仅只是上线把任务做一做，打打副本已经就下线了。也不像现在的每天晚上能够在线这么长时间。嗯，只能说跟你在一块玩的时候确实挺快乐的。其实有时候我也在反省，就是一些小的细节确实没有做到位，但是有时候我也比较困惑，就比如可能前一天还是好好的，可能到第二天，然后突然就不开心了。
嗯，也不说太多，以至于后面的发展，其实我也不知道怎么做，再过了一天多的时间其实我也并不知道我能给你保证什么。
其实那天所说的话，有一部分确实当时情绪比较嗯比较不好，当时我还记得正好是感冒，还在床上躺着，回信息我一般都是这样，可能一会儿看手机，一会儿不看手机，也没怎么注意，一般像在上班的期间我都是手机开的静音，所以很难，除非我一直在玩手机，所以一般很难观察到信息。在你说那些话我其实也不知道怎么处理这段关系了。我也不知道你现在的心情是怎么样，可以的话，到时候可以一块聊一聊，当然如果不想聊也没事嗯，还是希望你每天能够开开心心，而不会因我的影响导致情绪的不好或者是本来就是一个本末倒置的事情，本来一块玩应该是开开心心的。 
<最后还是祝你保持快乐幸福。'
let strp = ''

function print()
{
 if(str[i]=='<')
 {
     document.getElementById("box").innerHTML=strp+"<br><br>+'|'";
     strp+="<br><br>";
 }
 else
 {
     strp+=str[i];
     box.innerHTML=strp + '|';
 }
 i++;
}
setTimeout(() => {
    let printid=setInterval(() => {
        print();
        if(i==str.length)
        clearInterval(printid);
        },100);  // 190毫秒打一个字，其实细心发现的话，这个项目还是有个小小的bug，无法用语言描述这个bug，如果你想优化的话 有一种简单的方法就是调快打字的速度，这样那个bug看起来就不会很明显,我太菜了 不会改那个bug
}, 5500);  //5500毫秒开始打字
// 背景出现
function appearBackground(){
setTimeout(()=>{
box.style.opacity=1
},1500)
}
appearBackground()

})
