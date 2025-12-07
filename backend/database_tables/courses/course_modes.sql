CREATE TABLE course_modes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    course_id INT NOT NULL,
    mode VARCHAR(100),
    FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE CASCADE
);
