const CARACTERES = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
const NUMBERS = '0123456789';

class Password {  //defino clase Password
  constructor( password ) {
    const esLongitud = !isNaN(parseInt(password))
    if (esLongitud) {
      this.longitud = password
      this.password = this.generarPassword()
    } else {
      this.password = password
      this.longitud = password.length
    }
  }

  esFuerte = () => { //desde aqui van los 2 metodos solicitados
    const { password } = this
    let contadorMayusculas = 0
    let contadorMinusculas = 0
    let contadorNumeros = 0

    if (password.length < 6) return false // 6 = 2 Mayusculas + 1 Minuscula + 3 Numeros 
    for (let index = 0; index < password.length; index++) {
      if ((password[index] === password[index].toUpperCase()) && (!NUMBERS.includes(password[index])) ) {
        contadorMayusculas++
      }
      if ((password[index] === password[index].toLowerCase()) && (!NUMBERS.includes(password[index])) ) {
        contadorMinusculas++
      }
      if (NUMBERS.includes(password[index])) {
        contadorNumeros++
      }
    }
    return ((contadorMayusculas > 2) && (contadorNumeros > 3) && (contadorMinusculas > 1))
  }

  generarPassword = () => {
    let nuevaContraseña = ''
    CARACTERES.length;
    for ( let i = 0; i < this.longitud; i++ ) {
      nuevaContraseña += CARACTERES.charAt(Math.floor(Math.random() *
      CARACTERES.length));
   }

   return nuevaContraseña;
  }

  getLongitud = () => {
    return this.longitud
  }

  getPassword = () => {
    return this.password
  }

  setLongitud = (longitud) => {
    this.longitud = longitud
    this.password = this.generarPassword
  }
}

export default Password


