__💻 Simulador de Gestión de Procesos en Memoria RAM__

__📝 Descripción del Proyecto:__    
Este proyecto es un simulador interactivo de gestión de procesos en un sistema operativo con memoria RAM limitada. El objetivo principal es demostrar cómo un sistema operativo maneja la asignación de memoria, la ejecución concurrente de procesos y la gestión de una cola de espera cuando la memoria disponible es insuficiente.

![image alt](https://github.com/BenjaminSk09/Proyecto-1-Sistemas-operativos/blob/d5c4f4c3342de24958576f052ffb341b924292ef/Capturas%20de%20Funcionamiento/Imagen%20principal%20.png)

El simulador permite a los usuarios:  

1) Crear nuevos procesos permitiendole colocarle el nombre que se desee, la memoria RAM que requieren y su duración.

2) Se puede Observar la ejecución concurrente de múltiples procesos.

3) Se visualiza cómo los procesos que exceden la memoria disponible son colocados en una cola de espera.

4) Tambien se puede ver como se libera automáticamente la memoria cuando un proceso finaliza.

5) Monitorear el estado actual de la memoria RAM (disponible y ocupada) y la lista de procesos en ejecución y en cola.

__🚀 Tecnologías Implementadas:  
Este simulador ha sido desarrollado utilizando las siguientes tecnologías web:__

- Lenguajes de Programación:

- HTML5: Para la estructura y el contenido de la interfaz de usuario.

- JavaScript (ES6+): Para la lógica de simulación, gestión de procesos y actualización dinámica de la interfaz.

- Frameworks/Librerías de Estilos:

- Tailwind CSS: Utilizado para el diseño y la estilización de la interfaz de usuario, proporcionando un enfoque de utilidad-first para un desarrollo rápido y responsivo.

__🛠️ Requisitos de Instalación y Uso:  
Este simulador es una aplicación web simple que se ejecuta en el navegador. No requiere de ninguna instalación de software adicional ni dependencias.__ 

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
 - Por ultimo, los procesos en ejecución se eliminaran cuando su duracion llegue a cero, liberando asi memoria para los procesos que estan en espera.

__📷Capturas de pantalla del programa en funcionamiento__

1) Memoria Ram en un estado normal.
![image alt](https://github.com/BenjaminSk09/Proyecto-1-Sistemas-operativos/blob/c29457c683a48a7f2e00f8df2f9e7efd15dea43c/Capturas%20de%20Funcionamiento/Memoria%20Ram%20normal.png) 

2) Memoria Ram Casi llena Sin ningun proceso en cola.
![image alt](https://github.com/BenjaminSk09/Proyecto-1-Sistemas-operativos/blob/c29457c683a 48a7f2e00f8df2f9e7efd15dea43c/Capturas%20de%20Funcionamiento/Memoria%20Ram%20casi%20llena%20.png)

3) Memoria Ram Llena y con procesos en cola que seran asignados cuando haya un espacio disponible.
![image alt](https://github.com/BenjaminSk09/Proyecto-1-Sistemas-operativos/blob/c29457c683a48a7f2e00f8df2f9e7efd15dea43c/Capturas%20de%20Funcionamiento/Memoria%20Ram%20llena%20y%20procesos%20en%20cola.png)


Integrantes del grupo: 

-Esdras Alexander Choc Ajú         Carné: 1990-23-12485
-Henry Daniel Cabrera Estrada      Carné: 1990-23-3718
-Benjamin Bonifacio Sincal Ajú     Carné: 1990-23-11281
-Emerson Estudardo Guzmán Vielman  Carné: 1990-23-3484
