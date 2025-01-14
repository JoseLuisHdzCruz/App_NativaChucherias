import { IonApp } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { setupIonicReact } from '@ionic/react';
import { Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import { AuthProvider } from './contexts/AuthContext';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <AuthProvider> {/* Envolver todo dentro del AuthProvider */}
      <IonReactRouter>
        <Route path="/" component={MainLayout} exact={false} />
        {/* Puedes agregar más rutas aquí si es necesario */}
      </IonReactRouter>
    </AuthProvider>
  </IonApp>
);

export default App;
