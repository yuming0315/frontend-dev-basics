<%@ page language="java" contentType="text/html; charset=EUC-KR"
	pageEncoding="EUC-KR"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>Insert title here</title>
<script>
//	DOM Load Event
//	1. load: DOM, CSSOM, Image 모두 다 로딩
//	2. DOMContentLoaded: DOM만 로딩
window.addEventListener("DOMContentLoaded",function(){
	document.getElementsByTagName("button")[0]
	.addEventListener("click",function(){
		var xhr;
		if(window.ActiveXObject){	// <= IE8
			xhr = new ActiveXObject("Microsoft.XMLHTTP");
		} else if(window.XMLHttpRequest){					// Other Standart Browser
			xhr = new XMLHttpRequest();
		} else {
			console.log('AJAX 기능을 사용할 수 없습니다.');
			return;
		}
		
		xhr.addEventListener('readystatechange',function(){
			if(this.readyState == XMLHttpRequest.UNSENT){					// readystate: 0
				// request가 초기화 되기 전
				console.log("State:UNSENT");
			} else if(this.readyState == XMLHttpRequest.OPENED){			// readystate: 1
				// 서버와의 연결이 성공
				console.log("State:OPENED");
			} else if(this.readyState == XMLHttpRequest.HEADERS_RECEIVED){	// readystate: 2
				// 서버가 request를 받음
				console.log("State:HEADERS_RECEIVED");
			} else if(this.readyState == XMLHttpRequest.LOADING){			// readystate: 3
				// response 처리 중
				console.log("State:HEADERS_LOADING");
			} else if(this.readyState == XMLHttpRequest.DONE){				// readystate: 4
				// response 처리 끝
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
	<h1>AJAX Test: Json Format Data: XmlHttpRequest 객체를 직접 사용하기</h1>

	<button>데이터 가져오기</button>
	<div id="data"></div>
</body>
</html>