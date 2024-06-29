const cheffs = require ('../libs/cheffs');
const restoImported = require('../libs/restaurantes');
class Cheff {
    constructor(){}

    static getAll(){
        const cheffList = cheffs;
        return cheffList;
    }

    static getOne(cheffId){
        const cheff = cheffs[cheffId];
        return cheff;
    }
    
    static create(info){                                             //El propósito de las modificaciones que se hicieron en este código es para respetar el estilo de id c1, c2, c3...
        const cheffsAmount =  (Object.keys(cheffs)).length + 1;
        cheffs[cheffsAmount] = info;
        cheffs[cheffsAmount].resto='NAY';  //Not Asigned Yet
        return true;
   }

   static updateFirstName(cheffId, firstName){
        cheffs[cheffId].firstName=firstName;
        
        return true;
    }
    static restoAssign(cheffId, restoId){  ///update-resto-assign/
        cheffs[cheffId].resto=Object.keys(restoImported[restoId])[0];
        //cheffs[cheffId].resto =Object.keys(restaurantes[restoId])[0];
        return true;
    }
    
    static remove(cheffId){
        delete cheffs[cheffId];
        return true;
    }
}
module.exports = Cheff;