interface ContainerProps {
    children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ 
    children
}) => {
    return (
        <div className="w-full min-w-[300px]">
            {children}
        </div>
    );
}; 
export default Container;