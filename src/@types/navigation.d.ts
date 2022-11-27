export type GroupNavigationProps = {
  id?: string;
}

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      newGroup: undefined;
      addFriend: GroupNavigationProps;
      expenses: undefined;
      addItem: undefined;
      payment: undefined;
      finalization: undefined;
    }
  }
}