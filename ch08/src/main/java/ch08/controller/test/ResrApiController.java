package ch08.controller.test;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ResrApiController {
	
	@RequestMapping("/test/rest")
	public String test() {
		return "rest-test";
	}
}
