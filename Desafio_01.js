class Usuario {
  constructor(nombre, apellido, libros, mascotas) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = [libros];
    this.mascotas = mascotas;
  }
  getFullNombre() {
    return `${this.nombre} ${this.apellido}`;
  }
  addLibro(libro, autor) {
    this.libros.push({ libro: libro, autor: autor });
  };
  addMascota(mascota) {
    this.mascotas.push(mascota);
  }
  countMascotas() {
    return this.mascotas.length;
  }
  getBookNames() {
    return this.libros.map(libro => libro.libro);
  }
}

const usuario1 = new Usuario(
  'Eduardo',
  'Gramajo',
  { libro: `El señor de los anillos`, autor: `J.R.R. Tolkien` },
  [`Parche`]
);

//Muestro datos del "usuario 1" por consola
console.log(usuario1);

// Mostrando los datos de nombre completo
console.log(usuario1.getFullNombre());

//Mostrando la cantidad de mascotas
console.log(usuario1.countMascotas());

//Mostrando los libros
console.log(usuario1.getBookNames());

//Agreogando una nueva mascota
usuario1.addMascota(`Artemisa`);

//Agregando un nuevo libro
usuario1.addLibro(`Sherlock holmes`, `Arhtur Conan Doyle`);

//Muestro datos del "usuario 1" por consola con los datos agregados
console.log(usuario1);

//Mostrando los datos de nombre completo
console.log(usuario1.getFullNombre());

//Muestro la cantidad de mascotas y libros nuevos
console.log(usuario1.countMascotas());
console.log(usuario1.getBookNames());
