## Proyecto Marvel Store

Esta es una tienda de juegos, comics, funcos, dinamica que simula una app para compras online

## Dependencias

- react: aplicacion creada con create-react-app
- fortawesome: para incorporar el icono de carrito de compras, y otros iconos a futuro.
- react bootstrap: para manejar los estilos del proyecto
- react-router-dom: para crear la SPA con navegabilidad sin refrescar la pantalla
- build: Se corrio net run build para luego subir la App a Netlify

## Implementaciones

- Se creo un alert personalizado que se utiliza para toda la mensajeria de la APP incluido la orden de compra
  (MessageAlert)

## Demo Testing

- Se subio a NETLIFY el deploy del proyecto:

[Ir a la APP] ()

## Herramientas

IMPORTADOR DE JSON

- si tienes un archivo JSON para importar a Netlify, debes usar la siguiente sentencia (p.e. en un boton):
  const data = require('../../../Products.json')
  const incorp = () => {data.map(prod => db.collection('items').add(prod))};

## NOTAS DEL AUTOR

- Por cuestiones personales se deja el archivo getProducts.jsx y Products.JSON, ambos sin utilidad.
