import { useEffect } from "react";
import * as WebBrowser from "expo-web-browser";

/**
 * ブラウザのウォームアップを行うカスタムフック
 *
 * このフックは、ExpoのWebBrowserモジュールを使用して、
 * ブラウザのウォームアップとクールダウンを行います。
 * ウォームアップは、このフックを使用するコンポーネントがマウントされたときに実行され、
 * クールダウンはコンポーネントがアンマウントされたときに実行されます。
 */
export const useWarmUpBrowser = () => {
  useEffect(() => {
    // ブラウザのウォームアップを実行
    void WebBrowser.warmUpAsync();

    // コンポーネントがアンマウントされたときにブラウザのクールダウンを実行
    return () => {
      void WebBrowser.coolDownAsync();
    };
  }, []);
};
