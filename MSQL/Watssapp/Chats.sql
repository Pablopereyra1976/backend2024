CREATE TABLE chats(
    chat_Id INT PRIMARY KEY AUTO_INCREMENT,
    emisor_Id INT NOT NULL,
    receptor_Id INT NOT NULL,
    mensaje_texto TEXT NOT NULL,
    activo BOOLEAN DEFAULT TRUE,
    creado_en DATE DEFAULT CURRENT_DATE,
    estado INT DEFAULT 1,
    FOREIGN KEY (emisor_Id) REFERENCES usuarios(usuario_Id) ON DELETE CASCADE,
    FOREIGN KEY (receptor_Id) REFERENCES usuarios(usuario_Id) ON DELETE CASCADE
    )