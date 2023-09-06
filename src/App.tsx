import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

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
import Login from './pages/Login';
import Register from './pages/Register';
import Intro from './components/intro';
import Send from './pages/Send';
import Tab4 from './pages/Tab4';
import Tab3 from './pages/Tab3';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/">
          <Login />
        </Route>
        <Route component={Home} path="/home" />
        <Route component={Register} path="/register" exact />
        <Route component={Tab1} path="/tab1" exact />
        <Route component={Tab2} path="/tab2" exact />
        <Route component={Tab3} path="/tab3" exact />
        <Route component={Tab4} path="/tab4" exact />
        <Route component={Send} path="/send" exact />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
