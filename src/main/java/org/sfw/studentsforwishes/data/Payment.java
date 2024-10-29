package org.sfw.studentsforwishes.data;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection = "payments")
@Data
public class Payment {
    @Id
    private String id;

    @Field("user_email")
    private String userEmail;

    @Field("amount")
    private double amount;

    @Field("currency")
    private String currency;

    public Payment(String userEmail, double amount, String currency) {
        this.userEmail = userEmail;
        this.amount = amount;
        this.currency = currency;
    }

    public void setAmount(double amount){
        if (amount < 0) {
            throw new IllegalArgumentException("Amount must be positive");
        }
        this.amount = amount;
    }

    public void setEmail(String email){
        this.userEmail = email;
    }

    public void setCurrency(String currency){
        if (currency == null || currency.isEmpty()) {
            throw new IllegalArgumentException("Currency is required");
        }
        this.currency = currency;
    }

    @Override
    public String toString() {
        return "Payment{" +
                "id='" + id + '\'' +
                ", userEmail='" + userEmail + '\'' +
                ", amount=" + amount +
                ", currency='" + currency + '\'' +
                '}';
    }

    public double getAmount() {
        return this.amount;
    }
}
