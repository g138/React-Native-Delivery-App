import { View, Text, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import ResturantCard from './ResturantCard';
import sanityClient from '../sanity';

const FeaturedRow = ({ id, title, description }) => {
	const [resturants, setResturants] = useState([]);

	useEffect(() => {
		sanityClient
			.fetch(
				`
					*[_type == "featured" && _id == $id] {
					...,
					restaurants[]->{
						...,
						dishes[] ->,
						type-> {
						name
						}
						},
						}[0]
					`,
				{ id }
			)
			.then((data) => setResturants(data.restaurants))
			.catch((err) => console.log(err));
	}, [id]);

	return (
		<View>
			<View className="flex-row items-center justify-between mt-4 px-4">
				<Text className="font-bold text-lg">{title}</Text>
				<ArrowRightIcon color="#00CCBB" />
			</View>

			<Text className="text-gray-500 text-xs px-4">{description}</Text>

			<ScrollView
				horizontal
				contentContainerStyle={{ paddingHorizontal: 15 }}
				showsHorizontalScrollIndicator={false}
				className="pt-4"
			>
				{resturants?.map((resturant) => (
					<ResturantCard
						key={resturant._id}
						id={resturant._id}
						imgUrl={resturant.image.asset._ref}
						title={resturant.name}
						short_description={resturant.short_description}
						reating={resturant.rating}
						address={resturant.address}
						genre={resturant.type.name}
						dishes={resturant.dishes}
						long={resturant.long}
						lat={resturant.lat}
					/>
				))}
			</ScrollView>
		</View>
	);
};

export default FeaturedRow;
