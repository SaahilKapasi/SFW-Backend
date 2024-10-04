package org.sfw.studentsforwishes.controllers;

import org.sfw.studentsforwishes.data.Email;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EmailController {

    @PostMapping("/send-email")
    public void sendEmail(@RequestBody Email email) {

    }

}
