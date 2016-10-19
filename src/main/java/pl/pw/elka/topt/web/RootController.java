package pl.pw.elka.topt.web;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by Pawel on 2016-10-12.
 */
@RestController
@RequestMapping("api/")
public class RootController {

    @GetMapping
    public String home() {return "home";}
}
