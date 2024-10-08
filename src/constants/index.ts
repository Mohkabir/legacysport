interface IAsyncStorageKeys {
  QUERY: string;
  TOKEN: string;
  USER: string;
  ISAUTH: string;
  ISONBOARDED: string;
  ISGETSTARTED: string;
}

export const asyncStorageKeys: IAsyncStorageKeys = {
  QUERY: 'query',
  TOKEN: 'token',
  USER: 'user',
  ISAUTH: 'isAUth',
  ISONBOARDED: 'isOnboarded',
  ISGETSTARTED: 'isGetStarted',
};

interface IAppRoutes {
  ONBOARDING: string;
  BACKHOME: string;
  TRAINING: string;
  STARTLOADER: string;
  CONTENTS: string;
  STARTCONTENTS: string;
  HOME: string;
  STORE: string;
  LEAGUE: string;
  MORE: string;
  RULES: string;
  DETAILSRULE: string;
}

export const appRoutes: IAppRoutes = {
  // STACK ROUTES
  ONBOARDING: 'onboarding',
  BACKHOME: 'Back home',
  TRAINING: 'Training',
  STARTLOADER: 'Start Loader',
  CONTENTS: 'Contents',
  STARTCONTENTS: 'Start contents',
  DETAILSRULE: 'Details Rule',
  // TABS ROUTE
  HOME: 'Home',
  STORE: 'store',
  LEAGUE: 'league',
  MORE: 'more',
  RULES: 'rules',
};
