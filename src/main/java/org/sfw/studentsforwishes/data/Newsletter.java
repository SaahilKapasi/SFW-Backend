package org.sfw.studentsforwishes.data;

import org.springframework.data.annotation.Id;

public class Newsletter {

    @Id
    private Long id;

    private String title;

    private String content;

    public Newsletter(String title, String content) {
        this.title = title;
        this.content = content;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
}
