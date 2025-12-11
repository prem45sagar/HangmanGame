import Level1 from '../../assets/Images/Level1.svg';
import Level2 from '../../assets/Images/Level2.svg';
import Level3 from '../../assets/Images/Level3.svg';
import Level4 from '../../assets/Images/Level4.svg';
import Level5 from '../../assets/Images/Level5.svg';
import Level6 from '../../assets/Images/Level6.svg';
import Level7 from '../../assets/Images/Level7.svg';
import Level8 from '../../assets/Images/Level8.svg';

function Hangman({step}){
    const Images = [Level1, Level2, Level3, Level4, Level5, Level6, Level7, Level8];

    return (
        <div className="w-[300px] h-[300px]">
            <img 
                src={step >= Images.length ? Images[Images.length - 1] : Images[step]}
            />
        </div>
    );
}

export default Hangman;