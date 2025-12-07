CREATE TABLE subcourse_what_you_learn (
    id INT AUTO_INCREMENT PRIMARY KEY,
    subcourse_id INT NOT NULL,
    point VARCHAR(255),
    FOREIGN KEY (subcourse_id) REFERENCES subcourses(id) ON DELETE CASCADE
);
