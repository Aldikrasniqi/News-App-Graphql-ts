import { NavigatorScreenParams } from "@react-navigation/native";

export type BottomTabParamList = {
    Home: undefined;
    Bookmarks: undefined;
}

export type RootStackParamList = {
    BottomTabs: NavigatorScreenParams<BottomTabParamList>;
    StoryDetails: {
        storyId: string;
        title: string;
    }
}