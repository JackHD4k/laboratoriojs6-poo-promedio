class Alumno {
  constructor(codigo, nombre, nota1, nota2, nota3) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.nota1 = nota1;
    this.nota2 = nota2;
    this.nota3 = nota3;
  }

  promedio() {
    return (this.nota1 * 0.15 + this.nota2 * 0.20 + this.nota3 * 0.25) / 3;
  }

  condicion() {
    if (this.promedio() >= 12) {
      return "Aprobado";
    } else {
      return "Reprobado";
    }
  }

  obsequio() {
    if (this.promedio() >= 17) {
      return "Obsequio";
    } else {
      return "No obsequio";
    }
  }
}

document.getElementById("promedioFormulario").addEventListener("submit", function (event) {
  event.preventDefault();

  const codigo = document.getElementById("code").value;
  const nombre = document.getElementById("name").value;
  const nota1= document.getElementById("nota1").value;
  const nota2= document.getElementById("nota2").value;
  const nota3= document.getElementById("nota3").value;

  const alumno = new Alumno(codigo, nombre, nota1, nota2,nota3);

  alert("Su promedio es: " + alumno.promedio() + "\n" + "Condicion: " + alumno.condicion() + "\n" + "Obsequio: " + alumno.obsequio());
});