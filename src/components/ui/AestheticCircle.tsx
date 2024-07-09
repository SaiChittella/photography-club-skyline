interface AestheticCirlceProps {
    className?:string;
}

const AestheticCircle: React.FC<AestheticCirlceProps> = ({className}) => {



    return(
        <div className={`absolute w-[70%] aspect-square -z-30 opacity-50 blur-[190px] rounded-full ${className}`}></div>
    );
}

export default AestheticCircle