package org.sfw.studentsforwishes.data;
//Data transfer object
import lombok.Data;

@Data
public class PaymentInfoRequest {
    private int amount;
    private String currency;
    private String receiptEmail;

    public void validate() {
        if (amount <= 0) {
            throw new IllegalArgumentException("Amount must be greater than zero");
        }
        if (currency == null || currency.isEmpty()) {
            throw new IllegalArgumentException("Currency cannot be null or empty");
        }
        if (receiptEmail == null || receiptEmail.isEmpty()) {
            throw new IllegalArgumentException("Receipt email cannot be null or empty");
        }
    }

    public Object getAmount() {
        return this.amount;
    }

    public Object getCurrency() {
        return this.currency;
    }
}
