function testCall01()
{
    var msg="関数が呼び出されました！！";
    alert(msg);

    //別の関数も呼び出せるよ
    // testCall02();
}

function testCall02()
{
    var msg="今日は何曜日かな？";
    alert(msg);
    
    var toDay = new Date();
    var week = toDay.getDay();

    var str;
    switch(week)
    {
        case 0:
            str="日曜日";
            break;
        case 1:
            str="月曜日";
            break;
        case 2:
            str="火曜日";
            break;
        case 3:
            str="水曜日";
            break;
        case 4:
            str="木曜日";
            break;
        case 5:
            str="金曜日";
            break;
        default:
            str="土曜日";
            break;
    }
    document.write("今日は<strong>"+str+"</strong>ですね")
}

function docWrite()
{
    //上書きになるよ
    document.write("<br>JavaScriptはONです!!");

    document.write("<br><strong>10+20の答えは</strong>");
    document.write(10+20);
    document.write("です！");

    var rank=1;
    var mnt = new Array
    (
        "富士山",
        "白根山",
        "磐梯山",
        "吾妻山",
        "奥穂高"
    );

    document.write('<br><table border="3">');
    for(var i=0;i < mnt.length; i++)
    {
        document.write('<tr>');
        document.write('<td>'+rank+'位</td>');
        document.write('<td>'+mnt[i]+'</td>');
        document.write('</tr>');
        rank++;      
    }
    document.write('</table>')
}

function hiduke()
{
    var hiduke=document.lastModified;
    document.write('今日は ' + hiduke);

    // //ダイアログ表示
    // var flg;
    // flg = confirm("背景の色を変えてもよござんす？");
    // if(flg==true)
    // {
    //     document.bgColor="green";
    // }
}

function quise()
{
    var q = new Array(
        "127.0.0.1はループバックアドレスである",
        "地球上でもっとも多い元素は炭素である",
        "金の元素記号はGbである",
        "動物細胞には細胞壁はない",
        "水を分解すると水素と酸素が出る"
    )

    var ans = new Array(
        true,
        false,
        false,
        true,
        true
    )

    var ten = 0;
    for(var i = 0; i < q.length; i++)
    {
        if(confirm(q[i]) == ans[i])
        {
            ten += 20;
        }
    }

    alert("あなたの点数は"+ten+"点でした！");
}


// //テストざます
// alert("こにゃにちわ！！");
// alert(2+1);
// alert(6+"月");
// alert("円周率は"+3.14159);