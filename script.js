function generarCodigo(accion) {
    let codigo = '';
    if (accion === 'crearTabla') {
        codigo = `CREATE TABLE ejemplo (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    edad INT NOT NULL
);`;
    } else if (accion === 'insertarDatos') {
        codigo = `INSERT INTO ejemplo (nombre, edad) VALUES ('Juan', 30);`;
    } else if (accion === 'crearLlavePrimaria') {
        codigo = `ALTER TABLE ejemplo ADD PRIMARY KEY (id);`;
    } else if (accion === 'crearLlaveForanea') {
        codigo = `ALTER TABLE ejemplo ADD CONSTRAINT fk_nombre FOREIGN KEY (nombre_id) REFERENCES otra_tabla(id);`;
    } else if (accion === 'crearBaseDatos') {
        codigo = `CREATE DATABASE mi_base_de_datos;`;
    } else if (accion === 'seleccionarDatos') {
        codigo = `SELECT * FROM ejemplo;`;
    } else if (accion === 'actualizarDatos') {
        codigo = `UPDATE ejemplo SET nombre = 'Carlos' WHERE id = 1;`;
    } else if (accion === 'eliminarDatos') {
        codigo = `DELETE FROM ejemplo WHERE id = 1;`;
    }
    document.getElementById('codigo').textContent = codigo;
}
