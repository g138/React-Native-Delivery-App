import { View, Text, Image, TextInput, ScrollView } from 'react-native';
import React, { useLayoutEffect } from 'react';
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

const HomeScreen = () => {
	const navigation = useNavigation();

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
				<FeaturedRow
					title="Featured"
					description="Paid placements from our partners"
					id="featured"
				/>
				<FeaturedRow
					title="Tasty Discounts"
					description="Everyone enjoying these juicy discounts!"
					id="discounts"
				/>
				<FeaturedRow
					title="Offers near you!!"
					description="Why not support you local resturant tonight!"
					id="offers"
				/>
			</ScrollView>
		</SafeAreaView>
	);
};

export default HomeScreen;
