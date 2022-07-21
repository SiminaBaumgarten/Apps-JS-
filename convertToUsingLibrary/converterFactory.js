import {myConverter, Converter} from './converter.js';
export default class Factory {
    static CONVERTER_TYPE_MY = 1;
    static CONVERTER_TYPE_CANONIC = 2;
    
    static create(base, converterType) {

        if(!converterType) {
            return "unable to make the convert. Please specify a converter type and try again!"
        }

        let converter;
        
        if (converterType == CONVERTER_TYPE_MY) {
            converter = new myConverter(base);
        } else if (converterType == CONVERTER_TYPE_CANONIC) {
            converter = new Converter(base);
        } 

        converter.converterType = converterType;

        converter.convert = () => console.log(`Convert with ${converterType}`);
    
        return converter;
    }
}

//const converterFactory = new Factory();