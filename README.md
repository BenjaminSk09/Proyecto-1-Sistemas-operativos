🛠️ Requisitos de Instalación y Uso
Este simulador es una aplicación web simple que se ejecuta en el navegador. No requiere de ninguna instalación de software adicional ni dependencias.

🚀 Cómo Usar el Simulador
Clona o descarga el repositorio:

Bash

git clone https://github.com/tu-usuario/nombre-del-repositorio.git
Si no usas Git, puedes descargar el archivo ZIP del repositorio directamente desde GitHub.

Abre el archivo index.html:

Navega a la carpeta del proyecto que acabas de descargar.

Haz doble clic en el archivo index.html. Se abrirá automáticamente en tu navegador web predeterminado (Chrome, Firefox, Edge, etc.).

Crea y ejecuta procesos:

Usa el formulario "Crear Nuevo Proceso" para añadir nuevos procesos.

Introduce un nombre, la memoria que el proceso requiere (en MB) y su duración (en segundos).

Haz clic en el botón "Agregar Proceso".

Observa la simulación:

Verás el estado de la Memoria RAM en tiempo real.

Los procesos que se asignan a la RAM aparecerán en la sección "Procesos en Ejecución".

Si no hay memoria disponible, los procesos se colocarán en la "Cola de Espera" hasta que se libere espacio.

Los procesos en ejecución se eliminarán automáticamente cuando su duración llegue a cero, liberando memoria para los procesos en espera.







💻 Simulador de Gestión de Procesos en Memoria RAM



📝 Descripción del Proyecto

Este proyecto es un simulador interactivo de gestión de procesos en un sistema operativo con memoria RAM limitada. El objetivo principal es demostrar cómo un sistema operativo maneja la asignación de memoria, la ejecución concurrente de procesos y la gestión de una cola de espera cuando la memoria disponible es insuficiente.



El simulador permite a los usuarios:



Crear nuevos procesos permitiendole colocarle el nombre que se desee, la memoria RAM que requieren y su duración.



Se puede Observar la ejecución concurrente de múltiples procesos.



Se visualiza cómo los procesos que exceden la memoria disponible son colocados en una cola de espera.



Tambien se puede ver como se libera automáticamente la memoria cuando un proceso finaliza.



Monitorear el estado actual de la memoria RAM (disponible y ocupada) y la lista de procesos en ejecución y en cola.



🚀 Tecnologías Implementadas

Este simulador ha sido desarrollado utilizando las siguientes tecnologías web:



Lenguajes de Programación:



HTML5: Para la estructura y el contenido de la interfaz de usuario.



JavaScript (ES6+): Para la lógica de simulación, gestión de procesos y actualización dinámica de la interfaz.



Frameworks/Librerías de Estilos:



Tailwind CSS: Utilizado para el diseño y la estilización de la interfaz de usuario, proporcionando un enfoque de utilidad-first para un desarrollo rápido y responsivo.



Requisitos de Instalación y Uso

Este simulador es una aplicación web simple que se ejecuta en el navegador. No requiere de ninguna instalación de software adicional ni dependencias.



🛠️ Requisitos de Instalación y Uso

Este simulador es una aplicación web simple que se ejecuta en el navegador. No requiere de ninguna instalación de software adicional ni dependencias.



🚀 Cómo Usar el Simulador

1. Clona o descarga el repositorio:



https://github.com/BenjaminSk09/Proyecto-1-Sistemas-operativos.git



Si no se utiliza Git, Puedes descargar el archivo ZIP del repositorio directamente desde GitHub.



2. Abre el archivo Index.html

 - Navega a la carpeta del proyecto

 - Haz doble clic en el archivo Index.html. El proyecto se abrira automaticamente en el navegador predeterminado.



3. Crea y ejecuta procesos:

 - Utiliza el formulario para "Crear un nuevo proceso" y añadir nuevos procesos

 - Ingresa un nombre, la memoria que el proceso requiere y la duracion del proceso.

 - Haz clic en el boton "Agregar Proceso".



4. Observa la simulación:

 - Podras visualizar el estado de la Memoria Ram en tiempo real.

 - Los procesos que se asignan a la Ram aparecerán en la seccion de "Procesos en Ejecución".

 - Si no hay memoria disponible los procesos se colocarán en la "Cola de Espera" hasta que se libere la memoria.

 - Por ultimo, los procesos en ejecución se eliminaran cuando su duracion llegue a cero, liberando asi memoria para los procesos que estan en espera. esta es la info que va en mi readme pero quisiera que se viera mas estetica en github como se hace eso?



Para que tu README.md se vea más estético y profesional en GitHub, puedes usar una combinación de emojis, encabezados, negritas y listas. Aquí te presento una versión mejorada de tu contenido con un formato más atractivo.

🖥️ Simulador de Gestión de Procesos en Memoria RAM
Este proyecto es un simulador interactivo que demuestra cómo un sistema operativo gestiona los procesos que compiten por la memoria RAM. La aplicación permite visualizar el ciclo de vida de los procesos, desde su creación hasta su finalización, incluyendo la asignación de memoria y el manejo de una cola de espera.

✨ Características
Creación de procesos: Puedes crear nuevos procesos personalizando su nombre, memoria requerida y duración.

Gestión de la RAM: Observa en tiempo real la memoria RAM disponible y ocupada.

Cola de espera: Los procesos que no caben en la RAM se envían automáticamente a una cola de espera.

Finalización de procesos: La memoria se libera de manera automática cuando un proceso termina su ejecución, permitiendo que nuevos procesos se pongan en marcha.

Visualización clara: Un panel de control intuitivo muestra el estado de los procesos en ejecución y en la cola de espera.

💻 Tecnologías
El simulador está construido con tecnologías web estándar y no requiere de un servidor o compilación externa.

HTML5: Estructura de la interfaz de usuario.

JavaScript (ES6+): Lógica de simulación y manipulación del DOM.

Tailwind CSS: Diseño y estilos responsivos.

🚀 Cómo Usar el Simulador
Este simulador se ejecuta directamente en tu navegador. Sigue estos sencillos pasos para empezar:

Clona el repositorio:

Bash

git clone https://github.com/BenjaminSk09/Proyecto-1-Sistemas-operativos.git
Si prefieres, también puedes descargar el archivo .zip del repositorio directamente desde GitHub.

Abre el proyecto:

Navega a la carpeta del proyecto.

Haz doble clic en el archivo index.html.

El simulador se abrirá automáticamente en tu navegador web predeterminado.

Crea un nuevo proceso:

Usa el formulario "Crear Nuevo Proceso" para ingresar los datos del proceso: nombre, memoria (en MB) y duración (en segundos).

Haz clic en "Agregar Proceso" para que inicie la simulación.

Observa la simulación:

Monitorea el "Estado de la Memoria RAM" y la barra de progreso.

Observa cómo los procesos se mueven entre "Procesos en Ejecución" y la "Cola de Espera".

Los procesos finalizan solos, liberando la memoria para que otros puedan ejecutarse.