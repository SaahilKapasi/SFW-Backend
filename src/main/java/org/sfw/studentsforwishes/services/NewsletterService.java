package org.sfw.studentsforwishes.services;

import org.sfw.studentsforwishes.data.Newsletter;
import org.sfw.studentsforwishes.repositories.NewsletterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NewsletterService {

    private final NewsletterRepository newsletterRepository;

    @Autowired
    public NewsletterService(NewsletterRepository newsletterRepository) {
        this.newsletterRepository = newsletterRepository;
    }

    public void registerNewsletter(Newsletter newsletter) {
        newsletterRepository.save(newsletter);
    }

    public void updateNewsletter(Long id, Newsletter update) {
        newsletterRepository.findById(id).map(letter -> {
            letter.setContent(update.getContent());
            letter.setTitle(update.getTitle());
            return newsletterRepository.save(letter);
        });
    }

    public void deleteNewsletter(Long id) {
        newsletterRepository.deleteById(id);
    }

    public List<Newsletter> getNewsletters() {
        return newsletterRepository.findAll();
    }

}
