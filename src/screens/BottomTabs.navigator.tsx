import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const bottomTabs = createBottomTabNavigator();

import HomeScreen from "./Home.screen";
import BookmarksScreen from "./Bookmarks.screen";

export default function BottomTabs() {
    return(
        <bottomTabs.Navigator>
            <bottomTabs.Screen name="Stories" component={HomeScreen} />
            <bottomTabs.Screen name="Bookmarks" component={BookmarksScreen} />
        </bottomTabs.Navigator>
    )
}