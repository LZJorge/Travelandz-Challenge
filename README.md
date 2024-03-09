# Desafío Técnico
> Desafío tecnico Travelandz con Trasfers API 

## Tabla de contenido
- [Desafío Técnico](#desafío-técnico)
  - [Tabla de contenido](#tabla-de-contenido)
  - [Tecnologías](#tecnologías)
  - [Cómo usar](#cómo-usar)
    - [API:](#api)
      - [Endpoints:](#endpoints)
    - [APP:](#app)
  - [Consideraciones](#consideraciones)
  - [Estado](#estado)


## Tecnologías

- ![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
- ![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)

## Cómo usar

Primero que todo, en las carpetas `API` y `APP` se encuentra un archivo `.env.example`, del cual se deberan guiar y llenar los valores en cada uno de los campos que se encuentran en ese archivo, si alguno falta, el programa arrojará un error.

### API:
Para iniciar la API siga los siguientes pasos:

1. Abra un terminal en la carpeta `API`

```bash
# 2. Instalar las dependencias
npm install
```

```bash
# 3. Ejecutar el comando para iniciar el modo desarrollo
npm run dev
```

4. La dirección `http://localhost:{el puerto que definiste}` se encontrará disponible para realizar solicitudes HTTP a ella

#### Endpoints:
`/api/transfer/availability`

```json
POST {{host}}/api/transfer/availability
content-type: application/json

{
  "from": {
    "type": "ATLAS",
    "code": "265"
  },
  "to": {
    "type": "IATA",
    "code": "PMI"
  },
  "outboundDate": "2024-04-17T12:15:00",
  "inboundDate": "2024-04-25T20:00:00",
  "occupancy": {
    "adults": 2,
    "children": 0,
    "infants": 0
  }
}
```

```json
POST {{host}}/api/transfer/request
content-type: application/json

{
  "holder": { // Holder se cambiaría por el usuario que inició la sesión
    "name": "John",
    "surname": "Doe",
    "email": "john.doe@hotelbeds.com",
    "phone": "+16543245812"
  },
  "transfers": [
    {
      "rateKey": "DEPARTURE|ATLAS|265|IATA|PMI|2024-04-17|09:55|2024-04-17|12:15|2~0~0||4|||||1|PRVT||CR|STND|37.36||||43|PMI|SIMPLE|9a21b233860c2ce0740c51629018bafa|1275900|R|6c283a51234f840091c29b61fdb0a8cf",
      "transferDetails": [
        {
          "type": "FLIGHT",
          "direction": "DEPARTURE",
          "code": "XR1234"
        }
      ]
    }
  ],
  
  "clientReference": "BOSTON#12-203#456754"
}
```


### APP:
Para iniciar la APP siga los siguientes pasos:

1. Abra un terminal en la carpeta `APP`

```bash
# 2. Instalar las dependencias
npm install
```

```bash
# 3. Ejecutar el comando para iniciar el modo desarrollo
npm run dev
```

4. Ya puedes acceder a la ruta `http://localhost:5173` y ver la app

## Consideraciones

1. El programa NO está completo
2. El programá NO continúa desarrollandose
3. Para su desarrollo se usó `pnpm` en lugar de `npm`, sin embargo no debería haber problemas al usar `npm`
4. Algunos navegadores bloquean las peticiones HTTP de axios a ubicaciones no seguras (como el localhost), debe buscar como cambiar esta opción en el navegador que se encuentre utilizando

## Estado
> INCOMPLETO: Falta de tiempo para realizar el programa.