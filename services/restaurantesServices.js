const restaurantes = require ('../libs/restaurantes');

class Resto {
    constructor(){}

    static getAll(){
        const restoList = restaurantes;
        return restoList;
    }

    static getOne(restoId){
        const resto = restaurantes[restoId];
        return resto;
    }
    
    static create(info){                                             //El propósito de las modificaciones que se hicieron en este código es para respetar el estilo de id c1, c2, c3...
        const restaurantesAmount =  (Object.keys(restaurantes)).length + 1;
        restaurantes[restaurantesAmount] = info;
        return true;
   }

   static updateFirstName(restoId, firstName){
        const regBuffer =restaurantes[restoId][0];
        delete restaurantes[restoId][0];
        restaurantes[restoId][firstName]=regBuffer;
        
        return true;
    }
    
    static remove(restoId){
        delete restaurantes[restoId];
        return true;
    }
}
module.exports = Resto;