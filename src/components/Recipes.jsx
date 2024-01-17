import { View, Text } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp } from "react-native-responsive-screen"
import RecipiesCard from "./RecipesCard"
import { useNavigation } from "@react-navigation/native"
import MasonryList from "@react-native-seoul/masonry-list"
import RecipesCard from './RecipesCard'
import Loading from './Loading'



export default function Recipies({ meals, categories}) {
  const navigation = useNavigation();
  return (
    <View className="mx-4 space-y-4">
      <Text
        style={{
          fontSize: hp(2)
        }}
        className="font-semibold text-neutral-600"
      >
        {meals.length} {categories.length} Recipies
      </Text>
      <View>
        {
          categories.length == 0 || meals.length == 0
            ? (<Loading size="large" className="mt-20" />)
            : (
              <MasonryList
                data={meals}
                keyExtractor={(meal) => { return meal.idMeal }}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                renderItem={({item, i}) => {
                  return <RecipesCard item={item} index={i} navigation={navigation} />
                }}
                onEndReachedThreshold={0.1}
              />
            )
        }
      </View>
    </View>
  )
}