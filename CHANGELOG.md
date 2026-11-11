# Changelog

## [1.1.0] - 2026-11-10

### Añadido
- Alta automática de posts: `src/posts/posts.json` hereda `layout`, `ogType`, `tags` y `permalink` a todos los `.md` de `src/posts/`
- La lista del blog (`index.njk`) se genera sola desde `collections.posts` (más recientes primero)
- URL de cada post derivada del nombre del archivo (`page.fileSlug`)

### Cambiado
- Migración a Eleventy 3 con configuración ESM (commits `ba2928b`, `e0f3c54`)
- Front-matter de posts reducido a `title` y `description`; el resto es automático

## [1.0.0] - 2026-10-25

### Añadido
- Constitución del proyecto en `specs/` (`mission.md`, `tech-stack.md`, `roadmap.md`)
- Feature MVP: Blog estático con Eleventy
- Layout base minimalista con header "Antonio Ugarte", footer
- Home con enlace a la primera publicación
- Primera publicación: `GUIA_PRACTICA_SDD_CON_AGENTES_IA.md` renderizada como artículo
- Estilos CSS vanilla, diseño mobile first
- SEO mínimo: `lang="es"`, title único, meta description, canonical, Open Graph básico
- Estructura lista para añadir más artículos
- Configuración de Eleventy sin JavaScript por defecto
