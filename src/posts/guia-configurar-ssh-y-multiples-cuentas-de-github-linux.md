---
title: "Cómo configurar SSH y múltiples cuentas de GitHub en Linux (Paso a paso)"
description: "Domina el uso de SSH en Linux. Configura varias cuentas de GitHub en tu equipo y trabaja en tus proyectos sin conflictos de autenticación."
---

# Configuración de SSH y múltiples cuentas de GitHub en Linux

## Índice

- [1. Objetivo](#1-objetivo)
- [2. Preparar el directorio SSH](#2-preparar-el-directorio-ssh)
- [3. Generar un par de claves SSH](#3-generar-un-par-de-claves-ssh)
- [4. Registrar la clave pública en GitHub](#4-registrar-la-clave-publica-en-github)
- [5. Configurar el archivo SSH config](#5-configurar-el-archivo-ssh-config)
- [6. Configurar los permisos](#6-configurar-los-permisos)
- [7. Probar la autenticación SSH](#7-probar-la-autenticacion-ssh)
- [Flujo de trabajo después de configurar SSH](#flujo-de-trabajo-despues-de-configurar-ssh)
- [8. Clonar o crear un repositorio utilizando SSH](#8-clonar-o-crear-un-repositorio-utilizando-ssh)
- [9. Verificar la URL remota](#9-verificar-la-url-remota)
- [10. Configurar la identidad de Git por proyecto](#10-configurar-la-identidad-de-git-por-proyecto)
- [11. Verificar la identidad configurada](#11-verificar-la-identidad-configurada)
- [12. Verificar la autenticación de la cuenta seleccionada](#12-verificar-la-autenticacion-de-la-cuenta-seleccionada)
- [13. ¿Por qué GitHub puede mostrar otros contributors?](#13-por-que-github-puede-mostrar-otros-contributors)
- [14. Estructura final del directorio SSH](#14-estructura-final-del-directorio-ssh)
- [15. Resumen de comandos importantes](#15-resumen-de-comandos-importantes)
- [Conceptos que debemos recordar](#conceptos-que-debemos-recordar)

## 1. Objetivo

Configurar SSH para trabajar con una o varias cuentas de GitHub desde una misma computadora, evitando mezclar las identidades y credenciales de cada cuenta.

Es importante entender que intervienen tres elementos diferentes:

-   **SSH:** permite autenticarnos ante GitHub.
-   **Git:** define el nombre y correo del autor de los commits.
-   **GitHub:** administra los repositorios, permisos y atribución de contribuciones.

## 2. Preparar el directorio SSH

Linux almacena las claves y configuraciones SSH del usuario en:

```
~/.ssh/
```

Si estamos configurando una laptop nueva:

```
mkdir -p ~/.ssh  
chmod 700 ~/.ssh
```

Si ya existe una configuración anterior, podemos respaldarla antes de comenzar.

## 3. Generar un par de claves SSH

Utilizaremos el algoritmo Ed25519:

```
ssh-keygen -t ed25519 -C "tu_correo@gmail.com" -f ~/.ssh/id_ed25519_personal
```

Parámetros:

| Parámetro  | Función                                       |
| ---------- | --------------------------------------------- |
| -t ed25519 | Define el algoritmo criptográfico.            |
| -C         | Agrega un comentario identificativo.          |
| -f         | Define el nombre y ubicación de los archivos. |

Podemos establecer una contraseña adicional (*passphrase*) para proteger la clave privada.

Se generarán dos archivos:

```
id\_ed25519\_personal  
id\_ed25519\_personal.pub
```

-   Sin `.pub`: clave privada. Nunca debemos compartirla.
-   Con `.pub`: clave pública. Esta se registra en GitHub.

Si tenemos varias cuentas, repetimos el procedimiento utilizando un nombre diferente para cada par de claves.

## 4. Registrar la clave pública en GitHub

Mostramos la clave pública:

```
cat ~/.ssh/id_ed25519_personal.pub
```

Después:

1.  Ingresamos a [https://github.com/settings/keys](https://github.com/settings/keys).
2.  Seleccionamos **New SSH key**.
3.  Asignamos un título identificativo.
4.  Seleccionamos `Authentication Key`.
5.  Pegamos el contenido de la clave pública.
6.  Guardamos.

La clave privada permanece exclusivamente en nuestra computadora.

## 5. Configurar el archivo SSH config

Creamos o editamos:

```
nano ~/.ssh/config
```

Agregamos:

```
Host github-personal  
    HostName github.com  
    User git  
    IdentityFile ~/.ssh/id\_ed25519\_personal  
    IdentitiesOnly yes
```
Explicación:

| Propiedad      | Función                                              |
| -------------- | ---------------------------------------------------- |
| Host           | Alias personalizado para identificar la conexión.    |
| HostName       | Servidor real al que nos conectaremos.               |
| User           | Usuario SSH de GitHub: git.                          |
| IdentityFile   | Ruta de la clave privada.                            |
| IdentitiesOnly | Limita la autenticación a la identidad especificada. |

El alias permite seleccionar explícitamente qué clave utilizar.

Por ejemplo:

```
ssh -T git@github-personal
```

Si tenemos otras cuentas, agregamos otros bloques `Host`, cada uno con su propio alias y clave privada.

## 6. Configurar los permisos

Establecemos los permisos adecuados:
```
chmod 700 ~/.ssh  
chmod 600 ~/.ssh/config  
chmod 600 ~/.ssh/id\_ed25519\_personal  
chmod 644 ~/.ssh/id\_ed25519\_personal.pub
```
## 7. Probar la autenticación SSH

Ejecutamos:

```
ssh -T git@github-personal
```

Si todo funciona correctamente, recibiremos un mensaje similar a:
```
Hi usuario! You've successfully authenticated,  
but GitHub does not provide shell access.
```
Esto confirma que GitHub reconoció la clave SSH y pudo autenticar nuestra cuenta.

Importante: este comando comprueba la autenticación, no la identidad que Git utilizará como autor de los commits.

# Flujo de trabajo después de configurar SSH

Una vez que tenemos SSH configurado, debemos asegurarnos de que cada proyecto utilice la cuenta correcta.

## 8. Clonar o crear un repositorio utilizando SSH

Cuando clonemos un repositorio existente, debemos utilizar el alias configurado en `~/.ssh/config`.

Ejemplo:

```
git clone git@github-personal:usuario/repositorio.git
```

No debemos utilizar directamente:

```
git clone https://github.com/usuario/repositorio.git
```

Si utilizamos HTTPS, la autenticación se realizará mediante HTTPS y no mediante nuestro alias SSH.

Si creamos un repositorio local desde cero, después de crearlo en GitHub podemos conectarlo utilizando:

```
git remote add origin git@github-personal:usuario/repositorio.git
```

## 9. Verificar la URL remota

Dentro del proyecto ejecutamos:

```
git remote -v
```

Deberíamos obtener algo parecido a:
```
origin  git@github-personal:usuario/repositorio.git (fetch)  
origin  git@github-personal:usuario/repositorio.git (push)
```
Esto permite verificar que el proyecto utiliza el alias SSH esperado.

Si encontramos una URL HTTPS y queremos cambiarla:

```
git remote set-url origin git@github-personal:usuario/repositorio.git
```

## 10. Configurar la identidad de Git por proyecto

Este paso es fundamental.

SSH determina con qué cuenta nos autenticamos, pero Git utiliza `user.name` y `user.email` para identificar al autor de nuestros commits.

Dentro del repositorio ejecutamos:
```
git config --local user.name "Tu nombre"  
git config --local user.email "tu\_correo@gmail.com"
```
Utilizaremos un correo que esté verificado y asociado a la cuenta de GitHub correspondiente.

¿Por qué usamos `--local`?

Porque esta configuración se aplica exclusivamente al repositorio actual y no modifica la identidad de nuestros otros proyectos.

## 11. Verificar la identidad configurada

Podemos consultar la identidad local del proyecto:
```
git config --local user.name  
git config --local user.email
```
También podemos consultar toda la configuración local:

```
git config --local --list
```

Para comprobar la autoría del último commit:

```
git log -1 --format="Autor: %an <%ae>%nCommitter: %cn <%ce>"
```

Esto nos permite comprobar qué nombre y correo se utilizaron realmente al crear el último commit.

Para revisar todo el historial:

```
git log --format="%h | %an | %ae" --reverse
```

Este comando muestra los commits desde el primero hasta el último, incluyendo sus autores y correos.

## 12. Verificar la autenticación de la cuenta seleccionada

También podemos probar directamente la conexión:

```
ssh -T git@github-personal
```

La respuesta debería mostrar el nombre de usuario de GitHub que corresponde a la clave configurada.

Es importante diferenciar:

-   `ssh -T`: comprueba con qué cuenta nos autenticamos.
-   `git config user.email`: muestra el correo configurado para los próximos commits.
-   `git log`: muestra la identidad utilizada en los commits existentes.
-   `git remote -v`: muestra a qué repositorio nos conectamos.

## 13. ¿Por qué GitHub puede mostrar otros contributors?

GitHub utiliza la información de los commits para atribuir contribuciones.

Por ejemplo, podemos tener un repositorio perteneciente a nuestra cuenta estudiantil, pero si configuramos:
```
git config user.name "Paulo"  
git config user.email "correo\_de\_otra\_cuenta@gmail.com"
```
GitHub podría asociar esos commits con nuestra otra cuenta, siempre que ese correo esté registrado allí.

También pueden aparecer otros contributors si existen commits realizados por otras identidades, como herramientas de automatización o Copilot.

Cambiar la configuración actual de Git no modifica los commits anteriores.

Por eso, para investigar las identidades que aparecen en Contributors, podemos ejecutar:

```
git log --format="%h | %an | %ae" --reverse
```

Así identificamos qué correo se utilizó en cada commit.

# 14. Estructura final del directorio SSH

Una configuración con una identidad podría verse así:
```
~/.ssh/  
├── config  
├── id\_ed25519\_personal  
├── id\_ed25519\_personal.pub  
└── known\_hosts
```
| Archivo                 | Propósito                               |
| ----------------------- | --------------------------------------- |
| config                  | Define los alias y las identidades SSH. |
| id_ed25519_personal     | Clave privada.                          |
| id_ed25519_personal.pub | Clave pública.                          |
| known_hosts             | Registra los servidores SSH conocidos.  |

# 15. Resumen de comandos importantes

| Comando                                        | Propósito                         |
| ---------------------------------------------- | --------------------------------- |
| ssh-keygen -t ed25519                          | Generar claves SSH.               |
| cat ~/.ssh/*.pub                               | Consultar claves públicas.        |
| nano ~/.ssh/config                             | Editar configuración SSH.         |
| chmod 700 ~/.ssh                               | Proteger el directorio SSH.       |
| ssh -T git@github-personal                     | Comprobar autenticación.          |
| git clone git@github-personal:usuario/repo.git | Clonar mediante SSH.              |
| git remote -v                                  | Consultar URL remota.             |
| git config --local user.name                   | Consultar nombre del autor.       |
| git config --local user.email                  | Consultar correo del autor.       |
| git log -1                                     | Consultar el último commit.       |
| git log --format="%h \| %an \| %ae" --reverse  | Revisar la autoría del historial. |

## Conceptos que debemos recordar

La configuración SSH permite administrar diferentes cuentas de GitHub desde una misma computadora, pero no configura automáticamente la identidad de los commits.

Por eso, debemos verificar siempre dos cosas en cada proyecto:

1.  Que la URL remota utilice el alias SSH de la cuenta correcta.
2.  Que la identidad local de Git tenga el nombre y correo correspondientes a esa cuenta.

De esta manera, podemos trabajar con diferentes cuentas de GitHub desde un mismo entorno Linux sin mezclar autenticación, autoría ni repositorios.