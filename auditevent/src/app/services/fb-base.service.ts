import { AuditEvent } from './../shared/models/audit-event';
import { AngularFirestore, CollectionReference, Query } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FbBaseService<T extends { resourceType: string }> {

  constructor(private afs: AngularFirestore) { }

  get(collectionName: string): Observable<T[]> {
    return this.afs.collection(collectionName, ref => {
      let query: CollectionReference | Query = ref;
      query = query.orderBy('resourceType', 'asc');
      return query;
    }).valueChanges() as Observable<T[]>;
  }


  async add(collectionName: string, data: AuditEvent, id?: string): Promise<string> {
    const uid = id ? id : this.afs.createId();
    data.id = uid;
    await this.afs.collection(collectionName).doc(uid).set(data);
    return uid;
  }

  getById(collectionName: string, resourceType: string): Observable<any> {
    return this.afs.collection(collectionName).doc(resourceType).valueChanges();
  }

  update(collectionName: string, id: string, data: any) {
    return this.afs.collection(collectionName).doc(id).update(data);
  }

  delete(collectionName: string, id: string) {
    return this.afs.collection(collectionName).doc(id).delete();
  }



}
