package vn.hust.edu.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class MainController {

    @RequestMapping(value = {"/", "/home"}, method = RequestMethod.GET)
    public String home(Model model) {
        return "home";
    }

    @RequestMapping(value = {"/category1"}, method = RequestMethod.GET)
    public String category1(Model model) {
        return "category1";
    }

    @RequestMapping(value = {"/category2"}, method = RequestMethod.GET)
    public String category2(Model model) {
        return "category2";
    }

    @RequestMapping(value = {"/post"}, method = RequestMethod.GET)
    public String post(Model model) {
        return "post";
    }



}
