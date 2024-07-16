import { Injectable } from '@angular/core';
import { RequestManager } from '../managers/requestManager';

@Injectable()
export class PreinscripcionesService {

    constructor(private requestManager: RequestManager) {
        this.requestManager.setPath('PREINSCRIPCIONES_SERVICE');
    }
    get(endpoint: string) {
        this.requestManager.setPath('PREINSCRIPCIONES_SERVICE');
        return this.requestManager.get(endpoint);
    }

    post(endpoint: string, element: any) {
    this.requestManager.setPath('PREINSCRIPCIONES_SERVICE');
    return this.requestManager.post(endpoint, element);
    }

    put(endpoint: string, element: { Id: any; }) {
    this.requestManager.setPath('PREINSCRIPCIONES_SERVICE');
    return this.requestManager.put(endpoint, element);
    }

    delete(endpoint: string, element: { Id: any; }) {
    this.requestManager.setPath('PREINSCRIPCIONES_SERVICE');
    return this.requestManager.delete(endpoint, element.Id);
    }
}
