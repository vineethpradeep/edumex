CREATE TABLE subcourse_tags (
    id INT AUTO_INCREMENT PRIMARY KEY,
    subcourse_id INT NOT NULL,
    tag VARCHAR(100),
    FOREIGN KEY (subcourse_id) REFERENCES subcourses(id) ON DELETE CASCADE
);
