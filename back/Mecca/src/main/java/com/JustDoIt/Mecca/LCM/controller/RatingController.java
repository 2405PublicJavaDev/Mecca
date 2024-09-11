package com.JustDoIt.Mecca.LCM.controller;

import com.JustDoIt.Mecca.LCM.service.RatingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/rating")
public class RatingController {

    private RatingService service;

    public RatingController() {}
    @Autowired
    public RatingController(RatingService service) { this.service = service; }

    @PostMapping("/plus")
    public int plusRate(@RequestBody Map<String, String> requestBody) {
        String uEmail =  requestBody.get("uEmail");
        int result = service.plusRate(uEmail);
        return result;
    }

    @PostMapping("/minus")
    public int minusRate(@RequestBody Map<String, String> requestBody) {
        String uEmail = requestBody.get("uEmail");
        int result = service.minusRate(uEmail);
        return result;
    }

    @GetMapping("/rank")
    public List<Map<String, Object>> getTopRatedUsers() {
        return service.getTopRatedUsers();
    }
}
