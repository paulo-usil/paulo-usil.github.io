# requirements.md

## Objetivo
Desarrollar el MVP del blog estático con [Eleventy (11ty)](https://www.11ty.dev/), minimalista, rápido y profesional. Publicar el archivo `GUIA_PRACTICA_SDD_CON_AGENTES_IA.md` ubicado en la raíz como la primera entrada del blog, con lo mínimo necesario de SEO para que sea encontrable al publicarlo. La estructura debe quedar preparada para añadir más artículos en el futuro.

## Alcance (SCOPE)
- [ ] **Configuración de Eleventy**: Inicializar el proyecto con Eleventy siguiendo las convenciones de `specs/tech-stack.md`.
- [ ] **Layout base**: Crear un layout reutilizable con `header`, `footer` y área de contenido.
- [ ] **Home / Index**: Crear página principal minimalista con navegación mínima hacia la primera publicación.
- [ ] **Vista de artículo**: Crear plantilla para renderizar artículos en Markdown con buena legibilidad.
- [ ] **Pipeline Markdown**: Configurar Eleventy para procesar archivos `.md`.
- [ ] **Primera publicación**: Tomar `GUIA_PRACTICA_SDD_CON_AGENTES_IA.md` de la raíz y publicarlo como el primer post del blog.
- [ ] **Estilos minimalistas**: CSS vanilla, sin preprocesadores, tipografías del sistema y enfocado a legibilidad.
- [ ] **SEO mínimo**: Implementar metadatos básicos por página/artículo (`lang="es"`, título único, `meta description`, `rel="canonical"`, Open Graph mínimo: `og:title`, `og:description`, `og:type`, `og:url`), HTML semántico, un solo `<h1>` por vista y URLs limpias en `kebab-case`.

## Fuera de Alcance (OUT OF SCOPE)
- Comentarios
- Buscador
- Tags, categorías o taxonomías complejas
- Modo oscuro (dark mode)
- Newsletter
- Analytics / trackers
- RSS feed
- JSON-LD complejo
- Animaciones
- JavaScript innecesario
- CMS o integraciones externas
- Cualquier UI kit o framework pesado

## Criterios de Aceptación
- [ ] El sitio se genera correctamente con Eleventy de forma local.
- [ ] Existe un `header` y `footer` minimalistas presentes en home y en la vista de artículo.
- [ ] La guía `GUIA_PRACTICA_SDD_CON_AGENTES_IA.md` es visible y completamente legible como artículo.
- [ ] Las URLs son limpias en `kebab-case`.
- [ ] Se utilizan únicamente HTML, CSS vanilla y sin JavaScript cargado por defecto.
- [ ] Metadatos SEO mínimos están presentes (title, description, canonical, OG básico).
- [ ] La estructura es lo suficientemente genérica para añadir nuevos archivos `.md` como posts en el futuro sin un refactor masivo.
- [ ] Cumple con los principios de `specs/mission.md` y las reglas de `specs/tech-stack.md`.
