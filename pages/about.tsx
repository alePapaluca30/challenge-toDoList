// pages/about.js o app/about/page.js
import Link from "next/link";

export default function AboutPage() {
  return (
    <main
      style={{
        padding: "2rem",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
      }}
    >
      <h1>Acerca de la Aplicación</h1>
      <p>
        Esta aplicación permite gestionar una lista de tareas, proporcionando
        una experiencia intuitiva para que los usuarios puedan:
      </p>
      <ul style={{ textAlign: "left", margin: "0 auto", maxWidth: "600px" }}>
        <li>➕ Agregar nuevas tareas a la lista.</li>
        <li>✏️ Editar tareas existentes.</li>
        <li>❌ Eliminar tareas no deseadas.</li>
        <li>🔍 Filtrar tareas completadas o pendientes.</li>
      </ul>
      <p>
        Todo esto ha sido desarrollado con tecnologías modernas como{" "}
        <strong>React</strong>,<strong>Context API</strong> para la gestión del
        estado y un diseño personalizado utilizando
        <strong>CSS</strong>.
      </p>
      <Link href="/" style={{ color: "blue", textDecoration: "underline" }}>
        Volver a la página principal
      </Link>
    </main>
  );
}
