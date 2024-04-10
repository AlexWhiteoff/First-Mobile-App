import React from "react";
import NewsSnippet from "./news";
import { View } from "react-native";

const NewsList = ({ newsList }) => {

    return (
        <View>
            {newsList.map((news, index) => (
                <NewsSnippet key={index} news={news} />
            ))}
        </View>
    );
};

export default NewsList;
