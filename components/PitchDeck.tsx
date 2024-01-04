import { pitch } from './data';
import CardComponent from './CardComponent';

interface HomeProps {}

const PitchDeck: React.FC<HomeProps> = () => {
  return (
    <main className="">
        <div>
        {pitch.map((pitch, i) => (
        
        <CardComponent key={`p_${i}`} {...pitch} i={i} />
      ))}
        </div>
    
    </main>
  );
};

export default PitchDeck;
