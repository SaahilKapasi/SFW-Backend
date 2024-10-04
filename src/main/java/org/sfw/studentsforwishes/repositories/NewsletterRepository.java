package org.sfw.studentsforwishes.repositories;

import org.sfw.studentsforwishes.data.Newsletter;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface NewsletterRepository extends MongoRepository<Newsletter, Long> {}
