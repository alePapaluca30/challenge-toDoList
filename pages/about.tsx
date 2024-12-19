import Link from "next/link";
export default function AboutPage() {
  return (
    <main className="container-about">
      <h1 className="title">Acerca de la Aplicación</h1>
      <p className={"toolsDescription"}>
        Esta aplicación de gestión de tareas permite a los usuarios organizar y
        administrar sus tareas diarias de manera eficiente y sencilla. Algunas
        de sus funcionalidades principales incluyen:
      </p>
      <ul className="features">
        <li>➕ Agregar nuevas tareas a la lista.</li>
        <li>✏️ Editar tareas existentes.</li>
        <li>❌ Eliminar tareas no deseadas.</li>
        <li>🔍 Filtrar tareas completadas o pendientes.</li>
      </ul>

      <h2 className={"toolsTitle"}> 🛠️ Herramientas Utilizadas</h2>
      <p className={"toolsDescription"}>
        Este proyecto fue construido utilizando una serie de tecnologías
        modernas, que me han permitido crear una aplicación robusta y eficiente.
        A continuación, te explico algunas de ellas:
      </p>

      <h3 className={"tool"}>React</h3>
      <p className={"toolDescription"}>
        React es una biblioteca de JavaScript para la construcción de interfaces
        de usuario, que se destaca por su eficiencia en el manejo del estado a
        través de sus hooks. Utilicé React para crear componentes reutilizables
        y manejar el estado de la aplicación de manera eficiente, aprovechando
        hooks como useState y useEffect para la gestión de datos y efectos
        secundarios.
      </p>

      <div className="warning">
        <h2> ⚠️</h2>
        <p className={"toolDescription"}>
          Utilicé el componente Link de Next.js para manejar la navegación entre
          las diferentes páginas de la aplicación. A diferencia de React, que
          normalmente requiere bibliotecas como react-router-dom para
          enrutamiento, Next.js proporciona su propio sistema de enrutamiento
          basado en el sistema de archivos. De esta manera, las rutas se generan
          automáticamente a partir de los archivos dentro de la carpeta pages,
          lo que simplifica el manejo de la navegación. Usar Link de Next.js
          asegura una transición eficiente y optimizada entre las páginas sin
          necesidad de configuraciones adicionales.
        </p>
      </div>

      <h3 className={"tool"}>Next.js</h3>
      <p className={"toolDescription"}>
        Next.js es un framework basado en React que permite la creación de
        aplicaciones web rápidas y optimizadas. Next.js ofrece funcionalidades
        como renderizado del lado del servidor, rutas automáticas y un sistema
        de páginas, lo cual facilita la organización del proyecto y mejora el
        rendimiento de la aplicación.
      </p>

      <h3 className={"tool"}>Context API</h3>
      <p className={"toolDescription"}>
        La Context API de React se utiliza para gestionar el estado global de la
        aplicación. En lugar de pasar datos a través de múltiples niveles de
        componentes, la Context API permite compartir el estado entre cualquier
        componente de la aplicación sin necesidad de "prop drilling".
      </p>

      <h3 className={"tool"}>CSS</h3>
      <p className={"toolDescription"}>
        Para el diseño visual de la aplicación, utilicé CSS, asegurándome de que
        la interfaz sea limpia, moderna y adaptable a diferentes dispositivos.
        Implementé un diseño responsivo utilizando Flexbox y Grid, lo que
        garantiza que la aplicación funcione bien en pantallas grandes y
        pequeñas.
      </p>

      <h3 className={"tool"}>localStorage</h3>
      <p className={"toolDescription"}>
        Para persistir las tareas a través de sesiones, utilicé localStorage
        para almacenar y recuperar las tareas de la lista. Al hacer uso del hook
        useEffect, me aseguré de que las tareas se guarden en el almacenamiento
        local del navegador cada vez que se realice un cambio, y se carguen
        automáticamente cuando la página se recargue. Esto garantiza que las
        tareas persistan incluso después de que el usuario cierre o recargue la
        aplicación, mejorando la experiencia de usuario al mantener los datos
        intactos.
      </p>

      <Link href="/" className={"link"}>
        <h2>Volver a la Todo List</h2>
      </Link>
    </main>
  );
}
