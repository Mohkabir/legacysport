import {useState} from 'react';
import {View} from 'react-native';
import {globalStyle} from '../../styles';
import About from './about';
import SkillLevel from './skill-level';

export default function AcountSetup({
  handleFinishOnboard,
}: {
  handleFinishOnboard: any;
}) {
  const [isAbout, setIsAbout] = useState(true);

  return (
    <View style={{...globalStyle.container}}>
      {isAbout ? (
        <About handleNext={() => setIsAbout(false)} />
      ) : (
        <SkillLevel handleFinishOnboard={handleFinishOnboard} />
      )}
    </View>
  );
}
