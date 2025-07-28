
import SuggestionPage from '../components/parts/PortfolioSuggestionPage';
import InteractiveStatusPanel from '@/components/important/InteractiveLiveFeature'

export default function Page() {
  return (
   <div className='relative'>
    <SuggestionPage/>
    <InteractiveStatusPanel/>

   </div>
  );
}