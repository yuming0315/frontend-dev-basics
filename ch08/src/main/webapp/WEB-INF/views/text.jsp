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
			$("#data").load("${pageContext.request.contextPath }/api/text");
		})
	})
</script>
</head>
<body>
	<h1>AJAX Test: Text Format Data: $.ajax() �Լ� ����ϱ�</h1>

	<button>������ ��������</button>
	<div id="button"></div>
	<div id="data"></div>
</body>
</html>