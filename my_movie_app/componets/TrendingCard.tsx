import { View, Text, Image, TouchableOpacity } from "react-native";
import MaskedView from "@react-native-masked-view/masked-view";
import React from "react";
import { Link } from "expo-router";
import { images } from "@/constants/images";

const TrendingCard = ({
  movie: { movie_id, title, poster_url },
  index,
}: TrendingCardProps) => {
  return (
    <Link href={`/movies/${movie_id}`} asChild>
      <TouchableOpacity>
        <Image
          source={{ uri: poster_url }}
          className="w-32 h-48 rounded-lg"
          resizeMode="cover"
        />
        <View className="absolute bottom-9 -left-3.5 px-2 py-1 rounded-full">
          <MaskedView
            maskElement={
              <Text className="font-bold text-white text-6xl">{index + 1}</Text>
            }
          >
            <Image
              source={images.rankingGradient}
              className="size-14"
              resizeMode="cover"
            />
          </MaskedView>
        </View>
        <Text className="text-sm font-bold mt-2 text-light-200">
          {title.length > 15 ? title.slice(0, 15) + "..." : title}
        </Text>
      </TouchableOpacity>
    </Link>
  );
};

export default TrendingCard;
