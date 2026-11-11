# tech-stack.md

## Principios
- **Rendimiento primero:** Priorizar HTML estático, CSS mínimo y cero o casi cero JavaScript.
- **Markdown como fuente de verdad:** Todo artículo debe poder escribirse en Markdown.
- **Simplicidad ante complejidad:** Si una librería no es estrictamente necesaria para cumplir el MVP, NO se añade.
- **Preparado para crecer:** Estructura lo suficientemente genérica para añadir más posts en el futuro.

## Tecnologías Obligatorias
| Tecnología | Razón |
|---|---|
| [Eleventy (11ty)](https://www.11ty.dev/) | Generador estático Markdown-first, sin JS por defecto, liviano, ideal para blogs minimalistas. |
| [Node.js](https://nodejs.org/) | Requerido para ejecutar Eleventy y el tooling del proyecto. |
| [Markdown](https://www.markdownguide.org/) | Para escribir y publicar artículos. El archivo `GUIA_PRACTICA_SDD_CON_AGENTES_IA.md` debe ser la primera publicación. |
| [HTML + CSS puro](https://developer.mozilla.org/) | Sin frameworks de UI pesados. Estilos minimalistas, propios y mantenibles. |

## Tecnologías Prohibidas / A Evitar
| Tecnología | Razón |
|---|---|
| Frameworks SPA pesados (Next.js con SSR/CSR excesivo, Nuxt SPA, etc.) | Innecesario para un blog estático. Va en contra del objetivo de rendimiento. |
| UI kits gigantes (Tailwind con configuración excesiva, Bootstrap, Chakra, MUI) | Añaden peso innecesario. Si se llega a usar CSS, debe ser minimalista y deliberado. |
| Librerías de analítica invasivas / trackers pesados | No se requiere por ahora. Evitar todo lo que perjudique el rendimiento. |
| CMS headless complejo | El contenido vive en archivos Markdown dentro del repositorio. Mantenerlo simple. |
| Dependencias para animaciones complejas | Descartar. Solo agregar si hay una razón de UX irrefutable y justificada. |

## Convenciones
| Aspecto | Convención |
|---|---|
| Estructura | Seguir convenciones claras de Eleventy (`src/`, `_includes/`, `posts/` o equivalente). Mantenerlo lo más plano posible. |
| Naming | `kebab-case` para archivos, carpetas y URLs. |
| Contenido | Los artículos irán en formato Markdown. El primer artículo debe provenir del archivo `GUIA_PRACTICA_SDD_CON_AGENTES_IA.md` ubicado en la raíz. |
| Layout | Minimalista con **header**, **footer** y área de contenido. Enfocado a legibilidad (tipografías del sistema o lo más livianas posible). |
| Estilos | CSS vanilla en un archivo único o lo estrictamente necesario. Sin preprocesadores innecesarios. |
| Git | Ramas por feature siguiendo el flujo SDD. Commits claros y descriptivos. |
| JavaScript | Evitarlo. Solo agregar si hay una razón de UX irrefutable y justificada. |

## Adicional
- **Mobile first:** El diseño debe ser responsive con enfoque mobile first. Usar breakpoints mínimos y únicamente cuando sea necesario para mejorar la legibilidad en pantallas mayores.

## Convenciones adicionales
| Aspecto | Convención |
| --- | --- |
| Responsive | **Mobile first.** El diseño debe partir de estilos para móviles. Usar breakpoints mínimos y únicamente cuando sea necesario para mejorar la legibilidad en pantallas mayores.
