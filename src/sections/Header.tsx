export const HeaderSection = () => {
    return (
         <div>
            <div className="container">
                <div className="flex justify-between">
                    <div>
                        <img src="/assets/images/logo.svg" alt="Shadojus Design Logo" />
                        </div>
                        <div>
                         <div className="size-10 relative">
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                                <div className="w-5 h-0.5 bg-zinc-300 -translate-y-1">
                                </div>
                                <div className="absolute left-1/2 top-1/2 -translate-x-1/2">
                                </div>
                                <div className="w-5 h-0.5 bg-zinc-300 translate-y-1">
                                </div>
                            </div>  
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    );
};