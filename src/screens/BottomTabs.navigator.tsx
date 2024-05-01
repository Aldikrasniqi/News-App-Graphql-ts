import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomTabParamList } from "../types/types";

const bottomTabs = createBottomTabNavigator<BottomTabParamList>();

import HomeScreen from "./Home.screen";
import BookmarksScreen from "./Bookmarks.screen";

export default function BottomTabs() {
    return(
        <bottomTabs.Navigator>
            <bottomTabs.Screen name="Home" component={HomeScreen} />
            <bottomTabs.Screen name="Bookmarks" component={BookmarksScreen} />
        </bottomTabs.Navigator>
    )
}