import { comprobarNumero,  generarNumeroAleatorio } from "./motor";
import { NO_ES_UN_NUMERO,
         ES_EL_NUMERO_SECRETO,
         setNumeroParaAcertar,
         EL_NUMERO_ES_MAYOR,
         EL_NUMERO_ES_MENOR
} from "./modelo";
import * as modelo from "./modelo";
describe("comprobarNumero", () => {
    /*
 it("Debería de devolver NO_ES_UN_NUMERO cuando texto no es un número", () => {
 // Arrange
 const texto = "esto no es número";
 // Act
 const resultado = comprobarNumero(texto);
 // Assert
 expect(resultado).toBe(NO_ES_UN_NUMERO);
 });
*/
 it("Debería de devolver ES_EL_NUMERO_SECRETO cuando texto es el número a acertar", () => {
    // Arrange
    const texto = "18";
    vi.spyOn(modelo,"numeroParaAcertar","get").mockReturnValue(18);
    // Act
    const resultado = comprobarNumero(texto);
    // Assert
    expect(resultado).toBe(ES_EL_NUMERO_SECRETO);
    });
/*
it ("Deberia de devolver EL_NUMERO_MAYOR, si el numero es mayor."),()=> {
    // Arrange
    const numeroParaAcertar = 10;
    const texto="11";
    // Act
    setNumeroParaAcertar(numeroParaAcertar);
    const resultado = comprobarNumero(texto)
    // Assert
    expect(resultado).toBe(EL_NUMERO_ES_MAYOR);
}
it ("Deberia de devolver EL_NUMERO_MENOR, si el numero es mayor."),()=> {
    // Arrange
    const numeroParaAcertar = 10;
    const texto="9";
    // Act
    setNumeroParaAcertar(numeroParaAcertar);
    const resultado = comprobarNumero(texto)
    // Assert
    expect(resultado).toBe(EL_NUMERO_ES_MAYOR);
}
    */
   
it("MathRandom lo forzamos a que devuelva 0, deberia dar 0. Estoy tratando de generar un error"),()=> {
const numeroEsperado = 100;
vi.spyOn(global.Math, 'random').mockReturnValue(0);
//Act
const resultado = generarNumeroAleatorio();
//assert
expect(resultado).toBe(numeroEsperado);
}


 it("MathRandom lo hacemos que sea necesariamente 97, deveria devolver un error"),()=>{
    //Las constantes que quiero establecer
const numeroEsperado = 97;
vi.spyOn(global.Math, 'random').mockReturnValue(0.99);
    //Creo una constante que sera lo q de el test
const resultado = generarNumeroAleatorio();
    //Hago un expect con los datos que reciba
expect(resultado).toBe(numeroEsperado);
 }
});