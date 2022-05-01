<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Library</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Library</ion-title>
        </ion-toolbar>
      </ion-header>
      
      <ion-content fullscreen>
        <ion-list>
          <ion-list-header> Menu 1 </ion-list-header>

          <ion-item>
            <ion-avatar slot="start">
              <img src="./no-image.png" />
            </ion-avatar>
            <ion-label>
              <h2>Finn</h2>
              <h3>I'm a big deal</h3>
              <p>Listen, I've had a pretty messed up day...</p>
            </ion-label>
          </ion-item>

          <ion-item>
            <ion-avatar slot="start">
              <!-- <img src="./avatar-han.png" /> -->
            </ion-avatar>
            <ion-label>
              <h2>Han</h2>
              <h3>Look, kid...</h3>
              <p>I've got enough on my plate as it is, and I...</p>
            </ion-label>
          </ion-item>
        </ion-list>
      </ion-content>
    
      <ExploreContainer name="Library page" />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';

export default  defineComponent({
  name: 'LibraryPage',
  components: { ExploreContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
});
</script>
