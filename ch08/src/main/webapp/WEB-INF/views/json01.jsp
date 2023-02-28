<%@ page language="java" contentType="text/html; charset=EUC-KR"
	pageEncoding="EUC-KR"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>Insert title here</title>
<script src="${pageContext.request.contextPath }/jquery/jquery-3.6.0.js"></script>
<script>
$(function(){
	$("button").click(function(){
		$.ajax({
			url: "${pageContext.request.contextPath }/api/json", //�ڹٽ�ũ��Ʈ �ڵ忡 el�� ���� �� ����
			async: true,
			type: "get",
			dataType: "json",
			success: function(response) {
				if(response.result === "fail") {
					console.error(response.message);
					return;
				}
				
				var vo = response.data;
				
				var htmls = "";
				htmls += ("<h3>" + vo.no + "</h3>");
				htmls += ("<h4>" + vo.name + "</h4>");
				htmls += ("<h5>" + vo.message + "</h5>");
				
				$("#data").html(htmls);
			},
			error: function(xhr, status, error) {
				console.error(status, error);
			}
		});
	});
});
</script>
</head>
<body>
	<h1>AJAX Test: Json Format Data: $.ajax() �Լ� ����ϱ�</h1>

	<button>������ ��������</button>
	<div id="button"></div>
	
	<div id="data"></div>

</body>
</html>