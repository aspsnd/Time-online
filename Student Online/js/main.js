var elew1;//进度条自适应
var topp =document.querySelector('.top'),
	enter =document.querySelector('.try'),
	yearPage =document.querySelector('.year-page'),
	groupPage =document.querySelector('.group-page'),
	peoplePage =document.querySelector('.people-page'),
	personPage =document.querySelector('.person-page'),
	masterPage =document.querySelector('.master-page'),
	groupopt =document.querySelector('.groupopt'),
	last =document.querySelector('.last'),
	next =document.querySelector('.next'),
	hiddenwrap =document.querySelector('.hiddenwrap'),
	schoolopt =document.querySelector('.schoolopt');
var year =document.querySelectorAll('.year');//按键
var schooll =document.querySelectorAll('.school');

var paint =document.querySelector('.paint'),
	yearc =document.querySelector('.yearc'),
	placec =document.querySelector('.placec'),
	picture =document.querySelector('.picture'),
	intro =document.querySelector('.intro');

var yearNum=0,			//多维下标
	groupnum=1,
	schoolnum=0,
	personnum=0;
var groupdis=1,school=0;

var colors=[];
{
	colors[1]='rgb(250,229,166)';
	colors[2]='rgb(166,186,250)';
	colors[3]='rgb(250,166,190)';
	colors[4]='rgb(182,175,255)';
	colors[5]='rgb(237,181,249)';
}

var grouptext=[],schooltext=[];
{
	grouptext[1]='团队发展事业群';
	grouptext[2]='技术工程事业群';
	grouptext[3]='应用服务事业群';
	grouptext[4]='网络媒体事业群';
	grouptext[5]='易班工作站';
	schooltext[1]='站长';
	schooltext[2]='中心校区';
	schooltext[3]='软件园校区';
	schooltext[4]='洪家楼校区';
	schooltext[5]='兴隆山校区';
}
var nowPage=yearPage;//当前页面
var re =document.querySelector('.re');
var body =document.querySelector('body');
for (var i=0,num=year.length;i<num ;i++ )//点击年份进入事业群
{
	year[i].index=i;
	year[i].onclick=function (event)
	{
		//尝试动画
			//获取鼠标位置
			var e=event;
			var x=e.clientX;
			var y=e.clientY;
			//圆形震荡
			var circle =document.createElement('div');
			circle.setAttribute("class","circle");
			circle.style.top=y+'px';
			circle.style.left=x+'px';
			body.appendChild(circle);
			//心形出现
			var heart =document.createElement('div');
			heart.setAttribute("class","heart");
			heart.style.top=y+'px';
			heart.style.left=x+'px';
			body.appendChild(heart);
			//心电图
			var ele =document.createElement('div');
			ele.setAttribute("class","ele");
			ele.style.height=elew1*0.67+'px';
			//防止二次点击
			var cover =document.createElement('div');
			cover.setAttribute("class","cover");
			body.appendChild(cover);
			//背景消失
			yearPage.style.animation='die 0.6s linear';
		//
		setTimeout(function(){
			//结束
			yearPage.className=yearPage.className+' hide';
			//动画清除
			yearPage.style.animation='initial';
			circle.remove();
			//心电图出现
			body.appendChild(ele);
		},600)
		setTimeout(function(){
			groupPage.className=groupPage.className.replace(' hide','');
			groupPage.style.animation='toleft 0.6s linear';
			ele.style.animation='totoleft 0.6s linear';
			heart.style.animation='heart-left 0.6s linear';
			groupcss();
			re.className=re.className.replace(' hide','');
		},1400)
		setTimeout(function(){
			groupPage.style.animation='initial';
			heart.remove();
			cover.remove();
			ele.remove();
			//正常变换
			
			nowPage=groupPage;
		},2000)
			topp.className=topp.className+' hide';
		yearNum=this.index;
	}
}
last.onclick=function ()//轮播变换
{
	tolast();
}
next.onclick=function ()
{
	tonext();
}

function tolast()//轮播变换
{
	groupdis--;
	hiddenwrap.style.transform='rotatey('+(-72*(groupdis-1))+'deg)';
	groupnum=groupdis%5;
	if (groupnum==0)groupnum=5;
	groupopt.innerHTML=grouptext[groupnum];
}
function tonext()
{
	
	
	groupdis++;
	hiddenwrap.style.transform='rotatey('+(-72*(groupdis-1))+'deg)';
	groupnum=groupdis%5;
	if (groupnum==0)groupnum=5;
	groupopt.innerHTML=grouptext[groupnum];
}
re.onclick=function ()//返回键的多种情况
{
	switch (nowPage)
	{
	case groupPage:{
		groupPage.className=groupPage.className+' hide';
		yearPage.className=yearPage.className.replace(' hide','');
		nowPage=yearPage;
		topp.className=topp.className.replace(' hide','');
		re.className=re.className+' hide';
	}
	break;
	case peoplePage:{
		peoplePage.className=peoplePage.className+' hide';
		groupPage.className=groupPage.className.replace(' hide','');
		nowPage=groupPage;
	}break;
	case masterPage:{
		masterPage.className=masterPage.className+' hide';
		groupPage.className=groupPage.className.replace(' hide','');
		nowPage=groupPage;
	}break;
	}
}

for (var i=0;i<schooll.length ;i++ )//选择校区
{
	schooll[i].index=i;
	schooll[i].onclick=function ()
	{
		toschool(this.index+1);
	}
}
function toschool(i)//选择校区
{
	schoolopt.innerHTML=schooltext[i];
	for (var j=0;j<schooll.length ;j++ )
	{
		schooll[j].style.filter='initial';
	}
	schooll[i-1].style.filter='brightness(125%)';
	schoolnum=i;
}
enter.onclick=function ()
{
	if (schoolnum==0)
	{
		alert('请选择校区或站长');
	}
	else{
		if (schoolnum==1)
		{
			tomaster();
		}
		else	topeople();
	}
}
var tran;
function topeople()//到团队人员
{
	
	
		nowPage=peoplePage;
		groupPage.className=groupPage.className+' hide';
		tran =document.createElement('img');
		tran.setAttribute("class","tran");
		tran.src='images/logo.png';
		body.appendChild(tran);
		setTimeout(function(){
			peoplePage.className=peoplePage.className.replace(' hide','');
			tran.remove();
		},500)
		yearc.innerHTML=(2000+yearNum+1);
		placec.innerHTML=schooltext[schoolnum];
		paint.src='images/gr-'+(groupnum)+'.png';
		picture.style.backgroundColor=colors[groupnum];
		intro.style.backgroundColor=colors[groupnum];
	
	
}
function tomaster()//站长
{
	nowPage=masterPage;
	groupPage.className=groupPage.className+' hide';
	masterPage.className=masterPage.className.replace(' hide','');
}
function groupcss()//给group轮播加载样式
{
	var group =document.querySelectorAll('.group');
	var ww=group[0].clientWidth;
	for (var i=0;i<group.length ;i++ )
	{
		
		group[i].style.transform='rotatey('+(72*i)+'deg)translatez('+(ww/1.46)+'px)';
	}
}
window.onload=function ()//返回第一页
{
	yearPage.className=yearPage.className.replace(' hide','');
	re.className=re.className+' hide';
	elew1=body.clientWidth;
}