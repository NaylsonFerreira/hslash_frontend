
type Attr = {
    [key: string]: string | number | boolean | Attr
}


export class BaseModel {
    [key: string]: any;
    id: string = ''
    createdAt = new Date();
    updatedAt = new Date();

    constructor() { }

    private toCamelCase(str: string): string {
        return str.replace(/([A-Z])/g, ' $1').replace(/^./, function (str) { return str.toUpperCase(); });
    }

    private toSnackeCase(str: string): string {
        return str.replace(/([A-Z])/g, '_$1').toLowerCase();
    }

    toJSON() {
        const jsonData: Attr = {}
        Object.keys(this).forEach(keyCamelcase => {
            const key = this.toSnackeCase(keyCamelcase);
            const value = this[keyCamelcase];

            if (typeof value === 'function') {
                return;
            }

            if (typeof value === 'object') {

                if (value instanceof BaseModel) {
                    jsonData[key] = value.toJSON()
                } else if (value instanceof Date) {
                    jsonData[key] = value.toISOString();
                } else {
                    jsonData[key] = value;
                }

            }
            else {
                jsonData[key] = value;
            }
        });

        return jsonData;
    }

    fromJSON(json: Attr) {
        Object.keys(this).forEach(key => {
            const value = json[this.toSnackeCase(key)];
            if (typeof value === 'function') {
                return;
            }
            if (typeof value === 'object') {

                if (this[key] instanceof BaseModel) {
                    this[key].fromJSON(value);
                } else if (this[key] instanceof Date) {
                    this[key] = this.isoStringToDate(value);
                } else {
                    this[key] = value;
                }

            } else {
                this[key] = value;
            }
        });
    }

    static create(json: any) {
        const newInstance = new this();
        newInstance.fromJSON(json)
        return newInstance;
    }

    static IsoStringToDate(isoString: string) {
        const [dateYMD, timeHMSss] = isoString.split('T');
        const [year, month, day] = dateYMD.split('-');
        const [hour, minute, second] = timeHMSss.split(':');
        const [secondFraction] = timeHMSss.split('.');
        return new Date(+year, +month - 1, +day, +hour, +minute, +second, +secondFraction);
    }
}

export default BaseModel;