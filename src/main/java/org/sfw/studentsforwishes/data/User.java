package org.sfw.studentsforwishes.data;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;

public class User {

    @Id
    private Long id;

    @Setter
    @Getter
    private String firstName;

    @Setter
    @Getter
    private String lastName;

    @Setter
    @Getter
    private String email;

    @Getter
    private final boolean volunteer;

    public User(String firstName, String lastName, String email, boolean volunteer) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.volunteer = volunteer;
    }
}
