package com.JustDoIt.Mecca.OJS.controller;

import com.JustDoIt.Mecca.OJS.service.MatchingService;
import com.JustDoIt.Mecca.OJS.vo.UserProfile;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.io.IOException;

@Controller
public class UserProfileController {


    private MatchingService mService;

    public UserProfileController(MatchingService mService) {

        this.mService = mService;
    }

    // 업로드 페이지를 반환하는 메소드
    @GetMapping("/upload")
    public String uploadForm(Model model) {
        return "/OJS/upload";
    }

    // 파일 업로드 처리 메소드
    @PostMapping("/upload")
    public String handleFileUpload(
            @RequestParam("email") String email,
            @RequestParam("file") MultipartFile file,
            RedirectAttributes redirectAttributes) throws IOException {

        mService.updateprofile(file,email);




        redirectAttributes.addFlashAttribute("message", "File uploaded successfully!");
        return "redirect:/upload";
    }

    // 프로필 이미지 페이지
    @GetMapping("/profile/{id}")
    public String getProfile(@PathVariable String id, Model model) throws IOException {
//        UserProfile profile = userProfileService.getProfile(id);

        UserProfile profile=mService.getprofile(id);
        System.out.println(profile.getProfileImage());
        model.addAttribute("profile", profile);

        return "/OJS/profile";
    }
    @GetMapping("/profile/{id}/image")
    public ResponseEntity<byte[]> getProfileImage(@PathVariable String id) throws IOException {
        UserProfile profile = mService.getprofile(id);

        if (profile == null || profile.getProfileImage() == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        // 프로필 이미지 데이터를 HTTP 응답으로 반환
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(org.springframework.http.MediaType.IMAGE_JPEG);  // 이미지 형식에 맞춰 설정 (JPEG, PNG 등)

        return new ResponseEntity<>(profile.getProfileImage(), headers, HttpStatus.OK);
    }


}