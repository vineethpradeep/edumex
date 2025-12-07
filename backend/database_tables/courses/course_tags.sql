CREATE TABLE course_tags (
    id INT AUTO_INCREMENT PRIMARY KEY,
    course_id INT NOT NULL,
    tag VARCHAR(100),
    FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE CASCADE
);
