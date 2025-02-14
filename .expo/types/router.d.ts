/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/../hooks/useEmotions`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/screens/HomeScreen`; params?: Router.UnknownInputParams; } | { pathname: `/screens/MyScreen`; params?: Router.UnknownInputParams; } | { pathname: `/screens/RecordScreen`; params?: Router.UnknownInputParams; } | { pathname: `/screens/UploadScreen`; params?: Router.UnknownInputParams; };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/`; params?: Router.UnknownOutputParams; } | { pathname: `/../hooks/useEmotions`; params?: Router.UnknownOutputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `/screens/HomeScreen`; params?: Router.UnknownOutputParams; } | { pathname: `/screens/MyScreen`; params?: Router.UnknownOutputParams; } | { pathname: `/screens/RecordScreen`; params?: Router.UnknownOutputParams; } | { pathname: `/screens/UploadScreen`; params?: Router.UnknownOutputParams; };
      href: Router.RelativePathString | Router.ExternalPathString | `/${`?${string}` | `#${string}` | ''}` | `/../hooks/useEmotions${`?${string}` | `#${string}` | ''}` | `/_sitemap${`?${string}` | `#${string}` | ''}` | `/screens/HomeScreen${`?${string}` | `#${string}` | ''}` | `/screens/MyScreen${`?${string}` | `#${string}` | ''}` | `/screens/RecordScreen${`?${string}` | `#${string}` | ''}` | `/screens/UploadScreen${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/../hooks/useEmotions`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/screens/HomeScreen`; params?: Router.UnknownInputParams; } | { pathname: `/screens/MyScreen`; params?: Router.UnknownInputParams; } | { pathname: `/screens/RecordScreen`; params?: Router.UnknownInputParams; } | { pathname: `/screens/UploadScreen`; params?: Router.UnknownInputParams; };
    }
  }
}
