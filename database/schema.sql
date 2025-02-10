CREATE TABLE users (
    id SERIAL PRIMARY KEY,  
    name VARCHAR(100) NOT NULL,  
    email VARCHAR(150) UNIQUE NOT NULL,  
    password TEXT NOT NULL,  
    created_at TIMESTAMP DEFAULT NOW()  
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,  
    title VARCHAR(255) NOT NULL,  
    content TEXT NOT NULL,  
    user_id INT NOT NULL,  
    created_at TIMESTAMP DEFAULT NOW(), 
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE 
);
