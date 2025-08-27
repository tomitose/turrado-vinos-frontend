import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable, map } from 'rxjs';

// Consulta para la lista (incluye documentId para los links)
const GET_VINOS = gql`
  query GetVinos {
    vinos {
      documentId
      nombre
      bodega
    }
  }
`;

const GET_VINO_BY_DOC_ID = gql`
  query GetVinoByDocId($documentId: ID!) {
    vino(documentId: $documentId) {
      nombre
      descripcion
      precio
      bodega
      cepa
      anada
      imagen {
        url
      }
    }
  }
`;

const GET_VINO_DESTACADO = gql`
  query GetVinoDestacado {
    vinos(filters: { destacado: { eq: true } }, pagination: { limit: 1 }) {
      documentId
      nombre
      descripcion
      imagen {
        url
      }
    }
  }
`;

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private apollo: Apollo) { }

  /**
   * Obtiene la lista de todos los vinos para la vista de catálogo.
   */
  getVinos(): Observable<any[]> {
    return this.apollo.watchQuery<any>({
      query: GET_VINOS
    }).valueChanges.pipe(
      map(result => result.data.vinos)
    );
  }

  /**
   * Obtiene un solo vino por su documentId para la vista de detalle.
   * @param docId El documentId del vino a buscar.
   */
  getVinoByDocId(docId: string): Observable<any> {
    return this.apollo.watchQuery<any>({
      query: GET_VINO_BY_DOC_ID,
      variables: { documentId: docId }
    }).valueChanges.pipe(
      map(result => result.data.vino)
    );
  }

  getVinoDestacado(): Observable<any> {
    return this.apollo.watchQuery<any>({
      query: GET_VINO_DESTACADO
    }).valueChanges.pipe(
      map(result => result.data.vinos[0])
    );
  }
}