import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { getAuth, provideAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    importProvidersFrom(
      provideFirebaseApp(() =>
        initializeApp({
          apiKey: "AIzaSyBWGarBxqYiIzlFNKvpsoXmwhdgmgnWIfs",
          authDomain: "join-9590c.firebaseapp.com",
          projectId: "join-9590c",
          storageBucket: "join-9590c.firebasestorage.app",
          messagingSenderId: "754313259349",
          appId: "1:754313259349:web:0057d616337c8d696467dc"
        })
      )
    ),
    importProvidersFrom(provideAuth(() => getAuth())),
    importProvidersFrom(provideFirestore(() => getFirestore())), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"join-9590c","appId":"1:754313259349:web:0057d616337c8d696467dc","storageBucket":"join-9590c.firebasestorage.app","apiKey":"AIzaSyBWGarBxqYiIzlFNKvpsoXmwhdgmgnWIfs","authDomain":"join-9590c.firebaseapp.com","messagingSenderId":"754313259349"}))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirestore(() => getFirestore())),
  ],
};
