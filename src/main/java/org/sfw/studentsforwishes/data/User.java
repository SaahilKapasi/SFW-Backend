package org.sfw.studentsforwishes.data;

import org.springframework.data.annotation.Id;

public class User {

    @Id
    private Long id;

    private String firstName;

    private String lastName;

    private String email;

    private boolean volunteer;

    public User(String firstName, String lastName, String email, boolean volunteer) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.volunteer = volunteer;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public boolean isVolunteer() { return volunteer; }

    public void setEmail(String email) {
        this.email = email;
    }
}
