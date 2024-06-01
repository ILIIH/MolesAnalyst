import React, { useState, useRef, useEffect } from "react";
import { StatusBar } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { Provider as ReduxProvider } from "react-redux";
import { persistStore } from "redux-persist";
import Toast from "react-native-easy-toast";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import Navigation from "./src/navigation";
import eventManager, { SHOW_TOAST } from "./src/utility/eventManager";
import store from "./src/redux/ReduxStore";

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const toastRef = useRef<Toast>(null);

  const loadingData = async () => {
    await SplashScreen.preventAutoHideAsync();

    const storeTask = new Promise<void>((resolve) => {
      persistStore(store, null, async () => {
        resolve();
      });
    });
    await SplashScreen.hideAsync();

    setIsReady(true);
  };

  useEffect(() => {
    loadingData();

    const showToast = (message: string) => {
      toastRef.current?.show(message, 2500, () => {});
    };
    eventManager.on(SHOW_TOAST, showToast);
    return () => {
      eventManager.offCallback(SHOW_TOAST, showToast);
    };
  }, []);

  return isReady ? (
    <ActionSheetProvider>
      <ReduxProvider store={store}>
        <StatusBar
          translucent
          barStyle="light-content"
          backgroundColor="transparent"
        />
        <Navigation />
        <Toast ref={toastRef} />
      </ReduxProvider>
    </ActionSheetProvider>
  ) : null;
}
