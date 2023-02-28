<%@ page language="java" contentType="text/html; charset=EUC-KR"
	pageEncoding="EUC-KR"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>Insert title here</title>
<script>
//	DOM Load Event
//	1. load: DOM, CSSOM, Image ��� �� �ε�
//	2. DOMContentLoaded: DOM�� �ε�
window.addEventListener("DOMContentLoaded",function(){
	document.getElementsByTagName("button")[0]
	.addEventListener("click",function(){
		var xhr;
		if(window.ActiveXObject){	// <= IE8
			xhr = new ActiveXObject("Microsoft.XMLHTTP");
		} else if(window.XMLHttpRequest){					// Other Standart Browser
			xhr = new XMLHttpRequest();
		} else {
			console.log('AJAX ����� ����� �� �����ϴ�.');
			return;
		}
		
		xhr.addEventListener('readystatechange',function(){
			if(this.readyState == XMLHttpRequest.UNSENT){					// readystate: 0
				// request�� �ʱ�ȭ �Ǳ� ��
				console.log("State:UNSENT");
			} else if(this.readyState == XMLHttpRequest.OPENED){			// readystate: 1
				// �������� ������ ����
				console.log("State:OPENED");
			} else if(this.readyState == XMLHttpRequest.HEADERS_RECEIVED){	// readystate: 2
				// ������ request�� ����
				console.log("State:HEADERS_RECEIVED");
			} else if(this.readyState == XMLHttpRequest.LOADING){			// readystate: 3
				// response ó�� ��
				console.log("State:HEADERS_LOADING");
			} else if(this.readyState == XMLHttpRequest.DONE){				// readystate: 4
				// response ó�� ��
				console.log("State:DONE");
				
				if(this.status != 200){
					console.error(this.state);
					return;
				}
				
				console.log(this.responseText,typeof(this.responseText));
				var response = JSON.parse(this.responseText);
				
				var vo = response.data;
				if(response.result === "fail") {
					console.error(response.message);
					return;
				}
				
				var htmls = "";
				htmls += ("<h3>" + vo.no + "</h3>");
				htmls += ("<h4>" + vo.name + "</h4>");
				htmls += ("<h5>" + vo.message + "</h5>");
				
				document.getElementById("data").innerHTML = htmls;
			}
		});
		
		xhr.open("get","${pageContext.request.contextPath }/api/json",true)
		xhr.send();
	});
});
</script>
</head>
<body>
	<h1>AJAX Test: Json Format Data: XmlHttpRequest ��ü�� ���� ����ϱ�</h1>

	<button>������ ��������</button>
	<div id="data"></div>
</body>
</html>