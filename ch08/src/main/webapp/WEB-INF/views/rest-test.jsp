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
	$("#create").click(function(){
		var vo = {
			name: "둘리",
			email: "dooly@gmail.com",
			password: "1234",
			gender: "male"
		};
		
		$.ajax({
			url: "${pageContext.request.contextPath}/api/user",
			type: "post",
			dataType: "json",
			contentType: "application/json",
			data: JSON.stringify(vo),
			success: function(response){
				console.log(response);
			}
		})
	});
})
</script>
</head>
<body>
	<h1>AJAX Test: Restful API</h1>

	<button id="create">Create(post)</button>
	<button id="read">Read(get)</button>
	<button id="update">Update(put)</button>
	<button id="delete">Delete(delete)</button>


	<div id="data"></div>
</body>
</html>