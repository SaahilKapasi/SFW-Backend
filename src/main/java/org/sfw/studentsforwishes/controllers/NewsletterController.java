package org.sfw.studentsforwishes.controllers;

import org.sfw.studentsforwishes.data.Newsletter;
import org.sfw.studentsforwishes.services.NewsletterService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/newsletters")
public class NewsletterController {

    private final NewsletterService newsletterService;

    public NewsletterController(NewsletterService newsletterService) {
        this.newsletterService = newsletterService;
    }

    @GetMapping
    public ResponseEntity<List<Newsletter>> getNewsletters() {
        try {
            List<Newsletter> newsletters = newsletterService.getNewsletters();
            return ResponseEntity.ok(newsletters);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PostMapping
    public void registerNewsletter(@RequestBody Newsletter newsletter) {
        newsletterService.registerNewsletter(newsletter);
    }

    @PutMapping
    public void updateNewsletter(@RequestBody Long id, @RequestBody Newsletter newsletter) {
        newsletterService.updateNewsletter(id, newsletter);
    }

    @DeleteMapping
    public void deleteNewsletter(@RequestBody Long id) {
        newsletterService.deleteNewsletter(id);
    }

}
