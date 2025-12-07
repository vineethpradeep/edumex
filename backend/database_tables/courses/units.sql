CREATE TABLE units (
    id INT AUTO_INCREMENT PRIMARY KEY,
    module_id INT NOT NULL,
    title VARCHAR(255) NOT NULL,
    credits VARCHAR(50),
    icon VARCHAR(100),
    FOREIGN KEY (module_id) REFERENCES modules(id) ON DELETE CASCADE
);
