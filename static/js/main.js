function over(id){
	//$('#navtel').src=;
	if(id=="tel")
	{
		$("#navtel").attr("src","./static/img/web/home/导航_电话_.png");
		$("#navtel").attr("width","200px");
		$("#navtel").attr("height","40px");
	}
	if(id=="email")
	{
		$("#navmail").attr("src","./static/img/web/home/导航_邮箱_.png");
		$("#navmail").attr("width","200px");
		$("#navmail").attr("height","40px");
	}		
	var kong = document.getElementById('kong');
	var id =  document.getElementById(id);
	kong.style.width = '5%';
	id.style.width = '28%';
}
function out(id){
	if(id=="tel")
	{	
		$("#navtel").attr("src","./static/img/web/home/导航_电话.png");	
		$("#navtel").attr("width","150px");		
		$("#navtel").attr("width","40px");
	}
	if(id=="email")
	{	
		$("#navmail").attr("src","./static/img/web/home/导航_邮箱.png");	
		$("#navmail").attr("width","150px");		
		$("#navmail").attr("width","40px");
	}	
	var kong = document.getElementById('kong');
	var id =  document.getElementById(id);
	kong.style.width = '28%';
	id.style.width = '5%';
}
function telover()
{
	$('#showtelid').html("免费咨询&nbsp;&nbsp;<span style='font-family:GOTHIC;'>021-31262170</span>");
}
function telout()
{
	$('#showtelid').html("");
}	  
function smb() {
	$.ajax({
		//几个参数需要注意一下
		type: "POST",//方法类型
		//dataType: "json",//预期服务器返回的数据类型
		url: "http://www.cloud-open.cn/client.php?c=feedback&a=getClientInfo",//url
		//data: $(form[name=dd]).serialize(),
		data:"xxxd",
		success: function (result) {
			alert(result);
		},
		error: function () {
			alert("异常！");
		}
	})
}		
function setCheckState(obj)
{
	if(obj.value==0)
	{
		obj.src="../static/img/web/system/checked.png";
		obj.value=1;
	}else{
		obj.src="../static/img/web/system/unchecked.png";
		obj.value=0;
	}
}