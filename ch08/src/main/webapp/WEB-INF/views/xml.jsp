<%@ page language="java" contentType="text/html; charset=EUC-KR"
	pageEncoding="EUC-KR"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>Insert title here</title>
<script src="${pageContext.request.contextPath }/jquery/jquery-3.6.0.js"></script>
<script>
	$(function() {
		$("button").click(function() {
			$.ajax({
				url : "${pageContext.request.contextPath}/api/xml",
				async : true,
				type : "get",
				dataType : "xml",
				success : function(response) {
					//console.log(response);
					var $data = $("data",response);
					var $no = $("no",$data);
					var $name = $("name",$data);
					var $message = $("message",$data);
					
					var htmls = "";
					htmls += ("<h3>" + $no.text() + "</h3>"); //그냥 $no만 입력하면 [object Object]
					htmls += ("<h4>" + $name.text() + "</h4>");
					htmls += ("<h5>" + $message.text() + "</h5>");
					
					$("#data").html(htmls);
				},
				error : function(xhr, status, error) {
					console.error(status, error);
				}
			})
		});
	})
</script>
</head>
<body>
	<h1>AJAX Test: Text Format Data</h1>

	<button>데이터 가져오기</button>
	<div id="data"></div>
</body>
</html>