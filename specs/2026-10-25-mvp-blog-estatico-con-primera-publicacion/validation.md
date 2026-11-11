# validation.md

## Objetivo
Validar que el MVP cumple con todos los criterios de aceptación definidos en `requirements.md` y respeta la constitución.

## Validación Automatizada
- [ ] `npm install` completa sin errores críticos.
- [ ] `npx @11ty/eleventy` genera el sitio en `_site/` sin errores.
- [ ] No hay errores de sintaxis en `.eleventy.js`, plantillas `.njk` o CSS.

## Validación Funcional (Manual)
- [ ] **Home**: Carga correctamente, muestra header "Antonio Ugarte", footer minimalista y enlace al artículo.
- [ ] **Artículo**: `/guia-practica-sdd-con-agentes-ia/` renderiza la guía completa con formato legible.
- [ ] **Navegación**: Mínima y funcional.
- [ ] **URLs**: Limpias en `kebab-case`.

## Validación Técnica
- [ ] **Sin JS**: No se carga ningún archivo `.js` por defecto.
- [ ] **CSS**: Solo CSS vanilla desde `src/css/style.css`.
- [ ] **Semántica**: Uso correcto de `<header>`, `<main>`, `<article>`, `<footer>`. Un solo `<h1>` por vista.
- [ ] **Markdown**: El contenido proviene de la guía original y se muestra correctamente.

## Validación SEO Mínimo
- [ ] `<html lang="es">`
- [ ] `<title>` único por página
- [ ] `<meta name="description">` presente
- [ ] `<link rel="canonical">` presente
- [ ] `og:title`, `og:description`, `og:type`, `og:url` presentes
- [ ] URLs limpias

## Validación de Constitución
- [ ] Respeta `specs/mission.md`
- [ ] Respeta `specs/tech-stack.md`
- [ ] Respeta `specs/roadmap.md`
- [ ] Estructura lista para añadir más artículos en el futuro

## Definition of Done
- [ ] Todo lo anterior está marcado como completado.
- [ ] Sitio funcional localmente (`_site/` generado correctamente).
- [ ] Sin desviaciones del plan aprobado.
- [ ] Listo para pasar a Fase 3.
