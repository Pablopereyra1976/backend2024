CREATE TABLE usuarios(
    usuario_Id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(30) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    direccion TEXT,
    telefono INT,
    rol VARCHAR(100) NOT NULL,
    activo BOOLEAN DEFAULT TRUE,
    fecha_registro DATE DEFAULT CURRENT_DATE
)
ALTER  TABLE usuarios CHANGE telefono telefono VARCHAR(50) NOT NULL

INSERT INTO usuarios (username, email, password_hash, direccion, telefono, rol) VALUES
('juanperez', 'juan.perez@example.com', 'juanperez123', 'Calle Falsa 123', '+123456789', 'cliente'),
('maria.gomez', 'maria.gomez@example.com', 'mariagomez234', 'Avenida Siempre Viva 456', '+987654321', 'cliente'),
('admin', 'admin@example.com', 'admin789', 'Plaza Central 789', '+1029384756', 'admin');