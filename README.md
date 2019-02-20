# NodeJS-Express-Api
A little Api demo using Express.

## Ejecutar
Para lanzar el servidor, tendrás que ejecutar "node server.js" dentro de la carpeta de Movies.

## Funcionalidad
(PARA COMPROBARLO, EJECUTARLO EN LA APLICACION POSTMAN
En estos momentos, lo único que podemos hacer con el servidor es:
 - Recoger una lista de películas: GET http://localhost:8080/movies/
 - Recoger una lista de películas pero solo por su nombre: GET http://localhost:8080/movies/tittle
 - Modificar una película: PUT GET http://localhost:8080/movies/update (En el body introducimos el titulo de la película
 que queremos editar, tal que así: {"tittle":"nombredelapelicula"})
 - Eliminar una película: DELETE http://localhost:8080/movies/delete (En el body introducimos el titulo de la película
 que queremos eliminar, tal que así: {"tittle":"nombredelapelicula"})
 
 ## Resumen
 Este repositorio tiene el fin de que las personas que nunca hayan creado una api en node entiendan un funcionamiento sencillo
 de como crear las funcionalidades más básicas. Además, el código se encuentra comentado para explicar qué hace cada cosa.
 
