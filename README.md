# Portafolio Web — Henry Monroy

Portafolio personal estático construido con **HTML, CSS y JavaScript** puros, sin frameworks ni proceso de build.

## Estructura

```
index.html      Página única (Hero, Sobre mí, Proyectos, Footer)
css/styles.css  Estilos, tema claro/oscuro y responsive
js/main.js      Menú móvil, toggle de tema y animaciones al hacer scroll
assets/         Imágenes y favicon
```

## Desarrollo local

No hay dependencias. Sirve el directorio con cualquier servidor estático:

```bash
python3 -m http.server 8000
# o
npx serve .
```

Abre [http://localhost:8000](http://localhost:8000).

## Despliegue en GitHub Pages

El workflow `.github/workflows/deploy.yml` publica el sitio automáticamente en cada push a la rama `Miport2`, sin paso de build.

Requisito: en **Settings → Pages** del repositorio, selecciona **Source: GitHub Actions**.

El sitio queda disponible en **[https://gguasapoo.github.io/MiPortafolio2/](https://gguasapoo.github.io/MiPortafolio2/)**. Todas las rutas de assets son relativas, por lo que funciona tanto en el subpath de Pages como en local.
