package org.sfw.studentsforwishes.repositories;

import org.sfw.studentsforwishes.data.Payment;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PaymentRepository extends MongoRepository<Payment, Long> {
    Payment findByUserEmail(String userEmail);
}

