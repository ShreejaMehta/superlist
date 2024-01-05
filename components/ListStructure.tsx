import { listData } from './listdata';
import ListView from './ListView';

interface HomeProps {}

const ListStructure: React.FC<HomeProps> = () => {
  return (
    <main className="bg-[#181824] p-24">
        <p
            className="font-bold text-[40px] leading-none px-24" 
            style={{ color: '#dedeeb'}} >
            Everything <br />
            <span className="text-[#3f86cf] italic">a team needs</span> 
          </p>
        <div>
        {listData.map((listData, i) => (
        
        <ListView key={`p_${i}`} {...listData} i={i} />
      ))}
        </div>
    
    <p className="font-bold text-[20px] leading-none px-24 italic" 
            style={{ color: '#dedeeb'}}>The list goes on....</p>
    
    </main>
  );
};

export default ListStructure;
