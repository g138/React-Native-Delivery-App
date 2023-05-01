import { View, Text, Image, TextInput, ScrollView } from 'react-native';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
	AdjustmentsVerticalIcon,
	ChevronDownIcon,
	MagnifyingGlassIcon,
	UserIcon,
} from 'react-native-heroicons/outline';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import sanityClient from '../sanity';

const HomeScreen = () => {
	const navigation = useNavigation();
	const [featuredCategories, setFeaturedCategories] = useState();

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "featured"]{ ... , resturants[] -> { ... , dishes[] -> ,}}`
			)
			.then((data) => setFeaturedCategories(data))
			.catch((err) => console.log(err));
	}, []);

	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: false,
		});
	}, []);


	return (
		<SafeAreaView className="bg-white">
			<View className="flex-row items-center pb-3 mx-4 space-x-2">
				<Image
					source={{ uri: 'https://links.papareact.com/wru' }}
					className="h-7 w-7 bg-gray-300 p-4 rounded-full"
				/>

				<View className="flex-1">
					<Text className="font-bold text-xs text-gray-400">
						Deliever Now!
					</Text>
					<Text className="font-bold text-xl">
						Current Location
						<ChevronDownIcon size={20} color="#00CCBB" />
					</Text>
				</View>

				<UserIcon size={35} color="#00CCBB" />
			</View>

			<View className="flex-row space-x-2 items-center pb-2 mx-4">
				<View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
					<MagnifyingGlassIcon color="gray" size={20} />

					<TextInput
						placeholder="Resturants and Cuisines"
						keyboardType="default"
					/>
				</View>
				<AdjustmentsVerticalIcon color="#00CCBB" />
			</View>

			<ScrollView
				className="bg-gray-100"
				contentContainerStyle={{ paddingBottom: 100 }}
			>
				<Categories />

				{featuredCategories?.map((category) => (
					<FeaturedRow
						key={category._id}
						id={category._id}
						title={category.name}
						description={category.short_description}
					/>
				))}
			</ScrollView>
		</SafeAreaView>
	);
};

export default HomeScreen;
