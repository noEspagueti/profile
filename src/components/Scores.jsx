export const Scores = () => {
    return (
        <div className="flex items-center justify-evenly my-4 py-2">
            <div className="flex items-center bg-white p-1 rounded-2xl w-1/2 h-32 mx-1 shadow-lg">
                <div className="flex items-center justify-center flex-row w-full h-full">
                    <div className="bg-yellow-200 p-5 rounded-lg mr-8">
                        <span className="text-4xl font-bold">⚡</span>
                    </div>
                    <div className="flex justify-center flex-col items-center">
                        <span className="font-bold text-4xl">60</span>
                        <p>Exp. Totales</p>
                    </div>
                </div>
            </div>
            <div className="bg-white p-2 rounded-2xl w-1/2 h-32 m-1 shadow-lg">
                <div className="">
                    <img src="C:\Users\angel\hackathon\profile\public\descubridores.png" alt="clan" />
                </div>
            </div>
        </div>
    );
}