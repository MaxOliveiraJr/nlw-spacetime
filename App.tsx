import { StatusBar } from 'expo-status-bar'
import { ImageBackground, View } from 'react-native'

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'
import { BaiJamjuree_700Bold } from '@expo-google-fonts/bai-jamjuree'

import bgBlur from './src/assets/bg-blur.png'
import Stripes from './src/assets/stripes.svg'
import { styled } from 'nativewind'
const StyledStripes = styled(Stripes)

export default function App() {
  const [hasLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold,
  })

  if (!hasLoadedFonts) {
    return null
  }

  return (
    <ImageBackground
      source={bgBlur}
      className="relative flex-1 items-center bg-gray-900"
      imageStyle={{ position: 'absolute', left: '-100%' }}
    >
      <StyledStripes className="absolute left-2"></StyledStripes>
      <StatusBar style="light" translucent></StatusBar>
    </ImageBackground>
  )
}
