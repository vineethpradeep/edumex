CREATE TABLE courses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    category VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    entry_requirements TEXT,
    assessments TEXT,
    image VARCHAR(255),
    badge VARCHAR(100),
    level JSON NOT NULL,
    course_budget VARCHAR(50),
    credits VARCHAR(50),
    duration VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
