import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React from 'react';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <>
      <IonPage>
        <IonHeader>
          <IonToolbar color="primary">
            <IonTitle>adaept</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <img src="/assets/corin.png" alt="" />
          <IonCard className="welcome-card">
            <IonCardHeader>
              <IonCardSubtitle></IonCardSubtitle>
              <IonCardTitle>Welcome</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <p></p>
            </IonCardContent>
          </IonCard>
        </IonContent>
      </IonPage>
    </>
  );
};

export default Tab1;
