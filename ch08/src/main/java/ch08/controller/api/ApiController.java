package ch08.controller.api;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import ch08.dto.JsonResult;
import ch08.dto.XmlResult;
import ch08.vo.GuestBookVo;

@Controller
@RequestMapping("/api")
public class ApiController {
	
	@ResponseBody
	@RequestMapping(value="/html", method=RequestMethod.GET)
	public String html() {
		return "<h1>Ajax 연습</h1><p>HTML 데이터</p>";
	}
	
	@ResponseBody
	@RequestMapping(value="/text", method=RequestMethod.GET)
	public String text() {
		return "Text 데이터";
	}
	
	@ResponseBody
	@RequestMapping(value="/xml", method=RequestMethod.GET)
	public XmlResult xml() {
		XmlResult.GuestBookVo vo = new XmlResult.GuestBookVo();
		vo.setNo(1L);
		vo.setName("둘리");
		vo.setMessage("호이~");
		
		
		return XmlResult.success(vo);
	}
	
	@ResponseBody
	@RequestMapping(value="/json", method=RequestMethod.GET)
	public JsonResult json() {
		GuestBookVo vo = new GuestBookVo();
		vo.setNo(1L);
		vo.setName("둘리");
		vo.setMessage("호이~");
		
		return JsonResult.success(vo);
	}
	@ResponseBody
	@RequestMapping(value="/post01", method=RequestMethod.POST)
	public JsonResult post01(GuestBookVo vo) {
		// service -> repository : db insert 성공한 후,
		
		vo.setNo(1L);
		vo.setPassword("");
		
		return JsonResult.success(vo);
	}
	
	@ResponseBody
	@RequestMapping(value="/post02", method=RequestMethod.POST)
	public JsonResult post02(@RequestBody GuestBookVo vo) {//json으로 온 걸 바인딩 시킬때는 RequestBody 붙이기
		
		vo.setNo(1L);
		vo.setPassword("");
		
		return JsonResult.success(vo);
	}
}
