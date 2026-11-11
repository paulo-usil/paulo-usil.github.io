# plan.md

## Objetivo Técnico
Implementar el MVP siguiendo estrictamente `requirements.md`, `mission.md` y `tech-stack.md`. Usar Eleventy con estructura clara, Markdown-first, sin JS por defecto y SEO mínimo pragmático.

## Estructura Propuesta
```text
blog/
├── .eleventy.js        # Configuración de Eleventy
├── package.json        # Dependencias y scripts
├── src/
│   ├── _includes/
│   │   └── base.njk    # Layout base con header/footer/SEO
│   ├── css/
│   │   └── style.css   # Estilos vanilla minimalistas
│   ├── index.njk       # Home
│   └── posts/
│       └── guia-practica-sdd-con-agentes-ia.md  # Post con front-matter
└── GUIA_PRACTICA_SDD_CON_AGENTES_IA.md  # Mantener en raíz (fuente)
```

> Nota: El archivo original `GUIA_PRACTICA_SDD_CON_AGENTES_IA.md` se mantiene en la raíz. Para publicarlo, se copiará dentro de `src/posts/` con front-matter apropiado para Eleventy.

## Decisiones
- Seguir criterio usando convenciones de `tech-stack.md` (Eleventy + HTML + CSS vanilla).
- Diseño minimalista puro: header con "Antonio Ugarte", footer minimalista. Sin tagline extra.
- SEO pragmático tal como se acordó.

## Grupos de Tareas (Orden de ejecución)

### GRUPO 1: Inicialización
- [ ] **1.1** Crear `package.json` con `@11ty/eleventy` como devDependency y scripts (`build`, `serve`).
- [ ] **1.2** Crear `.eleventy.js` con configuración mínima (input: `src`, output: `_site`, passthrough para `css/`, markdown configurado).
- [ ] **1.3** Añadir `.gitignore` (`node_modules/`, `_site/`).

### GRUPO 2: Layout, estilos y home
- [ ] **2.1** Crear `src/_includes/base.njk` con HTML5 semántico, `<html lang="es">`, head con metadatos SEO mínimos (title, description, canonical, OG básico), header, `<main>`, footer.
- [ ] **2.2** Crear `src/css/style.css` con estilos minimalistas (tipografías del sistema, espaciados, legibilidad para código/listas).
- [ ] **2.3** Configurar passthrough en `.eleventy.js` para copiar `src/css/` a `_site/css/`.
- [ ] **2.4** Crear `src/index.njk` extendiendo `base.njk`. Mostrar título minimalista y enlace al primer artículo.

### GRUPO 3: Publicar primera guía como post
- [ ] **3.1** Crear `src/posts/`
- [ ] **3.2** Copiar `GUIA_PRACTICA_SDD_CON_AGENTES_IA.md` a `src/posts/guia-practica-sdd-con-agentes-ia.md` con front-matter (`layout: base.njk`, `title`, `description`, `permalink: /guia-practica-sdd-con-agentes-ia/`).
- [ ] **3.3** Asegurar que el contenido sea legible y mantiene la estructura original.
- [ ] **3.4** Verificar que genere URL limpia en `kebab-case`.

### GRUPO 4: Ajustes SEO y pulido
- [ ] **4.1** Añadir lógica mínima en `base.njk` para título único por página/artículo.
- [ ] **4.2** Añadir `meta name="description"`, `rel="canonical"`, y OG mínimo.
- [ ] **4.3** Asegurar un solo `<h1>` por vista y estructura semántica.
- [ ] **4.4** Revisar que no se inyecta JavaScript.

### GRUPO 5: Verificación
- [ ] **5.1** Ejecutar `npm install`
- [ ] **5.2** Ejecutar build con Eleventy y revisar `_site/`
- [ ] **5.3** Comprobar home, artículo, estilos, metadatos.

## Notas
- Mantener todo lo más simple posible. Sin dependencias extra.
- Seguir naming `kebab-case`.
- Respetar estrictamente lo prohibido en `tech-stack.md`.
