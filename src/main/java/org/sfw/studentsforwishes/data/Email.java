package org.sfw.studentsforwishes.data;

import lombok.AllArgsConstructor;
import lombok.Data;
@AllArgsConstructor
@Data
public class Email {
    private String subject;
    private String body;
    private String[] recipients;

    public Email(String subject, String body, String[] recipients){
        this.subject = subject;
        this.body = body;
        this.recipients = recipients;
    }

    public String[] getRecipients() {
        return this.recipients;
    }

    public String getSubject() {
        return this.subject;
    }

    public String getBody() {
        return this.body;
    }
}
