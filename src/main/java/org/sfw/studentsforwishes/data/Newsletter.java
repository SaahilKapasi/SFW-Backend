package org.sfw.studentsforwishes.data;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;

public class Newsletter {

    @Id
    private Long id;

    @Setter
    @Getter
    private String title;

    @Setter
    @Getter
    private String content;

    public Newsletter(String title, String content) {
        this.title = title;
        this.content = content;
    }

}
