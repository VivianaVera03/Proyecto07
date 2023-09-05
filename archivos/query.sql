/* usar cuando el servidor no permita ingresar*/
/*ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root';*/

DROP DATABASE IF EXISTS  comprasOnline;
create database comprasOnline;
use comprasOnline;

DROP TABLE IF EXISTS cliente;
CREATE TABLE cliente(
PK_idUsuario VARCHAR(50) PRIMARY KEY,
nombre VARCHAR(50) NOT NULL,
email VARCHAR(100) NOT NULL
);


DROP TABLE IF EXISTS listacompra;
CREATE TABLE listacompra(
PK_idLista INT AUTO_INCREMENT PRIMARY KEY,
idUsuario VARCHAR(50) NOT NULL,
nombre VARCHAR(50) NOT NULL,
creation_date  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
FOREIGN KEY (idUsuario) REFERENCES cliente (PK_idUsuario)
);


DROP TABLE IF EXISTS supermercado;
CREATE TABLE supermercado(
PK_idSupermercado INT auto_increment PRIMARY KEY,
nombre VARCHAR(200) NOT NULL,
direccion VARCHAR(300) NOT NULL
);

INSERT INTO supermercado (PK_idSupermercado, nombre, direccion)
VALUES
    ('1', 'Supermaxi Urdesa', 'Barrio las Lomas, Av. Del Rotarismo No. 3 Cdla Urdesa Central, Mz 41.'),
    ('2', 'Supermaxi Ciudad Celeste', ' Av. León Febres Cordero. Ribadeneyra - Centro Comercial La Piazza. Ciudad Celeste'),
    ('3', 'Supermaxi Vía a la Costa', ' Vía a la Costa Km 13'),
    ('4', 'Supermaxi La Joya', ' Av. León Febres Cordero Km 14 1/2 (CC La Piazza - La Joya)'),
    ('5', 'Megamaxi City Mall', 'Av. Felipe Pezo s/n y Av Benjamín Carrión');

DROP TABLE IF EXISTS categoria;
CREATE TABLE categoria(
PK_idCategoria INT auto_increment PRIMARY KEY,
nombre VARCHAR(100)
);

INSERT INTO categoria (PK_idCategoria, nombre)
VALUES
    ('1', 'comestibles'),
    ('2', 'deportes'),
    ('3', 'limpieza'),
    ('4', 'desechables'),
    ('5', 'ferreteria');


DROP TABLE IF EXISTS producto;
CREATE TABLE producto(
PK_idProducto INT AUTO_INCREMENT PRIMARY KEY, 
nombre VARCHAR(100) NOT NULL,
categoria INT NOT NULL,
precio DECIMAL(6,2) NOT NULL,
codigoBarras char(13),
idSupermercado INT NOT NULL,
FOREIGN KEY (idSupermercado) REFERENCES supermercado(PK_idSupermercado),
FOREIGN KEY (categoria) REFERENCES categoria(PK_idCategoria)
);

DROP TABLE IF EXISTS lista_compras_productos;
CREATE TABLE lista_compras_productos(
idLista INT NOT NULL, 
idProducto INT NOT NULL,
FOREIGN KEY (idLista)  REFERENCES listacompra(PK_idLista),
FOREIGN KEY (idProducto)  REFERENCES producto(PK_idProducto)
);

use comprasOnline;
INSERT INTO cliente (PK_idUsuario, nombre, email)
VALUES
    ('johndoe', 'John Doe', 'john.doe@example.com'),
    ('janedoe', 'Jane Doe', 'jane.doe@example.com'),
    ('mikesmith', 'Mike Smith', 'mike.smith@example.com'),
    ('emilyjones', 'Emily Jones', 'emily.jones@example.com'),
    ('davidwilliams', 'David Williams', 'david.williams@example.com'),
    ('sarahbrown', 'Sarah Brown', 'sarah.brown@example.com'),
    ('robertjohnson', 'Robert Johnson', 'robert.johnson@example.com'),
    ('laurasmith', 'Laura Smith', 'laura.smith@example.com'),
    ('chrismiller', 'Chris Miller', 'chris.miller@example.com'),
    ('amandawilson', 'Amanda Wilson', 'amanda.wilson@example.com');

INSERT INTO cliente (PK_idUsuario, nombre, email)
VALUES
    ('viviana', 'Viviana Vera', 'vivianavera@example.com'),
    ('alejandra', 'Alejandra Cotrina', 'alejandracotrina@example.com');

INSERT INTO listacompra (idUsuario, nombre, creation_date) 
VALUES
('johndoe', 'Compras Semanales', '2023-08-21 10:00:00'),
('janedoe', 'Lista de Mercado', '2023-08-21 11:30:00'),
('mikesmith', 'Compras Mensuales', '2023-08-20 15:45:00'),
('emilyjones', 'Lista de Ofertas', '2023-08-19 09:15:00'),
('davidwilliams', 'Lista para Fiesta', '2023-08-18 18:20:00'),
('sarahbrown', 'Lista de Urgencias', '2023-08-17 14:00:00'),
('robertjohnson', 'Compras Diarias', '2023-08-16 12:30:00'),
('laurasmith', 'Lista de Regalos', '2023-08-15 08:00:00'),
('chrismiller', 'Compras de Fin de Semana', '2023-08-14 16:45:00'),
('amandawilson', 'Lista de Salud', '2023-08-13 20:10:00');

