package org.sfw.studentsforwishes.repositories;

import org.sfw.studentsforwishes.data.Payment;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.time.LocalDate;
import java.util.List;

public interface PaymentRepository extends MongoRepository<Payment, Long> {
    Payment findByUserEmail(String userEmail);
    List<Payment> findByDateBetween(LocalDate startDate, LocalDate endDate);

}

