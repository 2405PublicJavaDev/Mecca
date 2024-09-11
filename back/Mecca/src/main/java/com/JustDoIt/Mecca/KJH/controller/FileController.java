package com.JustDoIt.Mecca.KJH.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class FileController {

    @GetMapping("/getFileData")
    public ResponseEntity<?> getFileData(@RequestParam String url, @RequestParam String filename) {
        // JSON 형식의 데이터 생성
        String jsonResponse = String.format("{\"url\" : \"%s\", \"filename\" : \"%s\"}", url, filename);
        return new ResponseEntity<>(jsonResponse, HttpStatus.OK);
    }
}
