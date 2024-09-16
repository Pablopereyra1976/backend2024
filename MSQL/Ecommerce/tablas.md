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

CREATE TABLE carritos(
    carrito_Id INT PRIMARY KEY AUTO_INCREMENT,
    usuario_Id INT NOT NULL,
    fecha_creacion DATE DEFAULT CURRENT_DATE,
    activo BOOLEAN DEFAULT TRUE,
    FOREIGN KEY (usuario_Id) REFERENCES usuarios(usuario_Id) ON DELETE CASCADE
)

CREATE TABLE carrito_productos(
    Id INT PRIMARY KEY AUTO_INCREMENT,
    carrito_Id INT NOT NULL,
    producto_Id INT NOT NULL,
    cantidad INT NOT NULL,
    fecha_agregado DATE DEFAULT CURRENT_DATE,
    FOREIGN KEY (carrito_Id) REFERENCES carrito(carrito_Id) ON DELETE CASCADE
    FOREIGN KEY (producto_Id) REFERENCES productos(producto_Id) ON DELETE CASCADE
)

CREATE TABLE productos(
    producto_Id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(30) NOT NULL,
    descripcion VARCHAR(50) NOT NULL,
    precio DECIMAL NOT NULL,
    stock INT ,
    fecha_creacion DATE DEFAULT CURRENT_DATE,
    activo BOOLEAN DEFAULT TRUE
)

CREATE TABLE ordenes(
    ordenes_Id INT PRIMARY KEY AUTO_INCREMENT,
    usuario_Id INT NOT NULL,
    total DECIMAL(10,2) NOT NULL,
    fecha_creacion DATE DEFAULT CURRENT_DATE,
    estado ENUM('pendiente', 'procesando', 'completado', 'cancelado'),
    FOREIGN KEY (usuario_Id) REFERENCES usuarios(usuario_Id) ON DELETE CASCADE
    ) 

    CREATE TABLE ordenes_productos (
    Id INT PRIMARY KEY AUTO_INCREMENT,
    orden_Id INT NOT NULL,
    producto_Id INT NOT NULL,
    cantidad INT NOT NULL,
    precio_unitario DECIMAL (10,2) NOT NULL,
    FOREIGN KEY (orden_Id) REFERENCES ordenes(ordenes_Id),
    FOREIGN KEY (producto_Id) REFERENCES productos(producto_Id)
)