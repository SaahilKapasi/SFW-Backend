package org.sfw.studentsforwishes.controllers;

import org.sfw.studentsforwishes.data.Payment;
import org.sfw.studentsforwishes.services.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.util.List;

@RestController
public class PaymentController {
    private final PaymentService paymentService;

    @Autowired
    public PaymentController(PaymentService paymentService) {
        this.paymentService = paymentService;
    }

    @GetMapping("/monthly-income")
    public ResponseEntity<Double> getMonthlyIncome(@RequestParam int month, @RequestParam int year) {
        // get payments for month and year
        List<Payment> payments = paymentService.getPaymentsByMonthAndYear(month, year);

        // calculate total income
        double totalIncome = payments.stream()
                .mapToDouble(Payment::getAmount)
                .sum();

        return ResponseEntity.ok(totalIncome); // return total income as a ResponseEntity
    }
}
