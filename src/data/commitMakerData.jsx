import home from '../assets/CommitMaker/home.webp'
import listaEjemplos from '../assets/CommitMaker/listaEjemplos.webp'
import scopes from '../assets/CommitMaker/scopes.webp'
import tipoCommit from '../assets/CommitMaker/tipoCommit.webp'

export default [
  {
    frame: home,
    title: 'Diseño e Interfaces',
    description: 'Diseñé y desarrollé la interfaz principal de usuario para la aplicación, asegurando una experiencia visualmente atractiva, funcional e intuitiva.'
  },
  {
    frame: scopes,
    title: 'Selector y Creador de Scopes',
    description: 'Diseñé y desarrollé una interfaz para la seleccion y creacion de scopes personalizados. Esto es para tener a la mano los scopes de commits mas comunes asi como tener la posibilidad de crear los propios'
  },
  {
    frame: tipoCommit,
    title: 'Selector de Tipo de Commit',
    description: 'Diseñé y desarrollé la interfaz para seleccionar el tipo de commit que vamos a crear, estos tipos son los recomendados por el estandar de Conventional Commits y presentan una corta explicacion para que sean mas intuitivos'
  },
  {
    frame: listaEjemplos,
    title: 'Selector de Ejemplos',
    description: 'Diseñé y desarrollé la interfaz para visualizar ejemplos de commits en los que el usuario puede guiarse para la creacion del propio, permite autoseleccionar el tipo una vez que se selecciona el ejemplo, de esta forma es mas facil e intuitivo para el usuario.'
  }
]
