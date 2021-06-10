# 📣 Post-It-fullstack


📦 Este repositorio será responsable de la implementación del proyecto de Web Avanzada. Consiste en el desarrollo de una red social en la que se compartan posts, la cual, ofrezca un espacio para que los usuarios expresen sus opiniones. Contiene sugerencias de posts con base a los hashtags que posean posts en común. Paginación desde el back, regresión en la búsqueda de posts. Incluye un login con cifrado de contraseña con salt y el algoritmo pbkdf2 con validación extensa desde el back, como también, funcionalidades otorgadas de acuerdo al roles. El administrador tiene la capacidad de cambiar contraseñas y eliminar usuarios con rol "común". El rol común puede resetear su contraseña. Este proyecto se desarrolló utilizando el stack MERN (MongoDB, ExpressJS, React y NodeJS).


![Feed](https://github.com/juan17castillo/post-it-fullstack/blob/master/pictures/feed.png)
![Dashboard](https://github.com/juan17castillo/post-it-fullstack/blob/master/pictures/Post-it.png)
![Details](https://github.com/juan17castillo/post-it-fullstack/blob/master/pictures/post-details.png)

#### Figma Mockups: https://www.figma.com/file/qVqSSJNn4EZJQ6DvDUEsCl/Post-it
#### Heroku backend deployment: https://postit-juan17castillo.herokuapp.com/
#### Netlify frontend deployment: https://postit-juan17castillo.netlify.app/

## Instalación

👨‍🔧 Usa esta línea para agregar los Node modules (si tiene npm):

```bash
npm install
```

## Ejecutar proyecto


👨‍💻 Para ejecutar el proyecto, ingresa esta línea en la terminal:

```bash
npm start
```

## Arquitectura

![Arquitecture](https://github.com/juan17castillo/post-it-fullstack/blob/master/pictures/arquitecture.png)

## Flujo de estados en Front

![Front](https://github.com/juan17castillo/post-it-fullstack/blob/master/pictures/flux-front.png)

## 👨‍🔬 El proceso

### 📝 Regístrate

El formulario de inicio de sesión se encarga de crear un usuario después de realizar comprobaciones en la base de datos noSQL Atlas. Se genera un token correspondiente a una hora y la contraseña se cifra mediante la api criptográfica de NodeJS; Crypto. La sal se genera con 16 bytes aleatorios de extensión y luego se anida un "$" con la clave derivada generada por el algoritmo Función de derivación de clave basada en contraseña 2 (PBKDF2).

### 🔑 Inicia sesión
El login se encarga de proporcionar un inicio de sesión de usuario después de realizar comprobaciones en la base de datos noSQL Atlas. Se genera un token correspondiente a una hora y se toma la sal de la contraseña almacenada en la base de datos, luego se almacena el hash en otra variable y se ejecuta el algoritmo Función de derivación de clave 2 basada en contraseña (PBKDF2) con la contraseña descompuesta.

![Sign in](https://github.com/juan17castillo/post-it-fullstack/blob/master/pictures/login.png)

### 🧪 Acerca del PBKDF2
Es una función unidireccional diseñada para crear una salida corta de tamaño fijo a partir de una entrada determinada. En el caso del hash de la contraseña, la entrada sería la contraseña y la sal. El tamaño de la sal y el recuento de iteraciones se consideran comúnmente parámetros de configuración; ambos, por supuesto, influyen en la salida del hash de la contraseña. (Bodewes, 2016). Para su funcionamiento requiere la contraseña (secreta) en texto plano, un sal recomendado de 16 bits aleatorios, número de iteraciones del algoritmo, longitud de la clave y el compendio, en este caso, sha512.

![Change password](https://github.com/juan17castillo/post-it-fullstack/blob/master/pictures/change-password.png)

### 🚧 Sobre los roles
Los usuarios tienen dos roles. Un rol común que se crea a través de la plataforma y que solo tiene acceso a la visualización de última conexión, y a la reasignación de contraseña. El otro papel; administrador, solo es administrado por una cuenta. Tiene permisos para eliminar usuarios comunes, cambiar su contraseña y de otros usuarios comunes. Ambos roles pueden interactuar con los posts.

![Delete user](https://github.com/juan17castillo/post-it-fullstack/blob/master/pictures/delete.png)

![Flow](https://github.com/juan17castillo/post-it-fullstack/blob/master/pictures/flow.png)

### 🐛🔍️ Dificultades
Se utilizó una función de API síncrona, criptografía. En la primera instancia, traté de usar la versión asincrónica que esperaba una devolución de llamada pero, quizás, debido a las condiciones de rendimiento, la asignación a la variable se ejecutó primero cuando se llamó desde el frente, por lo que constantemente terminaba en "indefinido" el cuerpo de solicitud de la petición. Por tanto, se optó por una versión síncrona y con menor número de iteraciones. El manejo de estados mediante Redux representó un reto pues también utilicé por primera vez Redux Thunk, una variación de la herramienta mencionada. Las gráficas representadas mediante la dependencia React-chartjs-2 aún presentan dificultades si se recarga la página.

### 🎓 Conclusiones
Es una experiencia gratificante haber realizado este proyecto solo porque pude darme cuenta de todos los aspectos que involucraba. Sin duda, la seguridad es un pilar fundamental para que nuestro sistema / plataforma represente o inspire confianza y tranquilidad de que, como usuario final, puedo estar protegido ya que alguien como un programador se ha encargado de cuidar la mayor cantidad de vulnerabilidades posibles en el código. NodeJS ofrece facilidades para desarrollar rápidamente una API sin demasiado código "boiler plate" por lo que fue una elección pertinente para la dimensión del proyecto. En el apartado técnico, PBKDF2 es una alternativa interesante y bastante académica de explorar porque en mi opinión, existen formas de cifrado más sencillas en cuanto a implementación que pueden cumplir la misma tarea. Incluso el mercado tiende a dejar los propios logins de la plataforma para pasar a utilizar las apis de grandes empresas como Google OAuth, Facebook, entre otras.

### ✉️ Contribuciones
No dudes en enviarme un mensaje si ves algo que cambiar o contribuir.
