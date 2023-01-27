Pasos para instalación y ejecución del proyecto:

Para el desarrollo de este proyecto se utilizaron
las siguientes dependencias en sus respectivas versiones,
se recomienda contar con ellas para su correcto funcionamiento:

1. npm versión 8.15.0
2. npm react version 18.2.0
3. control de versiones git, uso de comandos git

Ejecución:

1. Clonar este repositorio: git clone https://github.com/alecat1/prueba_novopayment.git
2. La rama master se encuentra actualizada con el último desarrollo de la rama de "develop".
3. Verificar con el comando "git status" que se encuentre en la rama master para visualizar los últimos cambios.
4. Instalar dependencias con el comando "npm i"
5. Ejecutar el proyecto con el comando "npm start"

¿Qué se hizo?

1. Se creó un componente "Header", haciendo uso del componente "Box" que nos ofrece la librería Material UI,
ya que este cumple la función de un <div> pero este tiene la capacidad de envolver un componente mediante propiedades.
2. Se creó un componente "Footer" siguiendo la misma estructura que en el componente "Header".
3. Se creó un componente "Navbar" el cual contiene la barra de menú ubicada en la parte superior.
Para ello se utilizó el componente "Toolbar" de Material UI, el cual nos proporciona el menú, además
se hace uso de la librería Framer Motion para proporcionar la ilusión de despliegue de las opciones del menú.
la ventaja de utilizar esta librería es que puedes hacer uso de diferentes animaciones, a través de propiedades
sencillas.
Para la lectura del archivo .json se utiliza la función .map la cual se encargaba de ir leyendo la key de cada elemento
traer el "name" o título y verificar si dicho elemento contenía "hijos" o sub menús. Si el elemento tenía un sub menú
se recorría nuevamente con la función .map y se extraía en "name" o título del elemento, a medida que esto ocurre
se crea una <li> con el título del elemento y se agregaba a una <ul> principal. Finalmente, se añaden dos funciones
para detectar cuando el mouse pasa por encima de una opción del menú y así desplegarla, lo mismo para cerrarla.
Para terminar, se crea un componente llamado "MainPage" dónde se hace el llamado a los 3 componentes anteriores,
y se lee el archivo .json, el cual se pasa como propiedad al componente "Navbar". Este componente principal se agrega
al componente padre "App".