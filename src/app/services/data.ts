import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable, map } from 'rxjs';

// Consulta para la búsqueda y lista general
const GET_VINOS = gql`
  query GetVinos {
    vinos {
      documentId
      nombre
      cepa
      imagen {
        url
      }
    }
  }
`;

// Consulta para el detalle
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

// Consulta para el vino RECOMENDADO
const GET_VINO_RECOMENDADO = gql`
  query GetVinoRecomendado {
    vinos(filters: { recomendado: { eq: true } }) {
      documentId
      nombre
      descripcion
      imagen {
        url
      }
    }
  }
`;

// Consulta para la lista de DESTACADOS
const GET_VINOS_DESTACADOS = gql`
  query GetVinosDestacados {
    vinos(filters: { destacado: { eq: true } }, pagination: { limit: 5 }) {
      documentId
      nombre
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

  getVinos(): Observable<any[]> {
    return this.apollo.watchQuery<any>({ query: GET_VINOS }).valueChanges.pipe(
      map(result => result.data.vinos)
    );
  }

  getVinoByDocId(docId: string): Observable<any> {
    return this.apollo.watchQuery<any>({ query: GET_VINO_BY_DOC_ID, variables: { documentId: docId } }).valueChanges.pipe(
      map(result => result.data.vino)
    );
  }

  getVinosRecomendados(): Observable<any[]> {
    return this.apollo.watchQuery<any>({
      query: GET_VINO_RECOMENDADO
    }).valueChanges.pipe(
      map(result => result.data.vinos)
    );
  }

  getVinosDestacados(): Observable<any[]> {
    return this.apollo.watchQuery<any>({
      query: GET_VINOS_DESTACADOS
    }).valueChanges.pipe(
      map(result => result.data.vinos)
    );
  }
}