export class Analytics {
    static ENV = process.env.NODE_ENV
    static PUSH(data) {
        if (window.dataLayer) {
            window.dataLayer.push({ ...data, environment: this.ENV });
        } else {
            console.log("No datalayer configured")
        }
    }
}