package org.sfw.studentsforwishes.repositories;

import org.sfw.studentsforwishes.data.User;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends MongoRepository<User, Long> {
    void deleteByEmail(String email);
    Optional<User> findByEmail(String email);
    List<User> findByVolunteerTrue();
}
