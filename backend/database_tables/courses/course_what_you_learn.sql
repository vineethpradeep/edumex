CREATE TABLE course_what_you_learn (
    id INT AUTO_INCREMENT PRIMARY KEY,
    course_id INT NOT NULL,
    point VARCHAR(255),
    FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE CASCADE
);
