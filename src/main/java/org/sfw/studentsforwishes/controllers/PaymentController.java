package org.sfw.studentsforwishes.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PaymentController {

    @GetMapping("/monthly-income")
    public ResponseEntity<Double> getMonthlyIncome() {
        // TODO: Implement method using Stripe API
        return null;
    }


}
